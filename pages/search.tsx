import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from '../Response';

function Search({ results }: any) {
  const router = useRouter();

	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/google.png" />
			</Head>

			{/* Header */}
			<Header />

			{/* Search Results */}
      <SearchResults results={results} />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context: any) {
	const useDummyData = false;
  const startIndex = context.query.start || '0';

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		  ).then((res) => res.json());

	// After the server has rendered... pass results to the client
	return {
		props: {
			results: data,
		},
	};
}
