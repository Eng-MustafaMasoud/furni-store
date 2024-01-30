import Image from "next/image";
import React from "react";
import dots from "@/public/images/dots-yellow.svg";
import choose from "@/public/images/why-choose-us-img.jpg";
import truck from "@/public/images/truck.svg";
import bag from "@/public/images/bag.svg";
import support from "@/public/images/support.svg";
import Return from "@/public/images/return.svg";

const WhyChoose = () => {
  return (
    <section className="flex max-w-7xl mx-auto px-6 relative py-24 gap-4 max-md:flex-col justify-between max-md:gap-16">
      <div className="flex-1 flex flex-col gap-8 justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-[#888]">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
        </div>
        <div className="w-full  grid grid-cols-2 gap-4 ">
          <div className="w-full  flex flex-col  gap-4">
            <div className="flex items-center relative">
              <Image src={truck} alt="truck" className="relative z-10" />
              <div className="w-8 h-8 rounded-full bg-[#cbd5d1] absolute left-4 top-4" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Fast & Free Shipping</h3>
              <p className="text-sm text-[#888] leading-6">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="w-full  flex flex-col  gap-4">
            <div className="flex items-center relative">
              <Image src={bag} alt="bag" className="relative z-10" />
              <div className="w-8 h-8 rounded-full bg-[#cbd5d1] absolute left-4 top-4" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Easy to Shop</h3>
              <p className="text-sm text-[#888] leading-6">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="w-full  flex flex-col  gap-4">
            <div className="flex items-center relative">
              <Image src={support} alt="support" className="relative z-10" />
              <div className="w-8 h-8 rounded-full bg-[#cbd5d1] absolute left-4 top-4" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">24/7 Support</h3>
              <p className="text-sm text-[#888] leading-6">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="w-full  flex flex-col  gap-4">
            <div className="flex items-center relative">
              <Image src={Return} alt="return" className="relative z-10" />
              <div className="w-8 h-8 rounded-full bg-[#cbd5d1] absolute left-4 top-4" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Hassle Free Returns</h3>
              <p className="text-sm text-[#888] leading-6">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1  relative w-full max-md:mt-16">
        <Image src={dots} alt="dot" className="absolute top-[-10%]" />
        <Image
          src={choose}
          alt="choose"
          className=" relative object-fill rounded-xl  pl-24 h-full w-[100%]"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
