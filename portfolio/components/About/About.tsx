import Image from "next/image";

function About() {
  return (
    <div>
      {" "}
      <section id="about" className="min-h-dvh bg-white">
        <div className="py-20"></div>
        <div className="text-6xl font-bold titillium flex justify-center">
          ABOUT ME
        </div>
        <div className="mt-10 flex justify-center">
          <h1 className="text-justify lg:px-40 px-10 text-light roboto font-bold text-gray-700 lg:w-1/2 ">
            Hey there, I&apos;m John Paul B. Pabelico, your next web sensation!
            From the vibrant streets of Parañaque City, Philippines, I bring a
            burst of creativity and expertise to the digital realm. With a
            Bachelor of Science degree in Computer Engineering under my belt,
            I&apos;m not just another coder – I&apos;m your partner in
            transforming visions into captivating online experiences.
            <br></br>
            <br></br>
            My journey in the tech world has been nothing short of exhilarating.
            From mastering the art of coding to honing my skills in web
            development, I&apos;ve dedicated myself to staying ahead of the
            curve. Armed with a diverse toolkit that includes languages like
            Python, JavaScript, and Java, as well as frameworks like NextJS and
            ExpressJS, I&apos;m equipped to tackle any challenge that comes my
            way.
            <br></br>
            <br></br>
            But it&apos;s not just about the code – it&apos;s about the magic
            that happens when creativity meets technology. Whether it&apos;s
            designing sleek interfaces that captivate audiences or crafting
            seamless user experiences that keep them coming back for more, I
            thrive on pushing the boundaries of what&apos;s possible in the
            digital world.
            <br></br>
            <br></br>
            So, if you&apos;re ready to take your online presence to the next
            level, I&apos;m here to make it happen. Let&apos;s team up and bring
            your wildest web dreams to life!
          </h1>
        </div>
        <div className="py-20 lg:py-20 px-10 justify-center flex">
          <span className="text-center lg:text-start lg:flex items-center text-2xl titillium font-bold text-gray-500">
            Tech Stack: &nbsp;{" "}
            <ul className="lg:flex lg:items-center lg:mt-0 mt-5 grid grid-cols-4 gap-4">
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src="https://skillicons.dev/icons?i=html"
                  alt="HTML"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src="https://skillicons.dev/icons?i=css"
                  alt="CSS"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=js"
                  alt="JavaScript"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=ts"
                  alt="TypeScript"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=react"
                  alt="React"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src="https://skillicons.dev/icons?i=next"
                  alt="Next"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src="https://skillicons.dev/icons?i=express"
                  alt="Express"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                <Image
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="NodeJS"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="Tailwind"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=github"
                  alt="Github Icon"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=npm"
                  alt="NPM Icon"
                  width={50}
                  height={50}
                />
              </li>
              <li className="m-1 hover:-translate-y-2 transition duration-300 ease-in-out">
                {" "}
                <Image
                  src="https://skillicons.dev/icons?i=docker"
                  alt="Docker Icon"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </span>
        </div>
      </section>
    </div>
  );
}

export default About;
