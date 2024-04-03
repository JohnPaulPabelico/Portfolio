"use client";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { DarkModeProvider } from "../components/DarkModeContext";

export default function Home() {
  return (
    <DarkModeProvider>
      <main>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </DarkModeProvider>
  );
}
