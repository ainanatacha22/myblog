const Subscribe = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="py-10 container mx-auto flex flex-col items-center">
        <h1 className="text-2xl">SUBSCRIBE</h1>
        <h2 className="text-gray-400">Sign up to our newsletter</h2>
        <form className="flex flex-col items-center">
          <input
            type="text"
            className="bg-white px-5 py-4 my-5"
            placeholder="Your email"
          />
          <button
            type="submit"
            className="px-10 py-2 border-2 border-gray-500 my-5"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
