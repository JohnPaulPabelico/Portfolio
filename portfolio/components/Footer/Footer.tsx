import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Reveal } from "../Reveal";

function Footer() {
  return (
    <div>
      {" "}
      <section
        id="footer"
        className="min-h-32 bg-gray-700 flex justify-between items-center px-10"
      >
        <div className="text-2xl text-white font-bold titillium ">
          Copyright © 2024. All rights are reserved
        </div>
        <div className="flex justify-center lg:justify-start text-4xl text-white">
          <Link
            href="https://github.com/JohnPaulPabelico"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <IoLogoGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/jp-pabelico/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 lg:ml-5 ml-3"
          >
            <FaLinkedin />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
