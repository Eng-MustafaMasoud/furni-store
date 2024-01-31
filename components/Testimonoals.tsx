"use client";

import React, { useEffect } from "react";
import { TestimonoalsData } from "@/utils/testimonials";
import TestimonialsCard from "./TestimonialsCard";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Testimonoals = () => {
  const [imageIndex, setImageIndex] = useState(0);


  const infiniteloop=()=>{
    if (imageIndex === TestimonoalsData.length - 1) {
      return 0;
      } else {
        return imageIndex + 1;
        }
  }
 useEffect(()=>{

    //  setInterval(()=>infiniteloop(),1000)
     setTimeout(() => {
        if (imageIndex === TestimonoalsData.length - 1) {
            return setImageIndex(0);
            } else {
              return setImageIndex(imageIndex + 1);
              }
     }, 5000);
     
 },[imageIndex])

  const handlePrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return TestimonoalsData.length - 1;
      return index - 1;
    });
  };
  const handleNextImage = () => {
    setImageIndex((index) => {
      if (index === TestimonoalsData.length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <section className=" bg-[#c6d3c455]  my-24 px-6  ">
        <div className="relative max-w-7xl py-8  mx-auto gap-16 justify-center items-center flex flex-col">



      <h2 className="text-center sm:text-2xl text-lg font-bold tracking-wider">
        Testimonials
      </h2>
      <div className="w-[100%]  text-center items-center flex  overflow-hidden  ">
        {TestimonoalsData?.map((item, index) => (
            <div key={item.id} className=" w-full md:px-24  text-center items-center justify-center  shrink-0 grow-0  flex    transition-all duration-300 ease-in" style={{ translate: `${-100 * imageIndex}%` }}>

                <TestimonialsCard   item={item}  />
            </div>
        ))}
      </div>
      <button
        onClick={handlePrevImage}
        className="absolute sm:top-[50%] top-[60%] left-[2%] bg-[#E6ECEC] hover:bg-[#3B5D50] w-14 h-14 rounded-full items-center flex justify-center text-standard text-[18px] tes-btn"
      >
        <IoIosArrowBack  className="text-[#000] icon"/>
      </button>
      <button
        onClick={handleNextImage}
        className="absolute sm:top-[50%] top-[60%] right-[2%] bg-[#E6ECEC]  hover:bg-[#3B5D50] w-14 h-14 rounded-full items-center flex justify-center text-standard text-[18px] tes-btn"
      >
        <IoIosArrowForward  className="text-[#000] icon"/>
      </button>
        </div>
    </section>
  );
};

export default Testimonoals;
