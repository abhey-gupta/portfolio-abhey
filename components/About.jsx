"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //   const { ref } = useSectionInView("About");

  return (
    <motion.section
      //   ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing B.Tech in{" "}
        <span className="font-medium">Mathematics and Computing</span> from{" "}
        <br />
        <a
          href="https://iitmandi.ac.in"
          target="_blank"
          className="underline font-medium"
        >
          Indian Institute of Technology, Mandi
        </a>
        . I've been captivated by coding, which led me to become a skilled
        <span className="font-medium"> full-stack web developer</span>. Over
        time, I've expanded my expertise to include{" "}
        <span className="font-medium">
          cross-platform mobile app development{" "}
        </span>{" "}
        using <span className="italic font-medium">React Native</span>. As the{" "}
        <span className="font-medium underline">Chief Technology Officer</span>{" "}
        of a startup, I lead our technical initiatives, utilizing my diverse
        skill set to drive innovation and bring our vision to fruition. My core
        stack is{" "}
        <span className="font-medium">
          MERN, Next.js, React Native , MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>
    </motion.section>
  );
}
