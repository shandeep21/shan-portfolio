"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionClassName = darkMode
    ? "bg-black text-white h-screen w-screen"
    : "bg-yellow-200 h-screen w-screen";

  return (
    <div>
      <Head>
        <title>shandeep's portfolio</title>
      </Head>
      <main>
        <section className={sectionClassName}>
          <nav className="px-5 py-10 mb-15 flex justify-between">
            <h1 className="text-xl font-burtons">Developedbyshand</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </li>
              <li>
                <a
                  className="bg-teal-600 px-4 py-2 rounded-md ml-7 mr-4 "
                  href="#"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-5 font-medium text-teal-600 font-burtons">
              Shandeep Venkatachalam
            </h2>
            <h3 className="text-2xl font-medium">React JS Developer</h3>
            <p>
              "Crafting Digital Magic: A 4-year React Wizard 🧙‍♂️ | Let's bring
              your ideas to life!"
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-10">
            <a
              href="https://twitter.com/shandeepsamy1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://www.linkedin.com/in/shandeep-venkatachalam-77b92a16b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/shandeep21?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
