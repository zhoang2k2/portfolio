/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import useGitHubProfile from "@/hooks/useGitHubProfile";
import Link from "next/link";

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

export default function Home() {
  const ref = useRef(null);
  const isSectionInView = useInView(ref, { once: true });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [githubProfile, setGithubProfile] = useState<{
    [key: string]: string;
  }>();
  const [customProfile, setCustomProfile] = useState<{
    login: string | string[];
  }>();

  // =============================INTRO=============================
  const introInfo = [
    {
      description: "My name is Nguyen Van Hoang.",
      question: "About me?",
      extra: "",
    },
    {
      description:
        "Seeking for a full-time Fresher position in Da Nang or remote.",
      question: "Desire?",
      extra: "",
    },
    {
      description: "I am ready to start as early as next week.",
      question: "Availability?",
      extra: "",
    },
  ];

  // =============================POSITION=============================
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
      detail: "nvhoang2012002@gmail.com",
    },
    {
      label: "LinkedIn",
      color: "#00cfff",
      detail: "https://www.linkedin.com/in/hoangnv02",
    },
  ];

  const handleNavigate = (type: "email" | "linkedin", content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${content}`;
        window.open(type === "email" ? gmailUrl : content, "_blank");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // =============================GITHUB=============================
  const profile: any = useGitHubProfile("zhoang2k2");

  useEffect(() => {
    profile && setGithubProfile(profile.profile);
  }, [profile]);

  useEffect(() => {
    if (
      githubProfile &&
      Array(customProfile?.login)?.join("") !== githubProfile.login
    ) {
      setCustomProfile({ login: ["@", ...githubProfile.login.split("")] });
    }
  }, [githubProfile]);

  // =============================DETAIL EXPERIENCE=============================
  const detailInfo = [
    {
      time: "4 months",
      description: "Worked as a Front-end Intern at SapotaCorp.",
    },
    {
      time: "2 months",
      description: "Freelanced on UI tasks with a small team in Hanoi.",
    },
    {
      time: "05/2024",
      description: "Completed a 6-month Front-end course at VTI Academy.",
    },
    {
      time: "05/2024",
      description: "Graduated from the University of Greenwich.",
    },
    {
      time: "07/2023",
      description: "Began my self-learning journey in Front-end development.",
    },
  ];

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
  }, []);

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
              <div className="cursor-default text-[22px] mb-[5px] font-bold">
                Welcome to my Portfolio!
              </div>
              <ul className="flex flex-col gap-[2.5px]">
                {introInfo.map((info, index) => (
                  <li
                    key={index}
                    className="cursor-default text-[#A0A2A8] hover:text-[#fff] flex"
                  >
                    <span className="font-bold w-[115px]">
                      {info.question}{" "}
                    </span>
                    {info.description}
                  </li>
                ))}
              </ul>
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
                src="/avatar2.jpg"
                alt="avatar"
                fill
                className="!relative translate-y-[-20px] object-contain"
                style={{ scale: 1.305 }}
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
              <span
                className="text-[36px] text-center chango-regular font-bold"
                style={{ lineHeight: 1.25 }}
              >
                {(() => {
                  const position = "Front-end Developer";
                  const array = position.split("");

                  return (
                    <>
                      {array.map((letter, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={isTextVisible ? { opacity: 1 } : {}}
                          transition={{ duration: 1, delay: index / 20 }}
                          className="text-[32px] uppercase"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </>
                  );
                })()}
              </span>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div className="card col-span-4 row-span-5">
            <div className="card-border"></div>
            <div className="card-wrapper">
              <Link
                className="w-full h-full flex flex-col justify-center items-center gap-[20px]"
                href={githubProfile?.html_url || ""}
                target="_blank"
              >
                <Image
                  loading="lazy"
                  className="rounded-full"
                  src={githubProfile?.avatar_url || ""}
                  alt={`Avatar of ${githubProfile?.login}`}
                  width={125}
                  height={125}
                />
                <div className="flex gap-[2px]">
                  {Array.isArray(customProfile?.login) &&
                    customProfile?.login.map(
                      (letter: string, index: number) => {
                        return (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: index / 10 }}
                            className="text-[16px]"
                          >
                            {letter}
                          </motion.span>
                        );
                      }
                    )}
                </div>
              </Link>
            </div>
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
              <div className="cursor-default text-[22px] mb-[5px] font-bold">
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
                          loading="lazy"
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
              <div className="cursor-default text-[22px] mb-[5px] font-bold">
                Contact me via
              </div>
              <div className="flex gap-[15px]">
                {contacts.map((contact, index) => {
                  const type = contact.label.toLowerCase() as
                    | "email"
                    | "linkedin";

                  return (
                    <motion.div
                      className="spin-animate-container w-[30%] h-[30px] hover:"
                      key={index}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      animate={
                        hoverIndex === index
                          ? { width: "100%", opacity: 1 }
                          : hoverIndex === null
                          ? { width: "30%", opacity: 1 }
                          : { width: 0, opacity: 0, display: "none" }
                      }
                      initial={{ width: "auto", opacity: 1 }}
                      onClick={() => handleNavigate(type, contact.detail)}
                    >
                      <StyledDiv
                        className="spin-animate-box"
                        color={contact.color}
                      >
                        <motion.div
                          className="spin-animate-content"
                          style={{ borderRadius: "var(--card-radius)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="h-full py-[2px] rounded-[20px] text-[#A0A2A8] text-[14px] text-center bg-black bg-opacity-40 cursor-pointer">
                            {hoverIndex === null
                              ? contact.label
                              : contact.detail}
                          </div>
                        </motion.div>
                      </StyledDiv>
                    </motion.div>
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
            <div className="card-wrapper">
              <div className="cursor-default text-[22px] mb-[5px] font-bold">
                My Career Path
              </div>

              <ul className="flex flex-col gap-[2.5px]">
                {detailInfo.map((info, index) => (
                  <li
                    key={index}
                    className="cursor-default text-[#A0A2A8] hover:text-[#fff] flex"
                  >
                    <span className="font-bold w-[85px]">{info.time}: </span>
                    {info.description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
