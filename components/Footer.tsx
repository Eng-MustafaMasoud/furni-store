import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 flex py-16 flex-col gap-8">
      <div className=" flex flex-col  gap-8 border-b border-[#d4d3d3] pb-24">
        <Link href="/" className="text-main font-bold text-2xl">
          Furni.
        </Link>
        <div className="flex max-md:flex-wrap gap-8 max-md:flex-col">
          <p className="md:w-[60%] w-full  text-justify">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div className="w-full flex flex-wrap text-left justify-between  gap-4 text-sm">
            <ul className="flex flex-col gap-4">
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy policy</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>Nordic chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative bg-[#cbd5d1] w-14 h-14 rounded-full circle hover:bg-main">
            <FaFacebookF className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] icon-s "/>
          </div>
          <div className="relative bg-[#cbd5d1] w-14 h-14 rounded-full circle hover:bg-main">
            {" "}
            <BsTwitterX className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] icon-s"/>
          </div>
          <div className="relative bg-[#cbd5d1] w-14 h-14 rounded-full circle hover:bg-main">
            {" "}
            <FaInstagram className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] icon-s"/>
          </div>
          <div className="relative bg-[#cbd5d1] w-14 h-14 rounded-full circle hover:bg-main">
            <FaLinkedin className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] icon-s"/>
          </div>
        </div>
      </div>

      <div className="flex justify-between max-sm:text-center max-sm:flex-col max-sm:items-center gap-4">
        <div className="">

        <p>© Furni. All rights reserved.</p>
        <p>Made with ❤ By <Link target="_blank" className="font-bold underline" href="https://mustafamasoudprofilem.netlify.app/">Mustafa Masoud</Link></p>
        </div>
        <div className="flex gap-4 text-sm">
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
