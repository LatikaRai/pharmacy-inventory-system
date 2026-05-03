import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Demo", to: "/demo" },
    { label: "How it works", to: "/instructions" },
  ]

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 10) {
        setIsHidden(false)
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`w-full h-[10vh] sticky top-0 z-50 flex items-center justify-between px-8 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className='w-1/4 flex items-center justify-center gap-2 pr-20'>
        <i className="ri-heart-line text-2xl text-white px-2 py-1 rounded-lg bg-[#4338CA]"></i>
        <h1 className="text-lg font-semibold">Pharm<span className='text-[#4338CA]'>Inventory</span></h1>
      </div>
      <div className="w-2/4 font-semibold flex items-center justify-center gap-12 text-gray-500">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="px-1 py-2 transition-colors duration-200 hover:text-[#4338CA]"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="w-1/4 flex items-center justify-center gap-4  ">
        <Button 
        bgColor="bg-white"
        color="text-black"
        borderColor="border-gray-300"
        style="hover:bg-gray-50 transition-colors"
        onClick={() => navigate("/login")}
        >Sign in</Button>
        <Button                                                                                                                                                                                            
        bgColor="bg-[#4338CA]"
        color="text-white"
        borderColor="border-[#4338CA]"
        style="hover:bg-[#3a31af] transition-colors"
        onClick={() => navigate("/signup")}
        >
          Sign up free
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
