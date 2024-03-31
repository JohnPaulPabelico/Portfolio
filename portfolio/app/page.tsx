"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { DarkModeProvider } from "../components/DarkModeContext";

export default function Home() {
  return (
    <DarkModeProvider>
      <main>
        {/*------------ CONTENT ------------ */}
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* ------------ CONTENT ------------ */}
        {/* ------------ FOOTER ------------ */}
        <section
          id="footer"
          className="min-h-32 bg-gray-900 flex justify-between items-center px-10"
        >
          <div className="text-2xl text-white font-bold titillium ">
            Copyright © 2024. All rights are reserved
          </div>
          <div className="flex justify-center lg:justify-start text-4xl text-white">
            <a
              href="https://github.com/JohnPaulPabelico"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <IoLogoGithub />
            </a>
            <a
              href="linkedin.com/in/jp-pabelico/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
        {/* ------------ FOOTER ------------ */}
      </main>
    </DarkModeProvider>
  );
}
