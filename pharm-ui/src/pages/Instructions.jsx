import { useState } from "react";

const Instructions = () => {

    const [step, setstep] = useState("step1")

  return (
    <div className="w-full h-[70vh] px-[6vw] py-[5vh] ">
      <h3 className="uppercase text-[#4338CA] font-semibold pb-3">Simple to use</h3>
      <h1 className="text-5xl pb-10 font-['instrument-serif']">Up and running in <span className="text-[#4338CA] italic">minutes</span></h1>
      <div className="w-full h-[60vh] flex items-center gap-5">
        <div className="w-1/2 px-[2vw] flex flex-col gap-[4vh]">
            <div onClick={()=>setstep("step1")} className="flex items-center justify-center cursor-pointer gap-4">
                <div className="w-[10%] flex items-center justify-center">
                    <h1 className={`px-4 py-2 rounded-full font-semibold border-2 border-gray-400 ${step === "step1" ? "bg-[#4338CA] text-white" : "text-gray-600 bg-white"}`}>1</h1>
                </div>
                <div className="w-[90%]">
                    <h1 className={`font-semibold text-lg ${step === "step1" ? "text-[#4338CA]" : "text-black"}`}>Add your medicines</h1>
                <p className={`text-md leading-6 ${step === "step1" ? "block" : "hidden"}`}>Enter your medicine catalogue — name, generic name, category, and reorder threshold. One medicine can have many batches.</p>
                </div>
            </div>
            <div onClick={()=>setstep("step2")} className="flex items-center justify-center cursor-pointer gap-4">
                <div className="w-[10%] flex items-center justify-center">
                    <h1 className={`px-4 py-2 rounded-full font-semibold border-2 border-gray-400 ${step === "step2" ? "bg-[#4338CA] text-white" : "text-gray-600 bg-white"}`}>2</h1>
                </div>
                <div className="w-[90%]">
                    <h1 className={`font-semibold text-lg ${step === "step2" ? "text-[#4338CA]" : "text-black"}`}>Record incoming batches</h1>
                <p className={`text-md leading-6 ${step === "step2" ? "block" : "hidden"}`}>Log each batch as it arrives — batch number, expiry date, quantity, unit price, and supplier. Clean split-form layout.</p>
                </div>
            </div>
            <div onClick={()=>setstep("step3")} className="flex items-center justify-center cursor-pointer gap-4">
                <div className="w-[10%] flex items-center justify-center">
                    <h1 className={`px-4 py-2 rounded-full font-semibold border-2 border-gray-400 ${step === "step3" ? "bg-[#4338CA] text-white" : "text-gray-600 bg-white"}`}>3</h1>
                </div>
                <div className="w-[90%]">
                    <h1 className={`font-semibold text-lg ${step === "step3" ? "text-[#4338CA]" : "text-black"}`}>Monitor from your dashboard</h1>
                <p className={`text-md leading-6 ${step === "step3" ? "block" : "hidden"}`}>Stock value, expiry flags, and low-stock alerts update automatically. Everything prioritised by urgency.</p>
                </div>
            </div>
            <div onClick={()=>setstep("step4")} className="flex items-center justify-center cursor-pointer gap-4">
                <div className="w-[10%] flex items-center justify-center">
                    <h1 className={`px-4 py-2 rounded-full font-semibold border-2 border-gray-400 ${step === "step4" ? "bg-[#4338CA] text-white" : "text-gray-600 bg-white"}`}>4</h1>
                </div>
                <div className="w-[90%]">
                    <h1 className={`font-semibold text-lg ${step === "step4" ? "text-[#4338CA]" : "text-black"}`}>Act on alerts early</h1>
                <p className={`text-md leading-6 ${step === "step4" ? "block" : "hidden"}`}>Red means expired. Amber means expiring within 3 months. Amber rows in inventory mean stock is below reorder level..</p>
                </div>
            </div>
        </div>
        <div className="w-1/2 h-full px-[2vw] relative">
            <div className={`absolute top-0 w-[90%] h-[60%] cursor-default px-8 py-5 flex flex-col gap-[2vh] rounded-4xl border border-gray-400 ${step === "step1" ? "block" : "hidden"}`}>
                <h1 className="font-semibold text-lg">Medicine catalogue</h1>
                <div className="flex items-center justify-between w-full bg-indigo-200/40 px-4 py-3 border border-indigo-700 rounded-xl">
                    <div>
                        <h2 className="text-indigo-700 font-semibold">Amoxicillin 500mg</h2>
                        <h3 className="text-xs text-indigo-500">Antibiotic · Reorder: 300</h3>
                    </div>
                    <h2 className="text-xs text-indigo-700 font-semibold bg-indigo-200/80 px-2 py-1 rounded-full">3 batches</h2>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                    <div>
                        <h2 className="text-black font-semibold">Metformin 500mg</h2>
                        <h3 className="text-xs">Antidiabetic · Reorder: 400</h3>
                    </div>
                    <h2 className="text-xs text-amber-700 font-semibold bg-amber-200/60 px-2 py-1 rounded-full">2 batches</h2>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                    <h2 className="font-semibold text-sm">+ Add new medicine</h2>
                    <h2 className="text-indigo-700 font-semibold">+</h2>
                </div>
            </div>
            <div className={`absolute top-10 w-[90%] h-[60%] cursor-default px-8 py-7 flex flex-col gap-[2vh] rounded-4xl border border-gray-400 ${step === "step2" ? "block" : "hidden"}`}>
                <h1 className="font-semibold text-lg">Batch entry</h1>
                <div className="flex items-center gap-3">
                    <div className="w-1/2 flex flex-col gap-1">
                        <h2 className="uppercase text-sm">Batch no.</h2>
                        <input type="text" value={"AMX-26-003"} className="text-sm text-indigo-700 border border-indigo-700 px-2 py-1 rounded-md w-[80%]"/>
                    </div>
                    <div className="w-1/2 flex flex-col gap-1">
                        <h2 className="uppercase text-sm">Expiry</h2>
                        <input type="text" value={"Jan 2028"} className="text-sm"/>
                    </div>
                </div>
                <div className="flex items-center gap-3 pb-2">
                    <div className="w-1/2 flex flex-col gap-1">
                        <h2 className="uppercase text-sm">Quantity</h2>
                        <input type="text" value={"600 units"} className="text-sm"/>
                    </div>
                    <div className="w-1/2 flex flex-col gap-1">
                        <h2 className="uppercase text-sm">Unit price</h2>
                        <input type="text" value={"₹12.50"} className="text-sm"/>
                    </div>
                </div>
                <button className="bg-[#4338CA] text-white text-sm font-semibold py-2 rounded-lg">Save batch <i className="ri-arrow-right-long-line"></i></button>
            </div>
            <div className={`absolute top-20 w-[90%] h-[60%] cursor-default px-10 py-7 flex flex-col gap-[2vh] rounded-4xl border border-gray-400 ${step === "step3" ? "block" : "hidden"}`}>
                <h1 className="font-semibold text-lg">Live dashboard</h1>
                <div className="flex items-center justify-between pb-1">
                    <div className="w-[45%] bg-indigo-100 rounded-xl text-indigo-700 px-4 py-5">
                        <h1 className="font-semibold text-xl">6</h1>
                        <h2 className="text-sm">Medicines</h2>
                    </div>
                    <div className="w-[45%] bg-red-100 rounded-xl text-red-600 px-4 py-5">
                        <h1 className="font-semibold text-xl">3</h1>
                        <h2 className="text-sm">Expiring soon</h2>
                    </div>
                </div>
                <div className="w-[45%]  px-4 py-2 bg-gray-100 rounded-xl">
                    <h2 className="text-xs">Total stock value</h2>
                    <h1 className="font-semibold text-xl">₹4,82,350</h1>
                    <h2 className="text-xs text-green-600">Auto-computed from batches</h2>
                </div>
            </div>
            <div className={`absolute top-40 w-[90%] h-[65%] cursor-default px-10 py-7 flex flex-col gap-[2vh] rounded-4xl border border-gray-400 ${step === "step4" ? "block" : "hidden"}`}>
                <h1 className="font-semibold text-lg">Colour-coded alerts</h1>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full text-amber-700 bg-amber-400/30 px-3 py-3 rounded-lg border border-amber-700">
                        <h1 className="font-semibold text-sm"><i className="ri-alarm-warning-line"></i> Batch MET-24-001 expiring in 50 days</h1>
                        <h2 className="text-xs">Metformin 500mg · 110 units</h2>
                    </div>
                    <div className="w-full text-red-700 bg-red-300/30 px-3 py-3 rounded-lg border border-red-700">
                        <h1 className="text-sm font-semibold"><i className="ri-close-line"></i> Batch AMX-24-001 — 4 days left</h1>
                        <h2 className="text-xs">Metformin 500mg · 110 units</h2>
                    </div>
                    <div className="w-full text-green-700 bg-green-400/30 px-3 py-3 rounded-lg border border-green-700">
                        <h1 className="text-sm font-semibold"><i className="ri-check-line"></i> All other batches are within date</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
