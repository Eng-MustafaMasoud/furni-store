import React from "react";
import { Material } from "@/utils/cardData";
import FurniCard from "./FurniCard";
import { materialDataTypes } from "@/types";

const CraftedMaterial = () => {
  return (
    <section className="my-16 max-w-7xl mx-auto px-6 max-sm:px-2 flex py-16 max-md:flex-col gap-8">
      <div className="flex-[1] flex flex-col  justify-around  gap-4">
        <h2 className="lg:text-4xl text-2xl font-bold">Crafted with excellent material.</h2>
        <p className="text-[#888] text-[14px] md:leading-8 ">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button className="bg-[#000] text-standard flex  w-[fit-content]  px-8 py-4 rounded-full max-md:px-4 max-md:py-2">Explore</button>
      </div>
      <div className="flex  gap-4 h-full flex-[3] max-md:flex-col ">
        {Material?.map((furni: materialDataTypes | any) => (
          <div className="grid gap-4" key={furni.id}>
            <FurniCard furni={furni} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CraftedMaterial;
