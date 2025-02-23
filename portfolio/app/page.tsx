"use client";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Experience from "../components/Experience/Experience";
import { DarkModeProvider } from "../components/DarkModeContext";
import Hackathons from "@/components/Hackathons/Hackathons";
import Engagements from "@/components/Engagements/Engagements";

export default function Home() {
  return (
    <DarkModeProvider>
      <main>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Hackathons />
        <Projects />
        <Engagements />
        <Contact />
        <Footer />
      </main>
    </DarkModeProvider>
  );
}
