import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="h-screen w-1/5 bg-[#0F172A] fixed top-0 left-0">
        <div className="flex items-center  gap-3 px-[2vw] py-4">
            <i className="ri-heart-line text-2xl text-white px-2 py-1 rounded-lg bg-[#4338CA]"></i>
            <h1 className="text-white font-semibold">PharmInventory</h1>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-8 text-indigo-200/80 px-[2vw] py-[3vh]">
            <div className="w-full flex flex-col gap-3">
                <h2 className="text-xs text-indigo-400">MAIN</h2>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/dashboard"}>
                    <i className="ri-dashboard-line"></i>
                    <h1>Dashboard</h1>
                </NavLink>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/inventory"}>
                    <i className="ri-box-3-line"></i>
                    <h1>Inventory</h1>
                </NavLink>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/batchmanagement"}>
                    <i className="ri-computer-line"></i>
                    <h1>Batch Management</h1>
                </NavLink>
            </div>
            <div className="w-full flex flex-col gap-3">
                <h2 className="text-xs text-indigo-400">OPERATIONS</h2>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/addstock"}>
                    <i className="ri-add-large-line"></i>
                    <h1>Add Stock</h1>
                </NavLink>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/reports"}>
                    <i className="ri-line-chart-line"></i>
                    <h1>Reports</h1>
                </NavLink>
                <NavLink
                className={({isActive})=>
                    `w-full flex gap-2 p-2 rounded-lg ${ isActive ? "bg-[#4338CA] text-white " : "hover:bg-gray-100/20 hover:text-white"}`
            }
                to={"/app/alerts"}>
                    <i className="ri-alarm-warning-line"></i>
                    <h1>Alerts</h1>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default SideBar
