import Image from "next/image";
import { DarkModeContext } from "../DarkModeContext";
import React, { useContext } from "react";
import { Reveal } from "../Reveal";

function About() {
  const { darkMode } = useContext(DarkModeContext)!;

  return (
    <div>
      {" "}
      <section
        id="about"
        className={`transition min-h-dvh ${
          darkMode ? "bg-gray-700 " : "bg-white"
        }`}
      >
        <div className="py-20"></div>
        <div
          className={`text-6xl font-bold titillium flex justify-center ${
            darkMode ? "text-white " : "text-black"
          }`}
        >
          <Reveal>
            <span>ABOUT ME</span>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <h2
              className={`text-lg tracking-widest font-bold titillium ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              LEARN MORE ABOUT ME
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <h1
            className={`text-justify lg:px-40 px-10 text-light roboto font-bold  lg:w-3/5 ${
              darkMode ? "text-gray-200 " : "text-gray-700"
            }`}
          >
            <Reveal>
              <span>
                Hey there! My name is John Paul Pabelico, an aspiring Full-Stack
                Developer. I&apos;m currently residing in the vibrant streets of
                Paranaque City, Philippines. I&apos;m also a Bachelor of Science
                in Computer Engineering graduate from Adamson University.
                <br></br>
                <br></br>
                My journey in web development began when I was introduced to
                blockchain development by The BLOKC, where they conducted a
                bootcamp where they taught us how to deploy our own smart
                contracts in the Arbitrum Network. However, prior to that, I
                hated web development. My first plan was to get into game and
                application development. But I never thought that I would be
                here now, falling in love with web development and web design.
                <br></br>
                <br></br>
                The knowledge that I learned during the bootcamp helped me see a
                new light in web development and I thought to myself that this
                might be my calling. Now here I am! I am an aspiring Full-Stack
                Developer, that loves to build things and make ideas turn into
                the real deal. I learned a new passion and am excited to see
                where it takes me.
                <br></br>
                <br></br>
                So, if you&apos;re ready to take your online presence to the
                next level, I&apos;m here to make it happen. Let&apos;s team up
                and bring your wildest web dreams to life!
              </span>
            </Reveal>
          </h1>
        </div>
        <div className="py-20 lg:py-20 px-10 justify-center flex">
          <span
            className={`text-center lg:text-start lg:flex items-center text-2xl titillium font-bold ${
              darkMode ? "text-gray-200 " : "text-gray-500"
            }`}
          >
            <Reveal>
              <span>Tech Stack: &nbsp; </span>
            </Reveal>

            <ul className="lg:flex lg:items-center lg:mt-0 mt-5 grid grid-cols-4 gap-4">
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=html"
                    alt="HTML"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=css"
                    alt="CSS"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=ts"
                    alt="TypeScript"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=react"
                    alt="React"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=next"
                    alt="Next"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="NodeJS"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="Tailwind"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=github"
                    alt="Github Icon"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=npm"
                    alt="NPM Icon"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Reveal>
                  <Image
                    src="https://skillicons.dev/icons?i=docker"
                    alt="Docker Icon"
                    width={50}
                    height={50}
                  />
                </Reveal>
              </li>
            </ul>
          </span>
        </div>
      </section>
    </div>
  );
}

export default About;
