import { useState } from "react"
import DashboardView from "../components/DashboardView"
import InventoryPreview from "../components/InventoryPreview"
import BatchPreview from "../components/BatchPreview"
import StockPreview from "../components/StockPreview"

const InteractiveDemo = () => {
    const [activeTab, setActiveTab] = useState("dashboard")
  return (
    <div className="w-full h-screen px-[6vw] flex flex-col items-start gap-[5vh]">
      <div className="flex flex-col gap-[2vh]">
        <h4 className="uppercase text-[#4338CA] font-semibold">Interactive prototype</h4>
        <h1 className="text-5xl font-['instrument-serif']">The <span className="italic text-[#4338CA]">actual app</span>, right here</h1>
        <p className="text-gray-700 text-[1.1vw] leading-6">Interactive prototype — explore Dashboard, Inventory, Batches, and Add Stock.</p>
      </div>
      
      <div className="w-full h-[70vh] border-2 bg-[#F8FAFC] border-gray-300 rounded-2xl overflow-hidden">
        <div className="h-[8vh] w-full bg-white flex items-center">
            <div className='w-1/4 flex items-center justify-center gap-2 pr-20'>
                <i className="ri-heart-line text-md text-white px-2 py-1 rounded-lg bg-[#4338CA]"></i>
                <h1 className="text-md font-semibold">Pharm<span className='text-[#4338CA]'>Inventory</span></h1>
            </div>
            <div className="w-2/4 flex items-center justify-between py-2 px-10 rounded-lg text-sm text-gray-500 font-semibold bg-[#F1F5F9]">
                
                <button 
                onClick={()=>setActiveTab("dashboard")}
                className={`py-1 px-4 rounded-md ${activeTab === "dashboard"? "text-[#4338CA] bg-white" : "text-gray-500"}`}
                >Dashboard</button>
                <button
                onClick={()=>setActiveTab("inventory")}
                className={`py-1 px-4 rounded-md ${activeTab === "inventory"? "text-[#4338CA] bg-white" : "text-gray-500"}`}
                >Inventory</button>
                <button
                onClick={()=>setActiveTab("batches")}
                className={`py-1 px-4 rounded-md ${activeTab === "batches"? "text-[#4338CA] bg-white" : "text-gray-500"}`}
                >Batches</button>
                <button
                onClick={()=>setActiveTab("stock")}
                className={`py-1 px-4 rounded-md ${activeTab === "stock"? "text-[#4338CA] bg-white" : "text-gray-500"}`}
                >Add Stock</button>
            </div>
            <div className="w-1/4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <h4 className="text-sm">Live Prototype</h4>
            </div>
        </div>
        <div className="h-[62vh] w-full">
            {activeTab === "dashboard" && (<DashboardView onNavigateToInventory={()=>setActiveTab("inventory")}/>)}
            {activeTab === "inventory" && (<InventoryPreview onNavigateToBatches={()=>setActiveTab("batches")}/>)}
            {activeTab === "batches" && <BatchPreview />}
            {activeTab === "stock" && <StockPreview/>}
        </div>
      </div>
    </div>
  )
}

export default InteractiveDemo
