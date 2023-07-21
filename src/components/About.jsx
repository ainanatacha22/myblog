import Heading from "./Heading";

const About = () => {
  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2" id="about">
      <div className="h-[600px] overflow-hidden">
        <img
          alt="About"
          className=" bg-gray-600 hover:scale-125 transition duration-300 h-full"
          src="https://images.unsplash.com/photo-1683438849896-bc17ba4ed571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className="flex flex-col justify-center px-10">
        <Heading>About</Heading>
        <p className="text-gray-600 my-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          laborum numquam consequatur minus quisquam in quibusdam temporibus, at
          molestiae voluptas autem architecto! Impedit, alias neque? Et odio
          veniam necessitatibus beatae.
        </p>
      </div>
    </div>
  );
};

export default About;
