// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center my-5">
      <h1 className="my-2 text-3xl">{children}</h1>
      <div className="h-[5px] w-[100px] bg-gray-500"></div>
    </div>
  );
};

export default Heading;
