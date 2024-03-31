import { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

const NavBar: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)!;
  const [barState, setBarState] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex items-center lg:fixed fixed top-0 w-full shadow px-5 min-h-30 justify-between z-10 ${
        darkMode ? "bg-gray-700 " : "bg-white"
      }`}
    >
      {" "}
      <div>
        {darkMode && (
          <Image
            src="/Jp White.png"
            alt="Light Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        {!darkMode && (
          <Image
            src="/Jp Black.png"
            alt="Dark Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
      </div>
      <div
        className={`transition ease-out lg:ml-auto lg:static absolute  lg:min-h-fit min-h-screen lg:w-auto w-full top-[100%] left-0 py-10 lg:py-0 ${
          barState
            ? darkMode
              ? "bg-gray-800"
              : "bg-gray-100"
            : "bg-transparent"
        }`}
      >
        <ul
          className={`flex-col lg:flex-row flex items-center gap-16 lg:gap-0 `}
        >
          <li className={`${barState ? "block" : "hidden lg:block"}`}>
            <a
              className={`lg:ml-8 lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                darkMode ? "text-white " : "text-black"
              }`}
              href="#home"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Home
            </a>
          </li>
          <li className={`${barState ? "block" : "hidden lg:block"}`}>
            <a
              className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                darkMode ? "text-white " : "text-black"
              }`}
              href="#about"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              About
            </a>
          </li>
          <li className={`${barState ? "block" : "hidden lg:block"}`}>
            <a
              className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                darkMode ? "text-white " : "text-black"
              }`}
              href="#projects"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Projects
            </a>
          </li>
          <li className={`${barState ? "block" : "hidden lg:block"}`}>
            <a
              className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                darkMode ? "text-white " : "text-black"
              }`}
              href="#contact"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex items-center">
          {" "}
          <li
            className={`m-3 text-2xl cursor-pointer hover:text-blue-500 transition duration-200 ${
              darkMode ? "text-white " : "text-black"
            }`}
          >
            {!darkMode && (
              <BsFillMoonStarsFill
                onClick={() => {
                  toggleDarkMode();
                  console.log(darkMode);
                }}
              />
            )}
            {darkMode && (
              <BsFillSunFill
                onClick={() => {
                  toggleDarkMode();
                  console.log(darkMode);
                }}
              />
            )}
          </li>
          <li
            className={`m-3 text-2xl cursor-pointer hover:text-blue-500 transition duration-200 lg:hidden ${
              darkMode ? " text-white" : " text-black"
            }`}
          >
            {barState ? (
              <GrClose
                onClick={() => {
                  setBarState(!barState);
                  console.log(barState);
                }}
              />
            ) : (
              <FaBars
                onClick={() => {
                  setBarState(!barState);
                  console.log(barState);
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
