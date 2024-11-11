"use client";

import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  const ref = useRef(null);
  const isSectionInView = useInView(ref, { once: true });

  // =============================SKILLS=============================
  const skillsDetail: {
    [key: string]: { image: string; color: string; label: string };
  } = {
    html: {
      image: "html.png",
      color: "#E34F26",
      label: "HTML",
    },
    css: {
      image: "css.png",
      color: "#1572B6",
      label: "CSS",
    },
    scss: {
      image: "scss.png",
      color: "#CC6699",
      label: "SCSS",
    },
    js: {
      image: "js.png",
      color: "#F7DF1E",
      label: "JavaScript",
    },
    react: {
      image: "react.png",
      color: "#61DAFB",
      label: "React",
    },
    next: {
      image: "next.png",
      color: "#ffffff",
      label: "Next.js",
    },
    ts: {
      image: "ts.png",
      color: "#3178C6",
      label: "TypeScript",
    },
    tailwin: {
      image: "tailwin.png",
      color: "#38B2AC",
      label: "Tailwind",
    },
    antdesign: {
      image: "antdesign.png",
      color: "#1890FF",
      label: "Ant Design",
    },
    framerMotion: {
      image: "framer-motion.png",
      color: "#F70292",
      label: "Framer Motion",
    },
    mongo: {
      image: "mongo.png",
      color: "#47A248",
      label: "MongoDB",
    },
    bootstrap: {
      image: "bootstrap.png",
      color: "#563D7C",
      label: "Bootstrap",
    },
    git: {
      image: "git.png",
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
      label: "Email",
      color: "#ff3b3b",
    },
    {
      label: "LinkedIn",
      color: "#00cfff",
    },
  ];

  const StyledDiv = styled.div`
    &::after,
    &::before {
      background-image: ${({ color }) =>
        `conic-gradient(from var(--angle), transparent 50%, ${color})`};
    }
    &::before {
      filter: blur(10px);
    }
  `;

  // ================================MOUSE================================
  useEffect(() => {
    const handleOnMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
  
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };
  
    for (const card of document.querySelectorAll(
      ".card"
    ) as NodeListOf<HTMLElement>) {
      card.onmousemove = (e) => handleOnMouseMove(e);
    }
  }, [])

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main ref={ref} className="w-[950px] h-[700px] m-auto">
        <div
          id="homepage-container"
          className="grid grid-cols-12 grid-rows-12 gap-[20px] w-full h-full"
        >
          {/* INTRO */}
          <motion.div
            className="card col-span-8 row-span-3"
            initial={{ opacity: 0, x: "-25%" }}
            animate={isSectionInView ? { opacity: 1, x: "0%" } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="card-border"></div>
            <div className="card-wrapper">
              <div className="text-[22px] mb-[5px] font-bold">
                Hello, this is my portfolio!
              </div>
              <p
                className="text-[16px] text-[#A0A2A8]"
                style={{ lineHeight: "1.5" }}
              >
                My name is Nguyen Van Hoang, I have nearly 2 months of freelance
                experience and 6 months as a Front-end intern at SapotaCorp. I
                am currently seeking a full-time fresher opportunity in Da Nang
                or remotely.
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="card col-span-4 row-span-6"
            initial={{ opacity: 0, y: "-25%" }}
            animate={isSectionInView ? { opacity: 1, y: "0%" } : {}}
          >
            <div className="card-border"></div>
            <div className="card-wrapper overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                fill
                className="!relative translate-y-[-60px] object-contain"
                style={{ scale: 2.2 }}
              />
            </div>
          </motion.div>

          {/* POSITION */}
          <motion.div
            className="card col-span-4 row-span-3"
            initial={{ opacity: 0, y: "50%" }}
            animate={isSectionInView ? { opacity: 1, y: "0%" } : {}}
            transition={{ delay: 2 }}
          >
            <div className="card-border"></div>
            <div className="card-wrapper h-full flex flex-col justify-center">
              <span className="text-[28px] text-center playwrite-dk-uloopet">
                Front-end Dev
                <br /> Intern/Fresher
              </span>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div className="card col-span-4 row-span-5">
            <div className="card-border"></div>
            <div className="card-wrapper">1</div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            className="card col-span-4 row-span-6"
            initial={{ opacity: 0, y: "25%" }}
            animate={isSectionInView ? { opacity: 1, y: "0%" } : {}}
            transition={{ delay: 1 }}
          >
            <div className="card-border"></div>
            <div className="card-wrapper">
              <div className="text-[22px] mb-[5px] font-bold">
                I have worked with
              </div>
              <div
                className="skill-logo grid grid-cols-4 gap-[20px] relative"
                // style={{ columnGap: "10px", rowGap: "25px" }}
              >
                {skills.map((skill: string, index) => {
                  const skillData =
                    skillsDetail[String(skill) as keyof typeof skillsDetail];

                  return (
                    <div className="group" key={index}>
                      <span
                        style={{
                          backgroundColor: skillData.color,
                          pointerEvents: "none",
                        }}
                        className="rounded-full w-[40%] h-[40%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] blur-[100px] opacity-0 group-hover:opacity-100 z-[1]"
                      ></span>

                      <div className="w-full h-full flex relative z-10 py-[8px] rounded-[7.5px] bg-black bg-opacity-40">
                        <Image
                          src={`/${skillData.image}`}
                          alt="skill logo"
                          className="m-auto"
                          width={35}
                          height={35}
                        />

                        <span
                          className="flex flex-nowrap justify-center top-[25%] text-[12px] font-semibold w-full text-nowrap absolute cursor-default opacity-0 group-hover:opacity-100 group-hover:top-[100%]"
                          style={{ color: skillData.color }}
                        >
                          {skillData.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* MEDIA */}
          <motion.div
            className="card col-span-4 row-span-2"
            initial={{ opacity: 0, y: "-50%" }}
            animate={isSectionInView ? { opacity: 1, y: "0%" } : {}}
            transition={{ delay: 2 }}
          >
            <div className="card-border"></div>
            <div className="card-wrapper">
              <div className="text-[22px] mb-[5px] font-bold">
                Contact me via
              </div>
              <div className="flex gap-[20px]">
                {contacts.map((contact, index) => {
                  return (
                    <div
                      className="spin-animate-container w-[30%] h-[30px] hover:"
                      key={index}
                    >
                      <StyledDiv
                        className="spin-animate-box"
                        color={contact.color}
                      >
                        <div
                          className="spin-animate-content"
                          style={{ borderRadius: "var(--card-radius)" }}
                        >
                          <div className="h-full py-[2px] rounded-[20px] text-[#A0A2A8] text-[12px] text-center bg-black bg-opacity-40">
                            {contact.label}
                          </div>
                        </div>
                      </StyledDiv>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            className="card col-span-8 row-span-4"
            initial={{ opacity: 0, x: "25%" }}
            animate={isSectionInView ? { opacity: 1, x: "0%" } : {}}
            transition={{ delay: 1.5 }}
          >
            <div className="card-border"></div>
            <div className="card-wrapper">4</div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
