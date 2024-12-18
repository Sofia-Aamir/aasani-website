import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "sofia@gmail.com" && password === "123") {
      // Redirect to Admin Dashboard
      navigate("/admin-dashboard");
    } else {
      // Set error message
      setError("Your credentials are wrong");
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#0AD1C8] to-[#073235] min-h-screen flex box-border justify-center items-center">
      <div className="bg-[#80ED99] rounded-2xl flex max-w-3xl p-5 items-center">
        {/* Left Section */}
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            If you are already a member, easily log in now.
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          {/* Separator */}
          <div className="mt-6 items-center text-gray-100">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          {/* Forgot Password */}
          <div className="mt-10 text-sm border-b border-gray-500 py-5">
            Forget password?
          </div>

          {/* Register */}
          <div className="mt-4 text-sm flex justify-between items-center">
            <p className="mr-3 md:mr-0">
              If you don't have an account..
            </p>
            <button className="hover:border text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
              Register
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[3000px]"
            src="https://cdn.pixabay.com/photo/2024/04/01/14/43/ai-generated-8669101_640.png"
            alt="login form visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
