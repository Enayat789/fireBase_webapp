import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials);
    } catch (error) {
      console.error(error);

      // here checking the error based on firebase
      if (error.code === "auth/missing-email") {
        alert("Please enter email");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid Email");
      } else if (error.code === "auth/missing-password") {
        alert("Enter password");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Already have an account with this email");
      }
    }
  };

  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col items-center gap-6 ">
      <h2 className=" w-[35%] flex  justify-center text-4xl text-gray-600 mt-32">
        Create Account
      </h2>

      <div className=" bg-gray-400 w-[35%] h-auto pt-10 p-3 flex flex-col items-center justify-between gap-6 rounded-md">
        <input
          type="text"
          placeholder="Name..."
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md "
        />
        <input
          type="email"
          placeholder="email@gmail.com"
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md "
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="pass*****"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className=" w-[70%] p-3 text-lg border-none outline-none rounded-md  "
        />
        <div className=" w-full  flex flex-col justify-center items-center mt-4 gap-2">
          <button
            className=" bg-gray-300 w-32 p-3 rounded-md hover:bg-gray-500  hover:text-white text-lg"
            onClick={signUp}
          >
            Sign Up
          </button>

          {/* to navigate to SIGNIN COMP. i am using link */}
          <Link to="/">
            <u>or SignIn?</u>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
