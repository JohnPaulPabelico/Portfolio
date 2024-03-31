import { useEffect, useState } from "react";
import Image from "next/image";

function NavBar() {
  return (
    <div>
      {/* ------- NAVIGATON BAR ------- */}
      <nav className="lg:fixed absolute w-full shadow px-5 flex justify-between bg-white z-10">
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

        <ul className="flex items-center">
          {/* <li className="text-xl cursor-pointer">
              <BsFillMoonStarsFill />
            </li> */}
          <li>
            <a
              className="ml-8 text-xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-xl text-black titillium font-bold rounded-full m-2 hover:text-blue-500 transition duration-200"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
