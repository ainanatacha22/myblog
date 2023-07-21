import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Article = ({ imageLink, title, description, id }) => {
  return (
    <Link
      to={`/article/${id}`}
      className="shadow-lg hover:cursor-pointer hover:scale-110 transition duration-200"
    >
      <img
        alt="Card"
        className="bg-gray-600 h-[300px] w-full"
        src={imageLink}
      />
      <div className="m-4">
        <h4 className="font-bold my-4">{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Article;
