import { useNavigate } from "react-router";

const AppNav = ({title,subTitle,alerts}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full h-[10vh] px-[2vw] py-[1vw] flex items-center justify-between bg-white border border-b-gray-200">
        <div className="w-1/3 flex items-center gap-4">
          <i className="ri-menu-line text-lg"></i>
          <div className="flex flex-col items-start">
            <h1 className="font-semibold text-xl">{title}</h1>
            <h2 className="text-sm">{subTitle}</h2>
          </div>
        </div>
        <div className="w-1/3 flex items-center gap-[1.5vw]">
          <div className="w-2/3 bg-blue-100/60 flex items-center justify-center rounded-2xl gap-3 px-3 py-1">
            <i className="ri-search-line text-gray-400"></i>
            <input type="text" 
            className="w-full text-sm outline-none"
            placeholder="Search medicines, batches…" />
          </div>
          <div onClick={()=>navigate("/app/alerts")} className="relative border-2 border-gray-200 px-2 py-1 text-md rounded-md">
            <i className="ri-notification-2-line"></i>
            {alerts.length > 0 &&
              <div className="absolute h-1.5 w-1.5 rounded-full bg-red-400 top-1 right-1"></div>}
          </div>
          <div className="h-10 w-10 rounded-full bg-amber-400"></div>
        </div>
      </div>
    </div>
  )
}

export default AppNav
