import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
function Projects() {
  const { darkMode } = useContext(DarkModeContext)!;
  return (
    <div>
      <section
        id="projects"
        className={`min-h-dvh ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        }`}
      >
        <div className="py-16"></div>
        <div className="text-6xl font-bold titillium flex justify-center">
          PROJECTS
        </div>

        <div className="mt-10 py-10 grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center">
          <div
            className={`hover:-translate-y-5 transition duration-300 ease-in-out lg:ml-10 mx-10 my-5 lg:my-0 lg:mx-0 shadow-lg rounded-3xl ${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
          >
            {" "}
            <div className="p-10 ">
              <Image
                src="/projects/project1.png"
                alt="Icon"
                width={500}
                height={500}
                className="rounded-2xl shadow-sm"
              />
              <div className="mt-5 text-center text-3xl font-bold titillium">
                NFT Fetcher
              </div>
              <div
                className="mb-5 mt-5 text-justify text-md roboto"
                style={{ maxWidth: "500px" }}
              >
                NFT Explorer is a web application designed to fetch and display
                non-fungible tokens (NFTs) associated with a specified wallet
                address on various blockchain networks. Whether you&apos;re an
                investor, collector, or simply curious about NFT ownership, this
                tool provides an easy way to explore and track NFT holdings.
              </div>
              <span
                className={`mt-5 text-center lg:text-start lg:flex items-center text-l titillium font-bold ${
                  darkMode ? " text-white" : "text-black"
                }`}
              >
                Tech Stack: &nbsp;{" "}
                <ul className="flex lg:items-center lg:mt-0 mt-2 gap-4">
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=html"
                      alt="HTML Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=css"
                      alt="CSS Icon"
                      width={30}
                      height={30}
                    />
                  </li>{" "}
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=ts"
                      alt="TypeScript Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=next"
                      alt="Next.js Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=expressjs"
                      alt="Express.js Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=tailwind"
                      alt="Tailwind Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=solidity"
                      alt="Solidity Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </span>
              <div className="flex justify-center">
                {" "}
                <div className="mt-10">
                  <Link
                    className="mr-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                    href="https://blokc-frontend-challenge-navy.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    Demo
                  </Link>
                </div>
                <div className="mt-10">
                  <Link
                    className="ml-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                    href="https://github.com/JohnPaulPabelico/BLOKC-Frontend-Challenge"
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    Source
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`hover:-translate-y-5 transition duration-300 ease-in-out mx-10 my-5 lg:my-0 lg:mx-0 shadow-lg rounded-3xl ${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
          >
            {" "}
            <div className="p-10">
              <Image
                src="/projects/project2.png"
                alt="Icon"
                width={500}
                height={500}
                className="rounded-2xl shadow-sm"
              />
              <div className="mt-5 text-center text-3xl font-bold titillium">
                Ebak Coin Minting Site (
                <span style={{ color: "red" }}>REMAKING</span>)
              </div>

              <div
                className="mb-5 mt-5 text-justify text-md roboto"
                style={{ maxWidth: "500px" }}
              >
                The Ebak-Coin Minting Platform offers a user-friendly solution
                for creating and managing ERC-20 meme tokens. Whether
                you&apos;re passionate about memes, looking for a creative
                outlet in the digital space, our platform empowers you to mint
                and distribute your unique Ebak-Coin tokens effortlessly.
              </div>
              <span
                className={`mt-5 text-center lg:text-start lg:flex items-center text-l titillium font-bold ${
                  darkMode ? " text-white" : "text-black"
                }`}
              >
                Tech Stack: &nbsp;{" "}
                <ul className="flex lg:items-center lg:mt-0 mt-2 gap-4">
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=html"
                      alt="HTML Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=css"
                      alt="CSS Icon"
                      width={30}
                      height={30}
                    />
                  </li>{" "}
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=ts"
                      alt="TypeScript Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    <Image
                      src="https://skillicons.dev/icons?i=next"
                      alt="Next.js Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=tailwind"
                      alt="Tailwind Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                    {" "}
                    <Image
                      src="https://skillicons.dev/icons?i=solidity"
                      alt="Solidity Icon"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </span>
              <div className="flex justify-center">
                {" "}
                <div className="mt-10">
                  <Link
                    className="mr-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                    href="https://ebak-coin.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    Demo
                  </Link>
                </div>
                <div className="mt-10">
                  <Link
                    className="ml-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                    href="https://github.com/JohnPaulPabelico/Ebak-Coin"
                    target="_blank"
                    rel="noreferrer noopenner"
                  >
                    Source
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`hover:-translate-y-5 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:mr-10 shadow-lg rounded-3xl ${
              darkMode ? "bg-gray-700 " : "bg-white"
            }`}
          >
            {" "}
            <div className="p-10">
              <Image
                src="/projects/comingsoon.jpg"
                alt="Icon"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <div className="mt-5 text-center text-3xl font-bold titillium">
                More projects soon!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
