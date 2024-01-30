import { materialDataTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const FurniCard = ({ furni }: materialDataTypes | any) => {
  return (
    <div className=" relative  h-full w-full top-fur  " >
      <div className="relative z-10 flex flex-col items-center gap-4 furni flex-wrap">
        <Image
          src={furni.img}
          alt={furni.name}
          className="object-contain img"
        />
        <h2>{furni.name}</h2>
        <p className="flex pb-6 font-bold">${furni.price}.00</p>
        <button className=" text-4xl furni-btn absolute bottom-[-50px] hidden opacity-5">
          <BsFillPlusCircleFill />
        </button>
      </div>
      <span className=" bg-[#DCE5E4] h-[0%] w-full  absolute bottom-0 opacity-70 rounded-lg" />
    </div>
  );
};

export default FurniCard;
