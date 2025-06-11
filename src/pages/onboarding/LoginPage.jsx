import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      username: userName,
      password: password,
    };

    try {
      const res = await axios.post("https://dummyjson.com/auth/login", reqBody);
      console.log(res.data);

      if (res.status === 200) {
        alert("Login successful");
        navigate("/");
      } else {
        setPassword("");
        setuserName("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div>
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 bg-cyan-100 p-10 rounded-xl"
          >
            <div>
              <h1 className="text-2xl font-bold">Login</h1>
            </div>
            <div>
              <input
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Email"
                required
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>
            <input
              type="text"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="******"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
