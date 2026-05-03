import Button from "../components/Button"
import HeroDashPreview from "../components/HeroDashPreview"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-full h-[90vh] flex items-center">
        <div className="w-1/2 h-full flex flex-col items-start justify-center gap-10 px-[8vw]">
          <h1 className="font-['instrument-serif'] text-7xl">Smarter <span className="italic text-[#4338CA]">pharmacy</span> <br />inventory, finally.</h1>
          <p className="text-lg">Track medicines, manage batch expiry, catch low-stock early, and log incoming stock — all from a clean, simple interface built for real pharmacy workflows.</p>
          <Button 
          style="text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a31af] hover:shadow-lg hover:shadow-indigo-200/70"
          bgColor="bg-[#4338CA]"
          color="text-white"
          borderColor="border-[#4338CA]"
          onClick={() => navigate("/login")}
          >Log in to continue<i className="ri-arrow-right-long-line ml-2"></i></Button>
        </div>

        {/* Mock dashboard */}
        <HeroDashPreview/>
      </div>
    </div>
  )
}

export default HeroSection
