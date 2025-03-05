import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";
import { SlideReveal } from "../SlideReveal";
import Carousel from "../Carousel";
import { PROJECTS, ProjectData } from "./project-data";

// Reusable component for tech stack icons
const TechStackIcons: React.FC<{ icons: string[] }> = ({ icons }) => (
  <ul className="flex lg:items-center lg:mt-0 mt-2 gap-4">
    {icons.map((icon, index) => (
      <li
        key={index}
        className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out"
      >
        <Image
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={`${icon} Icon`}
          width={30}
          height={30}
        />
      </li>
    ))}
  </ul>
);

// Reusable component for project card
const ProjectCard: React.FC<{ project: ProjectData; darkMode: boolean }> = ({
  project,
  darkMode,
}) => {
  const cardClassName = `hover:bg-gray-200 transition duration-300 ease-in-out 
    mx-10 mt-5 mb-10 lg:my-0 lg:mx-0 shadow rounded-3xl 
    ${
      darkMode
        ? "bg-gray-700 text-white hover:bg-gray-950"
        : "bg-white hover:bg-gray-200"
    }`;

  return (
    <SlideReveal>
      <div className={cardClassName}>
        <div className="p-10">
          <Carousel autoSlide={false}>
            {project.slides.map((slide, index) => (
              <Image
                key={index}
                alt="Project slide"
                src={slide}
                height={500}
                width={600}
              />
            ))}
          </Carousel>

          <div className="mt-5 text-center text-3xl font-bold titillium">
            {project.title}
          </div>

          <div
            className="mb-5 mt-5 text-justify text-md roboto"
            style={{ maxWidth: "500px" }}
          >
            {project.description}
          </div>

          <span
            className={`mt-5 text-center lg:text-start lg:flex items-center text-l 
              titillium font-bold ${darkMode ? "text-white" : "text-black"}`}
          >
            Tech Stack: &nbsp;
            <TechStackIcons icons={project.techStack} />
          </span>

          <div className="flex justify-center">
            <div className="mt-10 mr-5">
              <Link
                className="bg-blue-400 text-white titillium font-bold text-xl 
                  px-5 py-3 rounded-3xl hover:bg-blue-700 
                  transition duration-200 ease-in-out"
                href={project.demoLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                Demo
              </Link>
            </div>

            <div className="mt-10">
              <Link
                className="bg-blue-400 text-white titillium font-bold text-xl 
                  px-5 py-3 rounded-3xl hover:bg-blue-700 
                  transition duration-200 ease-in-out"
                href={project.sourceLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SlideReveal>
  );
};

export default function Projects() {
  const { darkMode } = useContext(DarkModeContext)!;

  return (
    <div>
      <section
        id="projects"
        className={`min-h-dvh transition ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
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
                darkMode ? "text-white" : "text-black"
              }`}
            >
              HERE ARE SOME OF MY COOL PROJECTS
            </h2>
          </Reveal>
        </div>

        {/* First Row */}
        <div className="mt-10 py-10 grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center lg:px-10">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 justify-items-center lg:px-10">
          {PROJECTS.slice(3).map((project, index) => (
            <ProjectCard
              key={index + 3}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className="py-16"></div>
      </section>
    </div>
  );
}
