import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container mx-5 md:mx-auto flex justify-between items-center text-white">
      <a href="#" className="text-2xl font-bold">
        BLOG
      </a>
      <Navbar />
    </div>
  );
};

export default Header;
