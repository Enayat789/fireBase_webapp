import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col items-center gap-6 ">
      <h2 className=" w-[35%] flex  justify-center text-4xl text-gray-600 mt-32">
        LOGIN / SIGN UP
      </h2>

      <div className=" bg-gray-400 w-[35%] h-[40%] flex flex-col items-center justify-center gap-10 rounded-md">
        <input
          type="email"
          placeholder="Email..."
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md  "
        />
        <div className=" w-full  flex justify-around mt-4">
          <button
            className=" bg-gray-300 w-32 p-3 rounded-md hover:bg-gray-500 hover:text-white text-lg"
            onClick={signIn}
          >
            Login
          </button>
          <button className=" bg-gray-300 w-32 p-3 rounded-md hover:bg-gray-500  hover:text-white text-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
