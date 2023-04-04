import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const collectData = async () => {
    let result = await fetch("http://localhost:7000/api/createuser", {
      method: "POST",
      body: JSON.stringify({ email: email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      localStorage.setItem("token", JSON.stringify(result));
      navigate("/");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  });

  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <h1 className="font-pop text-violet-500 font-bold text-2xl">
              CloudTask
            </h1>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sing Up in to your account
              </h3>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
            {/* //! Email Input  */}
            <div>
              <label className="font-medium">Email</label>
              <input
                value={email}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* //! password Input  */}
            <div>
              <label className="font-medium">Password</label>
              <input
                value={password}
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={collectData}
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Sign Up
            </button>
            <p className="justify-center flex">
              you have an account?{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login up
              </a>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Singup;
