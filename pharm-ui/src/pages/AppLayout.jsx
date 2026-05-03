import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const AppLayout = () => {
  return (
    <div className="w-full flex">
      <SideBar/>
      <div className="w-4/5 h-screen ml-[20%]">
        <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout
