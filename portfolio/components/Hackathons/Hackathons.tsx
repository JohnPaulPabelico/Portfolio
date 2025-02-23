"use client";

import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";
import Image from "next/image";
// import { Trophy } from "lucide-react";

function Hackathons() {
  const { darkMode } = useContext(DarkModeContext)!;

  const hackathons = [
    {
      name: "Solana Radar Hackathon - Local Track",
      project: "Selyo",
      position: "1st Place",
      date: "October 2023",
      description:
        "Developed a Platform for tokenizing social interaction bringing next-gen experience to your events and organizations powered by Web3 and IoT",
      image: "/hackathons/hack1.jpg",
    },
    {
      name: "Solana Radar Hackathon - Local Track",
      project: "CandyBlinks",
      position: "3rd Place",
      date: "October 2023",
      description:
        "Developed a no-code platform that revolutionizes NFT distribution by integrating Metaplex’s Candy Machine with Solana’s Blinks.",
      image: "/hackathons/hack2.jpg",
    },
    {
      name: "Global PYUSD Portal Hackathon",
      project: "CandyBlinks",
      position: "Popular Choice Awardee",
      date: "October 2023",
      description:
        "Developed a no-code platform that revolutionizes NFT distribution by integrating Metaplex’s Candy Machine with Solana’s Blinks.",
      image: "/hackathons/hack3.jpeg",
    },
  ];

  return (
    <section
      id="hackathons"
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
            HACKATHONS
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
            WINNING PROJECTS
          </h2>
        </Reveal>
      </div>

      <div className="container mx-auto px-4">
        {hackathons.map((hackathon, index) => (
          <div
            className={`mb-12 p-6 rounded-xl w-full ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
            key={index}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Image
                  src={hackathon.image || "/placeholder.svg"}
                  alt={hackathon.name}
                  width={300}
                  height={200}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-3xl font-bold mb-2">{hackathon.name}</h3>
                <div className="flex items-center mb-2">
                  {/* <Trophy className="w-5 h-5 mr-2 text-yellow-500" /> */}
                  <span className="text-xl font-semibold">
                    {hackathon.position}
                  </span>
                </div>
                <p className="text-lg mb-2">
                  <strong>Project:</strong> {hackathon.project}
                </p>
                <p className="text-gray-500 dark:text-gray-500 mb-4">
                  {hackathon.date}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {hackathon.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-16"></div>
    </section>
  );
}

export default Hackathons;
