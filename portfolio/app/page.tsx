"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section id="home" className="bg-white min-h-screen">
        <nav className="fixed w-full shadow px-3 py-2 flex justify-between bg-white z-10">
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
            <li className="text-xl cursor-pointer">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                className="ml-8 text-xl text-black roboto font-medium rounded-full m-2 hover:text-blue-500 transition duration-200"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-xl text-black roboto font-medium rounded-full m-2 hover:text-blue-500 transition duration-200"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-xl text-black roboto font-medium rounded-full m-2 hover:text-blue-500 transition duration-200"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-xl text-black roboto font-medium rounded-full m-2 hover:text-blue-500 transition duration-200"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-20 py-5 ">
          <div className=" mr-5">
            <h1 className="flex items-center text-5xl font-bold roboto">
              JP Pabelico{" "}
              <Image
                src="/waving.png"
                alt="waving_hand"
                width={50}
                height={50}
                className="ml-3"
              />
            </h1>
            <h2 className="mt-1 text-2xl font-medium roboto text-gray-700">
              Web Developer
            </h2>
            <h1 className="mt-3 text-light roboto  text-gray-700">
              Hi, I'm John Paul Pabelico. A passionate Front-end React Developer
              based in the Philippines. 📍
            </h1>
            <span className="flex text-4xl mt-8">
              <a
                href="https://github.com/JohnPaulPabelico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/john-paul-p-4640a6125/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300 ml-3"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>

          <div>
            <Image
              src="/Jp.jpg"
              alt="Profile Pic"
              width={500}
              height={500}
              className="rounded-full ml-3"
            />
          </div>
        </div>
        <div className="flex items-center absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 px-20 py-5 ">
          <span className="flex items-center text-xl roboto font-bold text-gray-500">
            Skills: &nbsp;{" "}
            <ul className="flex items-center">
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src="https://skillicons.dev/icons?i=html" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src="https://skillicons.dev/icons?i=css" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=js" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=ts" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=react" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src="https://skillicons.dev/icons?i=next" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src="https://skillicons.dev/icons?i=expressjs" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                <img src="https://skillicons.dev/icons?i=nodejs" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=tailwind" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=github" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=git" />
              </li>
            </ul>
          </span>
        </div>
      </section>
      <section id="about" className="min-h-screen bg-gray-200">
        About
      </section>
      <section id="projects" className="min-h-screen bg-white">
        Projects
      </section>
      <section id="contact" className="min-h-screen bg-gray-200">
        Contact
      </section>
    </main>
  );
}
