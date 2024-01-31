import envelope from "@/public/images/envelope-outline.svg";
import send from "@/public/images/send.svg";
import sofa from "@/public/images/sofa.png";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="mt-24 max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between gap-8 max-md:flex-col">
        <div className="flex flex-col  gap-4">

        <div className="flex gap-2">
          <Image src={envelope} alt="envelope" />
          <h2>Subscripe to Newletter</h2>
        </div>
        <form action="" className="flex gap-4 flex-wrap item-center">
          <input
            type="text"
            placeholder="Enter your name"
            className="border max-sm:max-w-[150px] border-[#99999942] rounded-xl px-2 py-6 h-0 focus:shadow-lg"
          />
          <input
            type="email"
            placeholder="Enter your email "
            className="border max-sm:max-w-[150px] border-[#99999942] rounded-xl px-2 py-6 h-0 focus:shadow-lg"
          />
          <button
            
            className="bg-main px-6 py-4 rounded-xl hover:bg-opacity-95 w-[max-content]"
          >
            <Image
              src={send}
              alt="send"
              className="w-6 h-4  text-standard "
            />
          </button>
        </form>
        </div>
        <div className="md:mt-[-150px]">
          <Image src={sofa} alt="chair" className="object-contain w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
