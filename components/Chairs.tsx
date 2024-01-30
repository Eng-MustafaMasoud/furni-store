import React from "react";
import chair1 from "@/public/images/product-1.png";
import chair2 from "@/public/images/product-2.png";
import chair3 from "@/public/images/product-3.png";
import Image from "next/image";
import Link from "next/link";
const Chairs = () => {
  return (
    <section className=" max-w-7xl mx-auto    my-24  ">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 px-6 gap-8">
        <div className="flex items-center gap-4 ">
          <div className="bg-[#DCE5E4] rounded-full">
            <Image
              src={chair1}
              alt="chair"
              className="object-contain w-[300px] flex items-center hover:scale-[1.02] hover:translate-y-[-5px] transition-all duration-75 "
            />
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="font-bold">Nordic Chair</h3>
            <p className="text-sm text-[#888]">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <Link href="/shop" className="underline text-sm">Read More</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#DCE5E4] rounded-full">
            <Image
              src={chair2}
              alt="chair"
              className="object-contain w-[300px] flex items-center hover:scale-[1.02] hover:translate-y-[-5px] transition-all duration-75 ease-in"
            />
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="font-bold">Kruzo Aero Chair</h3>
            <p className="text-sm text-[#888]">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <Link href="/shop" className="underline text-sm">Read More</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#DCE5E4] rounded-full">
            <Image
              src={chair3}
              alt="chair"
              className="object-contain w-[300px] flex items-center hover:scale-[1.02] hover:translate-y-[-5px] transition-all duration-75 "
            />
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="font-bold">Ergonomic Chair</h3>
            <p className="text-sm text-[#888]">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </p>
            <Link href="/shop" className="underline text-sm">Read More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairs;
