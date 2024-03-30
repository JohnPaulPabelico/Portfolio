"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section id="home" className="bg-gray-100 min-h-screen">
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
            {/* <li className="text-xl cursor-pointer">
              <BsFillMoonStarsFill />
            </li> */}
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

        <div className="lg:flex items-center justify-center lg:justify-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-20 py-5">
          <div className="mr-8">
            <Image
              src="/Jp.jpg"
              alt="Profile Pic"
              width={500}
              height={500}
              className="rounded-full ml-3 mb-5 lg:mb-0 lg:mt-3 lg:ml-0"
            />
          </div>

          <div>
            <div className="text-center lg:text-start text-4xl font-bold roboto lg:flex">
              JP Pabelico{" "}
              <Image
                src="/waving.png"
                alt="waving_hand"
                width={50}
                height={50}
                className="ml-3 hidden lg:block"
              />
            </div>
            <h2 className="lg:text-start text-center mt-1 text-2xl font-medium roboto text-gray-700">
              Web Developer
            </h2>
            <h1 className="lg:text-start text-center mt-3 text-light roboto text-gray-700">
              Hi, I&apos;m John Paul Pabelico. A passionate Front-end React
              Developer based in the Philippines.
            </h1>
            <span className="flex justify-center lg:justify-start text-4xl mt-8">
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
                className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen bg-white">
        <div className="py-20"></div>
        <div className="text-4xl font-bold roboto flex justify-center">
          ABOUT ME
        </div>
        <div className="mt-10 flex justify-center">
          <h1 className="text-justify lg:px-40 px-10 text-light roboto font-bold text-gray-700 lg:w-1/2 ">
            Hey there, I&apos;m John Paul B. Pabelico, your next web sensation!
            From the vibrant streets of Parañaque City, Philippines, I bring a
            burst of creativity and expertise to the digital realm. With a
            Bachelor of Science degree in Computer Engineering under my belt,
            I&apos;m not just another coder – I&apos;m your partner in
            transforming visions into captivating online experiences.
            <br></br>
            <br></br>
            My journey in the tech world has been nothing short of exhilarating.
            From mastering the art of coding to honing my skills in web
            development, I&apos;ve dedicated myself to staying ahead of the
            curve. Armed with a diverse toolkit that includes languages like
            Python, JavaScript, and Java, as well as frameworks like NextJS and
            ExpressJS, I&apos;m equipped to tackle any challenge that comes my
            way.
            <br></br>
            <br></br>
            But it&apos;s not just about the code – it&apos;s about the magic
            that happens when creativity meets technology. Whether it&apos;s
            designing sleek interfaces that captivate audiences or crafting
            seamless user experiences that keep them coming back for more, I
            thrive on pushing the boundaries of what&apos;s possible in the
            digital world.
            <br></br>
            <br></br>
            So, if you&apos;re ready to take your online presence to the next
            level, I&apos;m here to make it happen. Let&apos;s team up and bring
            your wildest web dreams to life!
          </h1>
        </div>
        <div className="py-20 lg:py-20 px-10 justify-center flex">
          <span className="text-center lg:text-start lg:flex items-center text-xl roboto font-bold text-gray-500">
            Tech Stack: &nbsp;{" "}
            <ul className="lg:flex lg:items-center lg:mt-0 mt-5 grid grid-cols-4 gap-4">
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
                <img src="https://skillicons.dev/icons?i=npm" />
              </li>
              <li className="m-2 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <img src="https://skillicons.dev/icons?i=docker" />
              </li>
            </ul>
          </span>
        </div>
      </section>
      <section id="projects" className="min-h-screen bg-gray-100">
        Projects
      </section>
      <section id="contact" className="min-h-screen bg-white">
        Contact
      </section>
    </main>
  );
}
