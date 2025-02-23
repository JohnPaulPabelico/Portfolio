"use client";

import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";
import Image from "next/image";

function Engagements() {
  const { darkMode } = useContext(DarkModeContext)!;

  const engagements = [
    {
      type: "Workshop",
      title: "Tech Mentor",
      organization: "University of The Philippines - Diliman",
      duration: "September 2024",
      description:
        "Mentored students in Catapult Philippines' Web3 elective at UP Diliman, providing hands-on support and knowledge-sharing to foster innovation and technical growth.",
      image: "/engagements/mentor1.png",
    },
    {
      type: "Workshop",
      title: "Tech Mentor",
      organization: "Core Connect - Bootcamp",
      duration: "February 2025",
      description:
        " Guided developers as a mentor, teaching the basics of EVM development and Solidity using Core, providing hands-on support, and fostering technical growth among participants.",
      image: "/engagements/mentor2.jpeg",
    },
    {
      type: "Workshop",
      title: "Tech Mentor",
      organization: "Train The Trainers - University of Cabuyao",
      duration: "December 2024",
      description:
        "Trained academic professors in Blockchain 101 and web development fundamentals, providing hands-on guidance, and equipping them with the knowledge to educate others.",
      image: "/engagements/mentor3.png",
    },
    {
      type: "Speaker",
      title: "Seminar",
      organization: "Adamson Computer Engineering Society – Hello, World",
      duration: "September 2024",
      description:
        "Delivered a talk on the evolving tech landscape, software development careers, and Web3 opportunities.",
      image: "/engagements/speaker1.jpg",
    },
    {
      type: "Speaker",
      title: "Seminar",
      organization: "JBECP NU Manila - Chain Connect",
      duration: "February 2025",
      description:
        "Conducted a session on Move 101 and a short tutorial on creating NFTs using Move, guiding participants through the fundamentals and practical implementation.",
      image: "/engagements/speaker2.png",
    },
    {
      type: "Speaker",
      title: "Seminar",
      organization: "PSITE-DFCAM - Intro to Blockchain Technology",
      duration: "February 2025",
      description:
        "Led a run-through session on Aptos 101, introducing participants to the fundamentals of the Aptos. Walked them through the process of creating NFTs on Aptos.",
      image: "/engagements/speaker3.jpg",
    },
  ];

  return (
    <section
      id="engagements"
      className={`min-h-dvh transition ${
        darkMode ? "bg-gray-700 text-white" : "bg-white"
      }`}
    >
      <div className="py-20"></div>
      <div className="flex justify-center">
        <Reveal>
          <h1
            className={`text-6xl font-bold titillium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            ENGAGEMENTS
          </h1>
        </Reveal>
      </div>
      <div className="flex justify-center mb-10">
        <Reveal>
          <h2
            className={`text-lg tracking-widest font-bold titillium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            MENTORING & SPEAKING
          </h2>
        </Reveal>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <Reveal key={index}>
              <div
                className={`rounded-lg overflow-hidden ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={engagement.image || "/placeholder.svg"}
                    alt={engagement.organization}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mb-2">
                    {engagement.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">
                    {engagement.title}
                  </h3>
                  <h4 className="text-xl mb-2">{engagement.organization}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    {engagement.duration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    {engagement.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="py-16"></div>
    </section>
  );
}

export default Engagements;
