import { testimonialslDataTypes } from "@/types";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const TestimonialsCard = ({ item, index,handlePrevImage,handleNextImage }: testimonialslDataTypes | any) => {
  return (
    <div  className=" flex flex-col w-screen max-w-[80%]       items-center justify-center max-sm:max-w-full text-center gap-8">
      <p className="text-sm text-[#888] leading-8">{item.desc}</p>
      <div className=" flex flex-col items-center gap-2">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover w-24 h-24 rounded-full"
        />
        <h3 className="font-bold">{item.name}</h3>
        <span className="text-sm text-[#888]">{item.designation}</span>
      </div>
      
     
               
    </div>
  );
};

export default TestimonialsCard;
