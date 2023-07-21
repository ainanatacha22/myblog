import Article from "./Article";
import Heading from "./Heading";
import Search from "./Search";
import { blogs } from "../data/blog";

const ArticleList = () => {
  return (
    <div className="py-10 bg-gray-100" id="articles">
      <div className="container mx-5 md:mx-auto">
        <Heading>LATEST ARTICLES</Heading>
        <Search />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {
            blogs.map((item,index) => {
              return(
                <Article
                  key={index}
                  imageLink={item.image}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
