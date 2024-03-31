import { FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiDiscordLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <section id="contact" className="lg:min-h-80 min-h-96 bg-white">
        <div className="py-6"></div>
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold titillium ">CONTACT ME</h1>
        </div>
        <div className="flex justify-center">
          {" "}
          <h2 className="text-lg tracking-widest font-bold titillium ">
            AND LET&apos;S GET TO WORK
          </h2>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-4 justify-items-center">
          <div>
            {" "}
            <div className="flex justify-center items-center py-2 px-4 titillium font-bold text-2xl">
              <FaViber />
              <span className="ml-2">Phone/Viber</span>
            </div>
            <div>
              {" "}
              <span className="flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-60">
                +63 9959 279 891
              </span>
            </div>
          </div>

          <div className="">
            {" "}
            <div className="flex justify-center items-center py-2 px-4 titillium font-bold text-2xl">
              <MdOutlineEmail />
              <span className="ml-2">Email</span>
            </div>
            <div>
              {" "}
              <span className="flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-60">
                pabelicojohnpaul@gmail.com
              </span>
            </div>
          </div>

          <div>
            {" "}
            <div className="flex justify-center items-center py-2 px-4 titillium font-bold text-2xl">
              <FaLinkedin />
              <span className="ml-2 ">LinkedIn</span>
            </div>
            <div>
              {" "}
              <span className="lg:mb-0 mb-10 flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-60">
                linkedin.com/in/jp-pabelico/
              </span>
            </div>
          </div>

          <div>
            {" "}
            <div className="flex justify-center items-center py-2 px-4 titillium font-bold text-2xl">
              <RiDiscordLine />
              <span className="ml-2 ">Discord</span>
            </div>
            <div>
              {" "}
              <span className="lg:mb-0 mb-10 flex justify-center px-4 titillium font-bold text-xl text-black text-opacity-60">
                sen.gg
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
