import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

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

      if (error.code === "auth/invalid-email") {
        alert("invalid email");
      } else if (error.code === "auth/missing-password") {
        alert("invalid password");
      } else if (error.code === "auth/invalid-credential") {
        alert("invalid credentials");
      }
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col items-center gap-6 ">
      <h2 className=" w-[40%] flex  justify-center text-4xl text-gray-600 mt-32">
        Login To Your Account
      </h2>

      <div className=" bg-gray-400 w-[35%] h-auto p-3 pt-10 flex flex-col items-center justify-center gap-10 rounded-md">
        <input
          type="email"
          placeholder="Email..."
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md"
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
        <div className=" w-full  flex flex-col justify-center items-center mt-4 gap-2">
          <button
            className=" bg-gray-300 w-32 p-3 rounded-md hover:bg-gray-500 hover:text-white text-lg"
            onClick={signIn}
          >
            Login
          </button>

          {/* using LINK to Navigate to the SIGNUP UI */}
          <Link to="/signup">
            <u>or SignUp?</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
