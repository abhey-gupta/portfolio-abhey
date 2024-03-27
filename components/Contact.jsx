"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
// import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:abheygupta1731@gmail.com">
          abheygupta1731@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-10 flex flex-col"
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }

        //   toast.success("Email sent successfully!");
        // }}
      >
        <input
          className="h-14 px-4 rounded-lg border"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
