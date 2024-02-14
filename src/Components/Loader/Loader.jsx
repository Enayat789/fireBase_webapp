import React from "react";
import spinner from "../Images/max-loader.gif";

const Loader = () => {
  return (
    <div>
      <div className=" bg-white w-[100vw] h-[100vh] flex items-center justify-center ">
        <img src={spinner} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
