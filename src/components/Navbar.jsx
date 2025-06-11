import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white shadow-md px-8 py-4 flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div>
          <h1
            className="font-bold text-xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            LOGO
          </h1>
        </div>

        <div>
          <ul className="flex items-center space-x-4 font-bold">
            <li className="cursor-pointer" onClick={() => navigate("/posts")}>
              Posts
            </li>
            <li>Plugins</li>
            <li>Blog</li>
            <li>
              <button
                onClick={() => navigate("/login")}
                className="bg-purple-500 px-5 py-2 text-white flex justify-center items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Login
                <BsArrowUpRightCircle />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
