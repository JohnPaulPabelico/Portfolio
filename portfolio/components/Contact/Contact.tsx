import { FaViber, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiDiscordLine } from "react-icons/ri";
import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Reveal } from "../Reveal";

function Contact() {
  const { darkMode } = useContext(DarkModeContext)!;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy to clipboard.");
    }
  };

  return (
    <div>
      <section
        id="contact"
        className={`lg:min-h-80 min-h-96 transition ${
          darkMode ? "bg-gray-900 " : "bg-gray-100"
        }`}
      >
        <div className="py-6"></div>
        <div className="flex justify-center">
          <Reveal>
            <h1
              className={`text-6xl font-bold titillium ${
                darkMode ? "text-white " : "text-black"
              }`}
            >
              CONTACT ME
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
              AND LET&apos;S GET TO WORK
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-4 justify-items-center">
          <Reveal>
            <div>
              <div
                className={`flex justify-center items-center py-2 px-4 titillium font-bold text-2xl ${
                  darkMode ? "text-white " : "text-black"
                }`}
              >
                <FaViber />
                <span className="ml-2">Phone/Viber</span>
              </div>
              <div>
                {" "}
                <span
                  onClick={() => copyToClipboard("+63 9959 279 891")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      copyToClipboard("+63 9959 279 891");
                    }
                  }}
                  tabIndex={0}
                  className={`flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-70 hover:text-blue-500 transition ease-in cursor-pointer ${
                    darkMode ? "text-white " : "text-black"
                  }`}
                >
                  +63 9959 279 891
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="">
              {" "}
              <div
                className={`flex justify-center items-center py-2 px-4 titillium font-bold text-2xl ${
                  darkMode ? "text-white " : "text-black"
                }`}
              >
                <MdOutlineEmail />
                <span className="ml-2">Email</span>
              </div>
              <div>
                {" "}
                <span
                  className={`flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-70 hover:text-blue-500 transition ease-in ${
                    darkMode ? "text-white " : "text-black"
                  }`}
                >
                  <a href="mailto:pabelicojohnpaul@gmail">
                    pabelicojohnpaul@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              {" "}
              <div
                className={`flex justify-center items-center py-2 px-4 titillium font-bold text-2xl ${
                  darkMode ? "text-white " : "text-black"
                }`}
              >
                <FaLinkedin />
                <span className="ml-2 ">LinkedIn</span>
              </div>
              <div>
                {" "}
                <span
                  className={`flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-70 hover:text-blue-500 transition ease-in cursor-pointer ${
                    darkMode ? "text-white " : "text-black"
                  }`}
                >
                  <a
                    href="https://linkedin.com/in/jp-pabelico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/jp-pabelico/
                  </a>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div
                className={`flex justify-center items-center py-2 px-4 titillium font-bold text-2xl ${
                  darkMode ? "text-white " : "text-black"
                }`}
              >
                <RiDiscordLine />
                <span className="ml-2 ">Discord</span>
              </div>
              <div>
                <span
                  onClick={() => copyToClipboard("sen.gg")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      copyToClipboard("sen.gg");
                    }
                  }}
                  tabIndex={0}
                  className={`lg:mb-0 mb-10 flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-70 hover:text-blue-500 transition ease-in cursor-pointer ${
                    darkMode ? "text-white " : "text-black"
                  }`}
                >
                  sen.gg
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Contact;
