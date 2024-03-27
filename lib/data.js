import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mazindaImg from "@/public/projects/mazindaImg.png";
import mazindaStoreImg from "@/public/projects/mazindaStoreImg.png";
import mazindaAppImg from "@/public/projects/mazindaAppImg.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

export const projectsData = [
  {
    title: "Mazinda",
    description:
      "I am currently serving as a full-stack developer for this dynamic e-commerce platform, actively contributing to its development and maintenance as it serves a growing user base",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "OAuth"],
    imageUrl: mazindaImg,
  },
  {
    title: "Mazinda App",
    description:
      "I developed this cross platform mobile app using React Native. The app provides users with a simple interface for shopping and accessing platform features, contributing to a convenient shopping experience",
    tags: ["React Native", "MongoDB"],
    imageUrl: mazindaAppImg,
  },
  {
    title: "Mazinda Store End",
    description:
      "It is store management system for the vendors, to efficiently manage orders, update their product catalog, and access valuable analytics insights",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "AWS"],
    imageUrl: mazindaStoreImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  // "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  "jwt",
  "AWS",
  // "PostgreSQL",
  "Python",
  "Data Science",
  // "Django",
  "Framer Motion",
];
