import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { DarkModeContext } from "../DarkModeContext";
import { FadeReveal } from "../FadeReveal";

const NavBar: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)!;
  const [barState, setBarState] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex items-center lg:fixed fixed top-0 w-full shadow px-5 min-h-30 justify-between z-10 transition ${
        darkMode ? "bg-gray-700 " : "bg-white"
      }`}
    >
      {" "}
      <FadeReveal>
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
      </FadeReveal>
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
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
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
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
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
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
                className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                  darkMode ? "text-white " : "text-black"
                }`}
                href="#experience"
                onClick={() => {
                  setBarState(false);
                  console.log(barState);
                }}
              >
                Experience
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
                className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                  darkMode ? "text-white " : "text-black"
                }`}
                href="#hackathons"
                onClick={() => {
                  setBarState(false);
                  console.log(barState);
                }}
              >
                Hackathons
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
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
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
                className={` lg:text-xl text-3xl  titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 ${
                  darkMode ? "text-white " : "text-black"
                }`}
                href="#engagements"
                onClick={() => {
                  setBarState(false);
                  console.log(barState);
                }}
              >
                Engagements
              </Link>
            </FadeReveal>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <FadeReveal>
              <Link
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
              </Link>
            </FadeReveal>
          </li>
        </ul>
      </div>
      <div className="">
        <FadeReveal>
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
        </FadeReveal>
      </div>
    </div>
  );
};

export default NavBar;
