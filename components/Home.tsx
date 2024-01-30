import Chairs from "@/components/Chairs";
import CraftedMaterial from "@/components/CraftedMaterial";
import InteriorDesign from "@/components/InteriorDesign";
import WhyChoose from "@/components/WhyChoose";
import HeroSection from "./HeroSection";
import Testimonoals from "./Testimonoals";

const Home=()=>{

    return(
<div className="	">
<HeroSection/>
<CraftedMaterial/>
<WhyChoose/>
<InteriorDesign/>
<Chairs/>
<Testimonoals/>
</div>

    )
}
export default Home