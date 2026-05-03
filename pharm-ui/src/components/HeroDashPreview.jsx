import { div } from "three/tsl"

const HeroPreview = () => {
  return (
    
    <div className="relative w-1/2 h-full">
        <div className="absolute z-10 w-[10vw] h-[14vh] right-20 top-46 rounded-xl border-2 border-gray-400/50 gray-300 bg-white flex flex-col items-start px-4 justify-center">
            <h4 className="text-xs text-gray-400 font-semibold">Critical expry alerts</h4>
            <h1 className="text-red-500 font-semibold text-2xl">3</h1>
            <h4 className="text-xs font-semibold text-orange-400">Action needed</h4>
        </div>
        <div className=" w-full h-full flex items-center justify-center px-8 z-0">
          <div className="w-[80%] h-1/2 border-2 border-gray-400/50 rounded-2xl ">
            <div className="w-full h-[13%] flex items-center justify-between px-4">
              <div className="w-[13%] flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="w-[85%] h-5 flex items-center bg-gray-200">
              </div>
            </div>
            <div className="h-[87%] w-full flex items-center">
              <div className="h-full w-[10%] border-2 border-[#0F172A] bg-[#0F172A] text-gray-400 flex flex-col items-center py-4 gap-4 text-md">
                <i className="ri-dashboard-line text-white bg-[#4338CA] px-2 py-1 rounded-lg"></i>
                <i className="ri-indeterminate-circle-line"></i>
                <i className="ri-hexagon-line"></i>
                <i className="ri-add-circle-line"></i>
              </div>
              <div className="h-full w-[90%] flex flex-col items-start gap-3 py-4 px-6">
                <div className="w-full h-[8vh] flex items-center gap-3">
                  <div className="w-1/4 h-[8vh] rounded-lg border border-gray-300 px-3 py-2">
                  <h1 className="text-xl font-bold">6</h1>
                  <h4 className="text-xs text-gray-500">Medicines</h4>
                </div>
                <div className="w-1/4 h-[8vh] rounded-lg border border-gray-300 px-3 py-2">
                  <h1 className="text-xl font-bold text-red-500">1</h1>
                  <h4 className="text-xs text-gray-500">Out of stock</h4>
                </div>
                <div className="w-1/4 h-[8vh] rounded-lg border border-gray-300 px-3 py-2">
                  <h1 className="text-xl font-bold text-orange-500">3</h1>
                  <h4 className="text-xs text-gray-500">Expiring</h4>
                </div>
                <div className="w-1/4 h-[8vh] rounded-lg border border-gray-300 px-1 py-2">
                  <h1 className="text-xl font-bold px-2">4.28L</h1>
                  <h4 className="text-xs text-gray-500">Total stock value</h4>
                </div>
                </div>
                <div className="w-full h-fit border border-gray-300 rounded-lg">
                    <div className="text-xs font-semibold px-3 py-2 flex items-center justify-between">
                        <h1>Inventory</h1>
                        <h1 className="text-[#4338CA]">View all <i className="ri-arrow-right-long-line"></i></h1>
                    </div>
                    <div className="text-xs px-3 py-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#4338CA]"></div>
                            <h2>Amoxicillin 500mg</h2>
                        </div>
                        <h2 className="text-green-600 text-[0.7vw] font-semibold px-2 rounded-full bg-green-100">In stock</h2>
                    </div>
                    <div className="text-xs px-3 py-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <h2>Paracetamol 650mg</h2>
                        </div>
                        <h2 className="text-red-600 text-[0.7vw] font-semibold px-2 rounded-full bg-red-100">Out of stock</h2>
                    </div>
                    <div className="text-xs px-3 py-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                            <h2>Metformin 500mg</h2>
                        </div>
                        <h2 className="text-orange-500 text-[0.7vw] font-semibold px-2 rounded-full bg-orange-100">Low stock</h2>
                    </div>
                    <div className="text-xs px-3 py-1 pb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <h2>Omeprazole 20mg</h2>
                        </div>
                        <h2 className="text-green-600 text-[0.7vw] font-semibold px-2 rounded-full bg-green-100">In stock</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="absolute z-10 w-[10vw] h-[14vh] left-20 bottom-32 rounded-xl border-2 border-gray-400/50 gray-300 bg-white flex flex-col items-start px-4 justify-center">
            <h4 className="text-xs text-gray-400 font-semibold">Total stock value</h4>
            <h1 className="font-semibold text-2xl">₹4,82,350</h1>
            <h4 className="text-xs font-semibold text-green-500"><i className="ri-arrow-up-long-line"></i> Updated live</h4>
        </div>
    </div>
  )
}

export default HeroPreview
