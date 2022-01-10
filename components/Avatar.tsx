interface props {
  url: string;
  className: string;
}

const Avatar = ({ url, className }: props) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile picture"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ease-out ${className}`}
    />
  );
};

export default Avatar;
