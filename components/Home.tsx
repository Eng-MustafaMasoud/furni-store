import Chairs from "@/components/Chairs";
import CraftedMaterial from "@/components/CraftedMaterial";
import InteriorDesign from "@/components/InteriorDesign";
import WhyChoose from "@/components/WhyChoose";
import HeroSection from "./HeroSection";
import Testimonoals from "./Testimonoals";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-[#f3f3f3]	">
      <HeroSection />
      <CraftedMaterial />
      <WhyChoose />
      <InteriorDesign />
      <Chairs />
      <Testimonoals />
      <Blog />
      <div className="bg-standard">
        <Contact/>
      </div>
    </div>
  );
};
export default Home;
