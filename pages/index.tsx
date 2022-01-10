import Head from "next/head";
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import React, { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const searchInputRef: any = useRef(null);
  const router = useRouter();

  const search = (e: any) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return; // if field is empty
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google.png" />
      </Head>

      {/* Header */}
      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url='https://coaching.papareact.com/ai9' className='' />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height='100' width="300" />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 border px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" ref={searchInputRef} />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className='btn' type="submit" onClick={search}>Google Search</button>
          <button className='btn'>I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
