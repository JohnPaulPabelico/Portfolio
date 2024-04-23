import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import "./Hero.css";

function Hero() {
  const { darkMode } = useContext(DarkModeContext)!;

  return (
    <div className="">
      <section
        id="home"
        className={`min-h-dvh ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        }`}
      >
        <div className="mt-8 lg:mt-0 lg:flex items-center justify-center lg:justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-10 py-5 w-3/4">
          <div className="relative mr-8 flex justify-center">
            {/* ---------- IMAGE ---------- */}
            <div className="heroblob"></div>
            {/* <Image
              src="/Jp.jpg"
              alt="Profile Pic"
              width={400}
              height={400}
              className="rounded-full ml-3 mb-5 lg:mb-0 lg:mt-3 lg:ml-0"
            /> */}
          </div>

          <div>
            <div className="text-center lg:text-start lg:text-7xl text-5xl font-bold titillium flex lg:justify-start justify-center tracking-widest items-center">
              JP PABELICO{" "}
              <Image
                src="/waving.png"
                alt="waving_hand"
                width={60}
                height={60}
                className="ml-3 hidden lg:block "
              />
            </div>
            <h2
              className={`lg:text-start text-center mt-1 tracking-widest text-2xl font-bold titillium ${
                darkMode ? " text-gray-300" : " text-gray-700"
              }`}
            >
              Web Developer
            </h2>
            <div className="lg:max-w-lg ">
              <h1
                className={`lg:text-start text-center mt-3 text-light roboto ${
                  darkMode ? " text-gray-300" : " text-gray-700"
                }`}
              >
                Hey there, I&apos;m John Paul Pabelico, your go-to guru for all
                things Front-end and React! Hailing from the lively streets of
                the Philippines, I bring not just expertise, but a genuine
                passion for crafting captivating digital experiences.
              </h1>
            </div>
            <span className="flex justify-center lg:justify-start text-4xl mt-8">
              <Link
                href="https://github.com/JohnPaulPabelico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <IoLogoGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jp-pabelico/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
              >
                <IoIosContact />
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
