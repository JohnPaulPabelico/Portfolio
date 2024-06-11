import React, { useContext, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";
import Image from "next/image";

function Experience() {
  const { darkMode } = useContext(DarkModeContext)!;
  const [chosenButton, setChosenButton] = useState<number>();

  const showCard = () => {
    switch (chosenButton) {
      // case 0:
      //   return (
      //     <div className="">
      //       <div className="flex items-center">
      //         <div className="flex-grow">
      //           <h1 className="text-4xl font-bold titillium mt-5">
      //             Junior Software Engineer
      //           </h1>
      //           <h1 className="text-2xl font-bold titillium">
      //             Pulsare Software Development
      //           </h1>
      //           <h1 className="text-lg titillium">June 2024 - Present</h1>
      //         </div>
      //         <div className="flex-shrink-0 ml-4">
      //           <Image
      //             className=""
      //             src="/pulsar.webp"
      //             alt="pulsar"
      //             width={100}
      //             height={100}
      //           />
      //         </div>
      //       </div>

      //       <h1 className="text-xl font-bold titillium mt-10">
      //         Responsibilities and Duties:
      //       </h1>
      //       <div className="mt-2">
      //         <div className="flex ">
      //           <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
      //           <h1 className="text-lg titillium ">
      //             Analyze and understand the customers’ requirements by
      //             gathering and documenting client needs for the development
      //             team.
      //           </h1>
      //         </div>
      //         <div className="flex ">
      //           <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
      //           <h1 className="text-lg titillium ">
      //             Learn the tech stack and the complex system designs of
      //             existing applications to acquaint yourself with current
      //             technologies and system designs.
      //           </h1>
      //         </div>
      //         <div className="flex ">
      //           <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
      //           <h1 className="text-lg titillium ">
      //             Coding and testing of new functions and application
      //             enhancements to develop and test new features based on client
      //             requirements.
      //           </h1>
      //         </div>
      //         <div className="flex ">
      //           <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
      //           <h1 className="text-lg titillium ">
      //             Collaborate with our team of developers, designers, and
      //             testers to work closely with cross-functional teams to ensure
      //             high-quality output.
      //           </h1>
      //         </div>
      //       </div>
      //     </div>
      //   );
      case 1:
        return (
          <div className="">
            <div className="flex items-center">
              <div className="flex-grow">
                <h1 className="text-4xl font-bold titillium mt-5">
                  IT Support Intern
                </h1>
                <h1 className="text-xl font-bold titillium">
                  Cable Box Office Shows and Systems Corporation
                </h1>
                <h1 className="text-lg titillium">July 2023 - August 2023</h1>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Image
                  className=""
                  src="/cboss.webp"
                  alt="cableboss"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <h1 className="text-xl font-bold titillium mt-10">
              Responsibilities and Duties:
            </h1>
            <div className="mt-2">
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Provided essential IT support to employees, troubleshooting
                  various hardware and software issues promptly
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Modified an open-source helpdesk support program with the
                  company’s preference.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Documented support activities and solutions in knowledge base
                  articles, enabling efficient problem-solving and knowledge
                  sharing among team members.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Assisted in the installation, configuration, and maintenance
                  of software applications and operating systems for end-users,
                  ensuring seamless functionality across the organization.
                </h1>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="">
            <div className="flex items-center">
              <div className="flex-grow">
                <h1 className="text-4xl font-bold titillium mt-5">
                  Freelance Technician
                </h1>
                <h1 className="text-2xl font-bold titillium">Self-Employed</h1>
                <h1 className="text-lg titillium">2014 - Present</h1>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Image
                  className=""
                  src="/freelance.webp"
                  alt="freelance"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <h1 className="text-xl font-bold titillium mt-10">
              Responsibilities and Duties:
            </h1>
            <div className="mt-2">
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Extensive experience in assembling custom computers and
                  configuring hardware components.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Proficiency in diagnosing and troubleshooting a wide range of
                  hardware issues and system failures.
                </h1>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="">
            <div className="flex items-center">
              <div className="flex-grow">
                <h1 className="text-4xl font-bold titillium mt-5">
                  Junior Software Engineer
                </h1>
                <h1 className="text-2xl font-bold titillium">
                  Pulsar Software Development
                </h1>
                <h1 className="text-lg titillium">June 2024 - Present</h1>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Image
                  className=""
                  src="/pulsar.webp"
                  alt="pulsar"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <h1 className="text-xl font-bold titillium mt-10">
              Responsibilities and Duties:
            </h1>
            <div className="mt-2">
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Analyze and understand the customers’ requirements by
                  gathering and documenting client needs for the development
                  team.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Learn the tech stack and the complex system designs of
                  existing applications to acquaint yourself with current
                  technologies and system designs.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Coding and testing of new functions and application
                  enhancements to develop and test new features based on client
                  requirements.
                </h1>
              </div>
              <div className="flex ">
                <h1 className="text-lg titillium ">&nbsp;•&nbsp;</h1>
                <h1 className="text-lg titillium ">
                  Collaborate with our team of developers, designers, and
                  testers to work closely with cross-functional teams to ensure
                  high-quality output.
                </h1>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <section
        id="experience"
        className={`min-h-dvh transition ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
        }`}
      >
        <div className="py-20"></div>
        <div className="flex justify-center">
          <Reveal>
            <h1
              className={`text-6xl font-bold titillium ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              EXPERIENCE
            </h1>
          </Reveal>
        </div>
        <div className="flex justify-center">
          <Reveal>
            <h2
              className={`text-lg tracking-widest font-bold titillium ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              SEE MY JOURNEY
            </h2>
          </Reveal>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex ">
            <div className="p-10">
              <ul className="">
                <li
                  className={`p-10 bg-white rounded-3xl m-5 hover:ring-4 transition ease-in-out duration-100 cursor-pointer ${
                    chosenButton == 12
                      ? "ring-4 ring-blue-700 ease-in-out duration-300 transform"
                      : ""
                  }`}
                  onClick={() => setChosenButton(12)}
                >
                  <span>
                    <h1 className="text-3xl font-bold titillium">
                      Junior Software Engineer
                    </h1>
                    <h1 className="text-xl titillium">June 2024 - Present</h1>
                  </span>
                </li>
                <li
                  className={`p-10 bg-white rounded-3xl m-5 hover:ring-4 transition ease-in-out duration-100 cursor-pointer ${
                    chosenButton == 1
                      ? "ring-4 ring-blue-700 ease-in-out duration-300 transform"
                      : ""
                  }`}
                  onClick={() => setChosenButton(1)}
                >
                  <span>
                    <h1 className="text-3xl font-bold titillium">
                      IT Support Intern
                    </h1>
                    <h1 className="text-xl  titillium">
                      July 2023 - August 2023
                    </h1>
                  </span>
                </li>
                <li
                  className={`p-10 bg-white rounded-3xl m-5 hover:ring-4 transition ease-in-out duration-100 cursor-pointer ${
                    chosenButton == 2
                      ? "ring-4 ring-blue-700 ease-in-out duration-300 transform"
                      : ""
                  }`}
                  onClick={() => setChosenButton(2)}
                >
                  <span>
                    <h1 className="text-3xl font-bold titillium">
                      Freelance Technician
                    </h1>
                    <h1 className="text-xl  titillium">2014 - Present</h1>
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl px-10 py-5 m-5 max-w-2xl">
              {showCard()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
