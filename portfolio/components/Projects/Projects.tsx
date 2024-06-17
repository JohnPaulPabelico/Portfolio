import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Carousel from "../Carousel";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";
import { SlideReveal } from "../SlideReveal";

const project1slides = ["/projects/Project1/1.png", "/projects/Project1/2.png"];

const project2slides = [
  "/projects/Project2/1.png",
  "/projects/Project2/2.png",
  "/projects/Project2/3.png",
  "/projects/Project2/4.png",
];

const project3slides = [
  "/projects/Project3/1.png",
  "/projects/Project3/2.png",
  "/projects/Project3/3.png",
  "/projects/Project3/4.png",
  "/projects/Project3/5.png",
];

const project4slides = [
  "/projects/Project4/1.png",
  "/projects/Project4/2.png",
  "/projects/Project4/3.png",
  "/projects/Project4/4.png",
];

function Projects() {
  const { darkMode } = useContext(DarkModeContext)!;
  return (
    <div>
      <section
        id="projects"
        className={`min-h-dvh transition ${
          darkMode ? "bg-gray-700 text-white" : "bg-white"
        }`}
      >
        <div className="py-16"></div>
        <div className="text-6xl font-bold titillium flex justify-center">
          <Reveal>
            <span>PROJECTS</span>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <h2
              className={`text-lg tracking-widest font-bold titillium ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              HERE ARE SOME OF MY COOL PROJECTS
            </h2>
          </Reveal>
        </div>
        {/* ------------ FIRST ROW ------------ */}
        <div className="mt-10 py-10 grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center">
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:ml-10 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10 ">
                <Carousel autoSlide={false}>
                  {project1slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={600}
                    />
                  ))}
                </Carousel>
                <div className="mt-5 text-center text-3xl font-bold titillium">
                  NFT Fetcher
                </div>
                <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  NFT Explorer is an innovative web application tailored
                  specifically for the Arbitrum ecosystem. Designed to fetch and
                  showcase non-fungible tokens (NFTs) associated with a
                  designated wallet address across various blockchain networks,
                  it utilizes the Moralis API to seamlessly gather data.
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
          </SlideReveal>
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:mr-5 lg:ml-5 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10">
                <Carousel autoSlide={false}>
                  {project2slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={600}
                    />
                  ))}
                </Carousel>
                <div className="mt-5 text-center text-3xl font-bold titillium">
                  Ebak Coin Minting Site
                  {/* (
                  <span style={{ color: "red" }}>REMAKING</span>) */}
                </div>
                <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  The Ebak-Coin Minting Platform was developed as a project
                  requirement for the Arbitrm Developer's bootcamp
                  certification. It serves as a user-friendly solution for
                  minting and staking an ERC-20 token named Ebak-Coin, offering
                  participants an accessible pathway to cryptocurrency creation
                  and staking within the Arbitrum ecosystem.
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
          </SlideReveal>
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:mr-10 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 " : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10">
                <Carousel autoSlide={false}>
                  {project3slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={507}
                    />
                  ))}
                </Carousel>
                <div className="mt-5 text-center text-3xl font-bold titillium">
                  Spud Squad
                </div>
                <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  Introducing Spud Squads, a captivating NFT project on the
                  Solana network. With 999 limited-edition NFTs featuring
                  adorable potato characters, Spud Squad Adventures invites
                  users to join an exclusive community, unlocking unique perks
                  and exploring the boundless opportunities of Web3.
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
                  </ul>
                </span>
                <div className="flex justify-center">
                  {" "}
                  <div className="mt-10">
                    <Link
                      className="mr-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                      href="https://spudsquad.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      Demo
                    </Link>
                  </div>
                  <div className="mt-10">
                    <Link
                      className="ml-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                      href="https://github.com/JohnPaulPabelico/Spud-Squad-Dapp"
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SlideReveal>
        </div>
        {/* ------------ SECOND  ROW ------------ */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center">
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:ml-10 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10 ">
                <Carousel autoSlide={false}>
                  {project4slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={600}
                    />
                  ))}
                </Carousel>
                <div className="mt-5 text-center text-3xl font-bold titillium">
                  Astral Ember Guild Webpage
                </div>
                <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  Astral Ember Guild Webpage is a webpage created for a web3
                  gaming community. Serving as a central landing page, it offers
                  essential details about the guild, including contact
                  information, partnerships, and an insightful 'About Us'
                  section. The web page is built using Next.js and Tailwind CSS.
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
                        src="https://skillicons.dev/icons?i=daisyui"
                        alt="Tailwind Icon"
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
                      href="https://https://astralember.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      Demo
                    </Link>
                  </div>
                  <div className="mt-10">
                    <Link
                      className="ml-5 bg-blue-400 text-white titillium font-bold text-xl px-5 py-3 rounded-3xl hover:bg-blue-700 transition duration-200 ease-in-out"
                      href="https://github.com/JohnPaulPabelico/Astral-Ember-dapp"
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SlideReveal>
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:mr-5 lg:ml-5 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10">
                {/* <Carousel autoSlide={false}>
                  {project2slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={600}
                    />
                  ))}
                </Carousel> */}
                <Image
                  alt="slides"
                  src="/projects/comingsoon.jpg"
                  height={500}
                  width={600}
                />
                {/* <div className="mt-5 text-center text-3xl font-bold titillium">
                  MORE PROJECTS TO COME
                </div> */}
                <div className="mt-7 text-center text-3xl font-bold titillium flex justify-center">
                  MORE PROJECTS TO COME
                  {/* (
                  <span style={{ color: "red" }}>REMAKING</span>) */}
                </div>
                <div className="py-32"> </div>
                {/* <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  The Ebak-Coin Minting Platform was developed as a project
                  requirement for the Arbitrm Developer's bootcamp
                  certification. It serves as a user-friendly solution for
                  minting and staking an ERC-20 token named Ebak-Coin, offering
                  participants an accessible pathway to cryptocurrency creation
                  and staking within the Arbitrum ecosystem.
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
                </div> */}
              </div>
            </div>
          </SlideReveal>
          <SlideReveal>
            <div
              className={`hover:bg-gray-200 transition duration-300 ease-in-out mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 lg:mr-5 lg:ml-5 shadow rounded-3xl ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
              }`}
            >
              {" "}
              <div className="p-10">
                {/* <Carousel autoSlide={false}>
                  {project2slides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={500}
                      width={600}
                    />
                  ))}
                </Carousel> */}
                <Image
                  alt="slides"
                  src="/projects/comingsoon.jpg"
                  height={500}
                  width={600}
                />
                {/* <div className="mt-5 text-center text-3xl font-bold titillium">
                  MORE PROJECTS TO COME
                </div> */}
                <div className="mt-7 text-center text-3xl font-bold titillium flex justify-center">
                  MORE PROJECTS TO COME
                  {/* (
                  <span style={{ color: "red" }}>REMAKING</span>) */}
                </div>
                <div className="py-32"> </div>
                {/* <div
                  className="mb-5 mt-5 text-justify text-md roboto"
                  style={{ maxWidth: "500px" }}
                >
                  The Ebak-Coin Minting Platform was developed as a project
                  requirement for the Arbitrm Developer's bootcamp
                  certification. It serves as a user-friendly solution for
                  minting and staking an ERC-20 token named Ebak-Coin, offering
                  participants an accessible pathway to cryptocurrency creation
                  and staking within the Arbitrum ecosystem.
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
                </div> */}
              </div>
            </div>
          </SlideReveal>
        </div>
        <div className="py-16"></div>
      </section>
    </div>
  );
}

export default Projects;
