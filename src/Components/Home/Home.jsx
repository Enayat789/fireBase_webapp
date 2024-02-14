import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col gap-4 justify-center items-center">
      <div className=" bg-gray-300 w-[30%] h-[30%] flex justify-around items-center p-4 rounded-md">
        <button className=" bg-white rounded-md pl-6 pr-6 p-3 text-lg">
          <Link to="/signin">Login</Link>
        </button>
        <button className=" bg-white rounded-md pl-6 pr-6 p-3 text-lg">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
