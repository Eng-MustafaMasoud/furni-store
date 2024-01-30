"use client";
import React from "react";
import Image from "next/image";
import couch from "@/public/images/couch.png";
import dots from "@/public/images/dots-light.svg";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroSection = () => {
  const animateSection = {
    visible: {
      transition: { staggerChildren: 0.5 },
      x: 0,
      duration: 0.75,
      opacity: 1,
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  const couchMove = {
    visible: { x: "0%", scale: 1 ,transition: { duration: .75 }},
    hidden: { x: "200%", scale: 0 },
  };
  const animateText = {
    visible: { x: "0%", scale: 1 ,transition: { duration: .75 }},
    hidden: { x: "-200%", scale: 0 },
  };
  return (
    <section className="bg-main  max-h-[100dvh]  lg:h-[calc(100dvh-100px)]  ">
      <motion.div
        variants={animateSection}
        initial={"hidden"}
        animate={"visible"}
        className="max-w-7xl mx-auto px-6 flex items-center  justify-center lg:h-screen h-full max-lg:flex-col gap-10 "
      >
        <motion.div variants={animateText} initial="hidden" animate="visible" className="lg:flex-[2] flex-1 flex flex-col gap-6 lg:gap-10 max-lg:mt-16 justify-center h-full">
          <h1 className="text-standard text-5xl max-lg:text-4xl font-extrabold md:mb-8 max-sm:text-xl">
            Modern Interior Design Studio
          </h1>
          <p className="text-[#9DAEA8] max-sm:text-sm">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex gap-4 max-w-[max-content]  ">
            <Link
              href="/shop"
              className="rounded-full max-w-[max-content] px-8 py-4 max-sm:py-2 max-sm:px-4   bg-secondary font-bold"
            >
              Shop Now
            </Link>
            <button className="border-2 border-[#9DAEA8] hover:border-2 hover:border-standard text-standard font-bold rounded-full max-w-[max-content] px-8 py-4 max-sm:py-2 max-sm:px-4 ">
              Explore
            </button>
          </div>
        </motion.div>
        <motion.div variants={couchMove} initial="hidden" animate="visible" className="lg:flex-[3] flex-1 relative  w-full flex items-center justify-center mt-16  ">
          <Image
            src={dots}
            alt="dots"
            className="w-2/5  object-contain absolute right-16   top-0 "
          />
          <Image
            src={couch}
            className="w-full h-auto object-contain  relative  "
            alt="couch"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
