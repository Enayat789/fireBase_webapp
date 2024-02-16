import "./App.css";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
// import Loader from "./Components/Loader/Loader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
