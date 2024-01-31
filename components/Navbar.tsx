"use client"
import {useState} from "react";
import { NavLinks } from "@/utils/navLinks";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const pathName=usePathname()
  
  return (
    <header className="flex w-full bg-main  ">
      <nav className="flex h-24 text-standard px-6 max-sm:px-2 w-full  justify-between items-center max-w-7xl  mx-auto ">
        <Link href="/" className="text-[#888] font-extrabold text-xl">
          <span className="text-standard md:text-4xl text-xl tracking-wider">Furni</span>.
        </Link>
        <div className="flex gap-8 xl:gap-10 max-sm:gap-4">
          <ul className="hidden h-full md:flex items-center gap-4 xl:gap-6 text-white">
            {NavLinks?.map((link) => (
              <li key={link.id} className={"text-[#fff] flex flex-col"}>
                <Link className={pathName===link.url?"border-b-2  border-secondary link":"link"} href={link.url}>{link.text}</Link>
                <span className="w-0 h-[2px]  line bg-secondary"></span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <Link href="/profile">
              <IoPersonOutline className="md:text-xl"/>
            </Link>
            <Link href="/cart">
              <GrCart className="md:text-xl"/>
              
            </Link>
          </div>
          <div className="hidden max-md:block">
          <RiMenu3Fill />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
