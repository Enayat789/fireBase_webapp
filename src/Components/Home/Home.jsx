import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col gap-4 justify-center items-center">
      <div className=" bg-gray-300 w-[30%] h-[30%] flex justify-around items-center p-4 rounded-md">
        {/* <button className=" bg-white rounded-md pl-6 pr-6 p-3 text-lg">
          <Link to="/signin">Login</Link>
        </button> */}
        <Link to="/signin">
          <button className=" bg-white rounded-md pl-6 pr-6 p-3 text-lg">
            Signin
          </button>
        </Link>

        <Link to="/signup">
          <button className=" bg-white rounded-md pl-6 pr-6 p-3 text-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
