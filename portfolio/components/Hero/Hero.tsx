import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import "./Hero.css";
import { Reveal } from "../Reveal";

function Hero() {
  const { darkMode } = useContext(DarkModeContext)!;

  return (
    <div className="">
      {" "}
      <section
        id="home"
        className={`min-h-dvh transition ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        }`}
      >
        <div className="mt-8 lg:mt-0 lg:flex items-center justify-center lg:justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-10 py-5 w-3/4">
          <div className="relative mr-8 flex justify-center">
            {/* ---------- IMAGE ---------- */}
            <Reveal>
              <div className="heroblob"></div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="text-center lg:text-start lg:text-7xl text-5xl font-bold titillium flex lg:justify-start justify-center tracking-widest items-center">
                JP PABELICO{" "}
              </div>
            </Reveal>
            <Reveal>
              <h2
                className={`lg:text-start text-center mt-1 tracking-widest text-2xl font-bold titillium ${
                  darkMode ? " text-gray-300" : " text-gray-700"
                }`}
              >
                Web Developer
              </h2>
            </Reveal>

            <div className="lg:max-w-lg ">
              <Reveal>
                <h1
                  className={`lg:text-start text-center mt-3 text-light roboto ${
                    darkMode ? " text-gray-300" : " text-gray-700"
                  }`}
                >
                  Hey there, I&apos;m John Paul Pabelico, your go-to guru for
                  all things Front-end and React! Hailing from the lively
                  streets of the Philippines, I bring not just expertise, but a
                  genuine passion for crafting captivating digital experiences.
                </h1>
              </Reveal>
            </div>
            <span className="flex justify-center lg:justify-start text-4xl mt-8">
              <Link
                href="https://github.com/JohnPaulPabelico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <Reveal>
                  <IoLogoGithub />
                </Reveal>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jp-pabelico/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
              >
                <Reveal>
                  <FaLinkedin />
                </Reveal>
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
              >
                <Reveal>
                  <IoIosContact />
                </Reveal>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
