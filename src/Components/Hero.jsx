import React from "react";

function Hero() {
  return (
    <div className=" bg-blue-500 h-full sm:h-96 flex flex-col justify-center items-center mx-auto py-4">
      <h1 className=" sm:text-7xl text-2xl  text-white mb-5 mt-1">
        Fuel Great Thinking
      </h1>
      <span className=" text-sm mx-auto">
        Become a Medium member to enjoy unlimited access and <br /> directly
        support the writers you read most
      </span>
      <button className=" text-black bg-white w-fit px-4 py-1 rounded-2xl mt-4">
        Get unlimited access
      </button>
    </div>
  );
}

export default Hero;
