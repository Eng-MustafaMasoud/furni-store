import Image from "next/image";
import React from "react";
import dots from "@/public/images/dots-green.svg";
import imgGrid from "@/public/images/img-grid-1.jpg";
import imgGrid2 from "@/public/images/img-grid-2.jpg";
import imgGrid3 from "@/public/images/img-grid-3.jpg";
import { FaCircleDot } from "react-icons/fa6";

const InteriorDesign = () => {
  return (
    <section className="max-w-7xl mx-auto relative py-24 justify-between  flex h-full max-md:flex-col">
        <Image src={dots} alt="dots" className="absolute top-0" />
      <div className="flex max-md:flex-col  px-6 gap-16 justify-between items-center">
        <div className="flex-1">
          <div className="flex relative h-full ">
            <div className=" w-full h-[550px] flex  relative gap-4 justify-between">
              <Image
                src={imgGrid}
                alt="imgGrid"
                className="rounded-xl  w-[65%] h-full object-fill"
              />
              <Image
                src={imgGrid2}
                alt="imgGrid2"
                className="rounded-xl  h-[35%] w-[30%] object-fill"
              />
            </div>
            <Image
              src={imgGrid3}
              alt="imgGrid3"
              className="absolute rounded-xl  object-fill w-[70%] h-[70%] bottom-[-10%] right-0"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col h-full gap-8  max-md:mt-24">
          <h2 className="font-bold text-2xl">We Help You Make Modern Interior Design</h2>
          <p className="text-[#888] text-justify">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <ul className="grid grid-cols-2 w-full text-[#888]	gap-6 items-center">
            <li className="interior-list list-inside ">
              Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="interior-list ">
              Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="interior-list ">
              Donec vitae odio quis nisl dapibus malesuada
            </li>
            <li className="interior-list ">
              Donec vitae odio quis nisl dapibus malesuada
            </li>
          </ul>
          <button className="flex justify-start px-8 py-4 max-md:px-4 max-md:py-2 bg-[#000] text-standard w-[max-content] rounded-full">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;
