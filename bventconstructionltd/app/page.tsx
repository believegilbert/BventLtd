import HomePgHeroSec from "@/components/HomePgHeroSec";
import Navbar from "../components/NavBar";
import HomePgSec2 from "@/components/HomePgSec2";
import HomePgSec3 from "@/components/HomePgSec3";
import HomePgSec4 from "@/components/HomePgSec4";
import HomePgSec5 from "@/components/HomePgSec5";
import HomePgSec6 from "@/components/HomePgSec6";
import Footer from "@/components/Footer";
import HomPgsec7 from "@/components/HomPgsec7";

const HomePage = () => {
  return (
    <div className="bg-white bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px]">
      <Navbar />
      <HomePgHeroSec />
      <HomePgSec2 />
      <HomePgSec3 />
      <HomePgSec4 />
      <HomePgSec5 /> 
      <HomPgsec7/>
      <HomePgSec6 />
     
      <Footer />
    </div>
  )
}

export default HomePage
