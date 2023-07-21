import bgImage from "../assets/bg_home.jpg";
import Banner from "./Banner";
import Header from "./Header";

const Home = () => {
  return (
    <div
      className="h-screen"
      style={{
        background: `url(${bgImage})`,
      }}
    >
      <div className="py-10 h-full bg-black bg-opacity-50">
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
