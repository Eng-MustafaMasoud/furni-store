
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
 

const DynamicHome=dynamic(()=>  import("@/components/Home") ,
{ssr:false,
loading:()=><Loader/>}

)
export default function Home() {
  return (
  <DynamicHome/>
  );
}
