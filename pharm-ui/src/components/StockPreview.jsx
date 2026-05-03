import { useState } from "react"
import { div } from "three/tsl"

const StockPreview = () => {

    const [msg, setmsg] = useState(false)

    const entryAdded = () =>{
        setmsg(true)
    }

    setTimeout(()=>{
        setmsg(false)
    },3000)

  return (
    <div className="w-full h-full px-10 py-4 flex flex-col justify-between">
        {msg && (
            <div className="w-full px-6 py-2 flex items-center gap-2 border border-green-600 rounded-md bg-green-300/10 mt-2">
                <h2 className="text-sm text-green-600"><i className="ri-check-fill"></i> Stock entry recorded successfully!</h2>
            </div>
        )}
        <div className="w-full h-[70%] flex items-center gap-8 mt-5">
      <div className="w-1/2 h-full px-8 py-5 flex flex-col gap-2 border border-gray-400/60 rounded-3xl">
        <h1 className="text-gray-900 font-semibold"><i className="ri-capsule-fill text-indigo-700"></i> Medicine details</h1>
        <div className="flex flex-col gap-3">
            <label className="uppercase text-xs pt-2 text-gray-900 font-semibold" htmlFor="meds">Select existing medicine</label>
            <select name="meds" id="meds" className="text-xs outline-none text-gray-700">
                <option value="">— Choose —</option>
                <option value="amoxicillin">Amoxicillin 500mg</option>
                <option value="paracetamol">Paracetamol 650mg</option>
                <option value="metformin">Metformin 500mg</option>
                <option value="atorvastatin">Atorvastatin 10mg</option>
                <option value="azithromycin">Azithromycin 250mg</option>
                <option value="omeprazole">Omeprazole 20mg</option>
            </select>
        </div>
        <h2 className="text-center text-xs text-gray-700">— or add new —</h2>
        <h2 className="uppercase text-xs text-gray-900 font-semibold">Medicine name</h2>
        <input className="text-xs outline-none pb-2" type="text" placeholder="e.g. Ibuprofen 400mg" />
        <h2 className="uppercase text-xs text-gray-900 font-semibold">Generic name</h2>
        <input className="text-xs outline-none pb-2" type="text" placeholder="e.g. Ibuprofen"/>
        <div className="flex items-center gap-8">
            <div className="w-1/2 flex flex-col gap-2">
                <h2 className="uppercase text-xs text-gray-900 font-semibold">Category</h2>
                <select className="text-xs text-gray-700 outline-none" name="ctg" id="ctg">
                    <option value="antibiotic">Antibiotic</option>
                    <option value="analgesic">Analgesic</option>
                    <option value="antidiabetic">Antidiabetic</option>
                    <option value="statin">Statin</option>
                    <option value="ppi">PPI</option>
                </select>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
                <h2 className="uppercase text-xs text-gray-900 font-semibold">Reorder level</h2>
                <input type="number" placeholder="100" className="outline-none text-xs" />
            </div>
        </div>
      </div>

      <div className="w-1/2 h-full px-8 py-5 flex flex-col gap-2 border border-gray-400/60 rounded-3xl">
        <h1 className="text-gray-900 font-semibold"><i className="ri-hexagon-line text-indigo-700"></i> Batch details</h1>
        <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Batch number</h2>
        <input className="text-xs outline-none pb-2" type="text" placeholder="r.g. AMX-26-003" />
        <div className="flex items-center gap-8">
            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Manufacture date</h2>
                <input className="w-full text-xs outline-none pb-2 text-gray-500" type="date" />
            </div>
            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Expiry date</h2>
                <input className="w-full text-xs outline-none pb-2 text-gray-500" type="date" />
            </div>
        </div>
        <div className="flex items-center gap-8">
            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Quantity</h2>
                <input className="w-full text-xs outline-none pb-2 text-gray-500" type="number" placeholder="500" />
            </div>
            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Unit price (₹)</h2>
                <input className="w-full text-xs outline-none pb-2 text-gray-500" type="number" placeholder="12.50" />
            </div>
        </div>
        <div className="flex items-center gap-8">
            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Supplier / Vendor</h2>
                <input className="text-xs outline-none pb-2" type="text" placeholder="e.g. Sun Phaarma Ltd." />
            </div>

            <div className="w-1/2">
                <h2 className="uppercase text-xs pt-2 text-gray-900 font-semibold">Invoice number</h2>
                <input className="text-xs outline-none pb-2" type="text" placeholder="e.g. INV-2026-04884" />
            </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[10%] flex items-center justify-end py-8 gap-4">
        <button className="bg-[#4338CA] text-white text-sm font-semibold py-1 px-4 rounded-md">Reset</button>
        <button 
        onClick={()=>{setmsg(true)}}
        className="bg-[#4338CA] text-white text-sm font-semibold py-1 px-4 rounded-md">Record stock entry</button>
      </div>
    </div>
  )
}

export default StockPreview
