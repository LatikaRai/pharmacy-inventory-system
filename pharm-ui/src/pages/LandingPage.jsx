import FeatureHighlights from "../components/FeatureHighlights"
import Navbar from "../components/Navbar"
import FAQ from "./FAQ"
import FeatureSection from "./FeatureSection"
import Footer from "./Footer"
import GetInTouch from "./GetInTouch"
import HeroSection from "./HeroSection"
import Instructions from "./Instructions"
import InteractiveDemo from "./InteractiveDemo"

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar/>
      <HeroSection/>
      <FeatureHighlights/>
      <FeatureSection/>
      <InteractiveDemo/>
      <Instructions/>
      <FAQ/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default LandingPage
