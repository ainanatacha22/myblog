const Search = () => {
  return (
    <div className="flex justify-center my-10">
      <input
        type="text"
        placeholder="Article title..."
        className="py-3 border px-3 me-5"
      />{" "}
      <button>Search</button>
    </div>
  );
};

export default Search;
