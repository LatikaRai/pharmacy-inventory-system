const DashboardView = ({ onNavigateToInventory }) => {
  return (
    <div className="h-full w-full flex flex-col py-6 px-10 gap-5">
      <div className="w-full h-[30%] flex items-center gap-6">
        <div className="w-1/4 h-full flex flex-col gap-1 border border-gray-300/40 rounded-2xl px-6 py-3 bg-white">
            <i className="ri-stack-line rounded-md py-1 px-2 bg-[#4338CA]/10 text-[#4338CA] w-fit"></i>
            <h1 className="text-xl font-bold">6</h1>
            <h4 className="text-xs text-gray-600">Total medicines</h4>
            <h4 className="text-[#4338CA] bg-[#4338CA]/10 w-fit text-xs font-semibold rounded-full px-2">5 in stock</h4>
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 border border-gray-300/40 rounded-2xl px-6 py-3 bg-white">
            <i className="ri-close-circle-line rounded-md py-1 px-2 bg-red-600/10 text-red-600 w-fit"></i>
            <h1 className="text-xl font-bold text-red-600">1</h1>
            <h4 className="text-xs text-gray-600">Out of stock</h4>
            <h4 className="text-red-700 bg-red-600/10 w-fit text-xs font-semibold rounded-full px-2">Reorder now</h4>
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 border border-gray-300/40 rounded-2xl px-6 py-3 bg-white">
            <i className="ri-alarm-warning-line rounded-md py-1 px-2 bg-amber-500/10 text-amber-600 w-fit"></i>
            <h1 className="text-xl font-bold text-amber-600">3</h1>
            <h4 className="text-xs text-gray-600">Expiring ≤30 days</h4>
            <h4 className="text-amber-600 bg-amber-500/10 w-fit text-xs font-semibold rounded-full px-2">Check batches</h4>
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 border border-gray-300/40 rounded-2xl px-6 py-3 bg-white">
            <i className="ri-briefcase-3-line rounded-md py-1 px-2 bg-green-600/10 text-green-600 w-fit"></i>
            <h1 className="text-xl font-bold">₹4.82L</h1>
            <h4 className="text-xs text-gray-600">Total stock value</h4>
            <h4 className="text-green-600 bg-green-600/10 w-fit text-xs font-semibold rounded-full px-2">Auto-computed</h4>
        </div>
      </div>
      <div className="w-full h-[65%] flex items-center gap-5 text-xs">
        <div className="w-[60%] h-full flex flex-col gap-4 bg-white border border-gray-300/40 rounded-2xl">
            <div className=" flex items-center justify-between px-6 py-2 border-b border-gray-300/40">
                <h1 className="font-semibold">Inventory overview</h1>
                <button onClick={()=>{onNavigateToInventory?.()}} className="text-[#4338CA]">View all <i className="ri-arrow-right-long-line"></i></button>
            </div>
            <div className="flex items-center px-6 pb-2 gap-3 border-b border-gray-300/40">
                <div>
                    <h1 className="text-sm">Amoxicillin 500mg</h1>
                    <h2>Amoxicillin Trihydrate</h2>
                </div>
                <div className="w-18 h-1.5 rounded-full bg-gray-300 overflow-hidden">
                    <div className="w-[90%] h-full rounded-r-full bg-green-500"></div>
                </div>
                <h1 className="text-sm">1,250</h1>
                <h2 className="text-green-600 bg-green-500/10 py-1 px-2 rounded-full">Good</h2>
            </div>
            <div className="flex items-center px-6 pb-2 gap-3 border-b border-gray-300/40">
                <div>
                    <h1 className="text-sm">Paracetamol 650mg</h1>
                    <h2>Acetaminophen</h2>
                </div>
                <div className="w-18 h-1.5 rounded-full bg-gray-300 overflow-hidden"></div>
                <h1 className="text-sm text-red-600">0</h1>
                <h2 className="text-red-600 bg-red-500/10 py-1 px-2 rounded-full">Out of stock</h2>
            </div> 
            <div className="flex items-center px-6 pb-2 gap-3 border-b border-gray-300/40">
                <div>
                    <h1 className="text-sm">Metformin 500mg</h1>
                    <h2>Metformin HCl</h2>
                </div>
                <div className="w-18 h-1.5 rounded-full bg-gray-300 overflow-hidden">
                    <div className="w-[25%] h-full rounded-r-full bg-amber-500"></div>
                </div>
                <h1 className="text-sm text-amber-500">310</h1>
                <h2 className="text-amber-600 bg-amber-500/10 py-1 px-2 rounded-full">Low stock</h2>
            </div>
            <div className="flex items-center px-6 pb-2 gap-3">
                <div>
                    <h1 className="text-sm">Omeprazole 20mg</h1>
                    <h2>Omeprazole Magnesium</h2>
                </div>
                <div className="w-18 h-1.5 rounded-full bg-gray-300 overflow-hidden">
                    <div className="w-[80%] h-full rounded-r-full bg-green-500"></div>
                </div>
                <h1 className="text-sm">940</h1>
                <h2 className="text-green-600 bg-green-500/10 py-1 px-2 rounded-full">Good</h2>
            </div>
        </div>
        <div className="w-[40%] h-full bg-white px-6 py-2 border border-gray-300/40 rounded-2xl">
            <h1 className="font-semibold pb-2">Recent activity</h1>
            <div className="py-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                    <h2 className="text-[0.8rem]">Added 450 units — Amoxicillin (AMX-25-002)</h2>
                    <h3 className="text-[0.67rem]">Today, 09:14 AM</h3>
                </div>
            </div>
            <div className="py-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                <div>
                    <h2 className="text-[0.8rem]">Low stock alert — Metformin 500mg</h2>
                    <h3 className="text-[0.67rem]">Today, 08:55 AM</h3>
                </div>
            </div>
            <div className="py-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-red-600"></div>
                <div>
                    <h2 className="text-[0.8rem]">Batch PCT-24-001 expired — 0 units</h2>
                    <h3 className="text-[0.67rem]">Yesterday, 6:30 PM</h3>
                </div>
            </div>
            <div className="py-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                    <h2 className="text-[0.8rem]">Added 200 units — Metformin (MET-25-001)</h2>
                    <h3 className="text-[0.67rem]">Yesterday, 3:10 PM</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardView
