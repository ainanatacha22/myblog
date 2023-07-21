import Home from "../components/Home";
import ArticleList from "../components/ArticleList";
import About from "../components/About";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Home />
      <main>
        <ArticleList />
        <About />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
