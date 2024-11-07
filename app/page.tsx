"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const ref = useRef(null);
  const isSectionInView = useInView(ref, { once: true });

  // =============================SKILLS=============================
  const skillsDetail: {
    [key: string]: { image: string; color: string; label: string };
  } = {
    html: {
      image: "./html.png",
      color: "#E34F26",
      label: "HTML",
    },
    css: {
      image: "./css.png",
      color: "#1572B6",
      label: "CSS",
    },
    scss: {
      image: "./scss.png",
      color: "#CC6699",
      label: "SCSS",
    },
    js: {
      image: "./js.png",
      color: "#F7DF1E",
      label: "JavaScript",
    },
    react: {
      image: "./react.png",
      color: "#61DAFB",
      label: "React",
    },
    next: {
      image: "./next.png",
      color: "#ffffff",
      label: "Next.js",
    },
    ts: {
      image: "./ts.png",
      color: "#3178C6",
      label: "TypeScript",
    },
    tailwin: {
      image: "./tailwin.png",
      color: "#38B2AC",
      label: "Tailwind",
    },
    antdesign: {
      image: "./antdesign.png",
      color: "#1890FF",
      label: "Ant Design",
    },
    framerMotion: {
      image: "./framer-motion.png",
      color: "#F70292",
      label: "Framer Motion"
    },
    mongo: {
      image: "./mongo.png",
      color: "#47A248",
      label: "MongoDB",
    },
    bootstrap: {
      image: "./bootstrap.png",
      color: "#563D7C",
      label: "Bootstrap",
    },
    git: {
      image: "./git.png",
      color: "#F05032",
      label: "Git",
    },
  };
  const skills: string[] = [
    "html",
    "css",
    "scss",
    "js",
    "react",
    "next",
    "tailwin",
    "ts",
    "antdesign",
    "framerMotion",
    "bootstrap",
    "mongo",
    "git",
  ];

  // =============================CONTACT=============================
  const contacts = [
    {
      label: 'Email',
      color: '#ff4343'
    },
    {
      label: 'LinkedIn',
      color: '#0077B5'
    }
  ]

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main ref={ref} className="w-[950px] h-[700px] m-auto">
        <div
          id="homepage-container"
          className="grid grid-cols-12 grid-rows-12 gap-[20px] w-full h-full"
        >
          {/* INTRO */}
          <motion.div
            className={`col-span-8 row-span-3 rounded-xl ${
              isSectionInView
                ? "translate-x-[0%] opacity-1"
                : "translate-x-[-25%] opacity-0"
            }`}
            style={{ transitionDelay: "0.75s" }}
          >
            <div className="text-[24px] font-bold">
              Hello, this is my portfolio!
            </div>

            <p
              className="mt-[5px] text-[16px] text-[#A0A2A8]"
              style={{ lineHeight: "1.65" }}
            >
              My name is Nguyen Van Hoang, I have nearly 2 months of freelance
              experience and 6 months as a Front-end intern at SapotaCorp. I am
              currently seeking a full-time fresher opportunity in Da Nang or
              remotely.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className={`col-span-4 row-span-6 rounded-xl overflow-hidden ${
              isSectionInView
                ? "translate-y-0 opacity-1"
                : "translate-y-[-25%] opacity-0"
            }`}
            style={{
              padding: 0,
            }}
          >
            <Image
              src="/avatar.jpg"
              alt="avatar"
              fill
              className="!relative translate-y-[-60px] object-contain"
              style={{ scale: 1.6 }}
            />
          </motion.div>

          {/* POSITION */}
          <motion.div
            className={`col-span-4 row-span-3 rounded-xl flex flex-col justify-center ${
              isSectionInView
                ? "translate-y-0 opacity-1"
                : "translate-y-[50%] opacity-0"
            }`}
            style={{ transitionDelay: "2s" }}
          >
            <span className="text-[28px] text-center playwrite-dk-uloopet">
              Front-end Dev
              <br /> Intern/Fresher
            </span>
          </motion.div>

          {/* CENTER */}
          <motion.div className="col-span-4 row-span-5 rounded-xl">
            1
          </motion.div>

          {/* SKILLS */}
          <motion.div
            className={`col-span-4 row-span-6 rounded-xl ${
              isSectionInView
                ? "translate-y-[0%] opacity-1"
                : "translate-y-[25%] opacity-0"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div className="text-[24px] font-bold">I have worked with</div>

            <div
              className="mt-[10px] skill-logo grid grid-cols-4 relative"
              style={{ columnGap: "10px", rowGap: "25px" }}
            >
              {skills.map((skill: string, index) => {
                const skillData =
                  skillsDetail[String(skill) as keyof typeof skillsDetail];

                return (
                  <div className="group" key={index}>
                    <span
                      style={{ backgroundColor: skillData.color }}
                      className="rounded-full w-[40%] h-[40%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] blur-[100px] opacity-0 group-hover:opacity-100 z-[-1]"
                    ></span>

                    <div className="w-full h-full flex relative">
                      <Image
                        src={`/${skillData.image}`}
                        alt="skill logo"
                        className="m-auto"
                        width={40}
                        height={40}
                      />

                      <span
                        className="flex flex-nowrap justify-center top-[25%] text-[14px] font-semibold w-full text-nowrap absolute cursor-default opacity-0 group-hover:opacity-100 group-hover:top-[100%]"
                        style={{ color: skillData.color }}
                      >
                        {skillData.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* MEDIA */}
          <motion.div
            className={`col-span-4 row-span-2 rounded-xl ${
              isSectionInView
                ? "translate-y-[0%] opacity-1"
                : "translate-y-[-50%] opacity-0"
            }`}
            style={{ transitionDelay: "2s" }}
          >
            <div className="text-[24px] font-bold">Contact me via</div>
            <div className="flex gap-[20px]">
              {contacts.map((contact, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center align-middle px-[15px] py-[2.5px] border-2 rounded-full overflow-hidden relative group"
                  >
                    <div
                      className="w-[1px] h-[1px] border-[4px] rounded-full m-auto absolute left-[12.5px] top-[50%] translate-y-[-50%] group-hover:w-[500px] group-hover:h-[500px] group-hover:left-[-5px]"
                      style={{ borderColor: contact.color, transition: 'var(--fancy-transition)' }}
                    ></div>
                    <span className="ml-[15px]">{contact.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            className={`col-span-8 row-span-4 rounded-xl ${
              isSectionInView
                ? "translate-x-[0%] opacity-1"
                : "translate-x-[25%] opacity-0"
            }`}
            style={{ transitionDelay: "1.5s" }}
          >
            4
          </motion.div>
        </div>
      </main>
    </div>
  );
}
