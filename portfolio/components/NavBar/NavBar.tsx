import { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function NavBar() {
  const [barState, setBarState] = useState(false);

  return (
    <div className="flex items-center lg:fixed fixed top-0 w-full shadow px-5 min-h-30 justify-between bg-white z-10">
      <div>
        {" "}
        <Image
          src="/Jp Black.png"
          alt="Icon"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div
        className={`transition ease-in lg:ml-auto lg:static absolute  lg:min-h-fit min-h-screen lg:w-auto w-full top-[100%] left-0 py-10 lg:py-0 ${
          barState ? "bg-white" : "bg-transparent"
        }`}
      >
        <ul
          className={`flex-col lg:flex-row flex items-center gap-16 lg:gap-0 `}
        >
          <li className={`${barState ? "block" : "hidden lg:block"}`}>
            <a
              className="lg:ml-8 lg:text-xl text-3xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 "
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
              className="lg:text-xl text-3xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200 "
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
              className="lg:text-xl text-3xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200  "
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
              className="lg:text-xl text-3xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200  "
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
          <li className="m-3 text-2xl cursor-pointer hover:text-blue-500 transition duration-200">
            <BsMoonStars />
          </li>
          <li className="m-3 text-2xl cursor-pointer hover:text-blue-500 transition duration-200 lg:hidden">
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
}

export default NavBar;
