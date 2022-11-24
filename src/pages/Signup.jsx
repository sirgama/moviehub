import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/logo.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const [errorr, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://images.hdqwalls.com/download/the-lion-king-2019-scar-ll-1920x1080.jpg"
          alt="heroimage"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-16 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-8">
              {errorr && (
                <div
                  className=" p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium"></span> {errorr}.
                  </div>
                </div>
              )}
              <img
                className=" h-16 w-auto lg:block my-0"
                src={Logo}
                alt="MovieHub"
              />
              Create account
              <h1 className="text-xl font-bold text-star my-3"></h1>
              <form
                onSubmit={handleSubmit}
                action=""
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  name="emailRef"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  name="PasswordRef"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="bg-pink-500 px-6 py-3 rounded text-gray-30 my-6 font-semibold"
                >
                  Create account
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input type="checkbox" name="" id="" /> Remember me
                  </p>
                  <p></p>
                </div>
                <p className="py-9">
                  <span className="text-gray-500 text-sm mx-1">
                    Already have an account?
                  </span>
                  <Link to="/login">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
