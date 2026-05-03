import { useState } from "react";

const BatchPreview = () => {

    const [activeBtn, setActiveBtn] = useState("all")

    const batches = [
  {
    batchNo: "AMX-24-001",
    medicine: "Amoxicillin 500mg",
    expiry: "06 Apr 2026",
    expiryInfo: "(4d past)",
    qty: 80,
    unitPrice: 12.5,
    value: 1000,
    status: "Expired",
  },
  {
    batchNo: "AMX-25-002",
    medicine: "Amoxicillin 500mg",
    expiry: "15 Jan 2027",
    expiryInfo: "",
    qty: 450,
    unitPrice: 11.0,
    value: 4950,
    status: "Good",
  },
  {
    batchNo: "PCT-24-001",
    medicine: "Paracetamol 650mg",
    expiry: "20 Mar 2026",
    expiryInfo: "(21d past)",
    qty: 0,
    unitPrice: 3.5,
    value: 0,
    status: "Expired",
  },
  {
    batchNo: "PCT-25-001",
    medicine: "Paracetamol 650mg",
    expiry: "01 May 2027",
    expiryInfo: "",
    qty: 620,
    unitPrice: 3.75,
    value: 2325,
    status: "Good",
  },
  {
    batchNo: "MET-24-001",
    medicine: "Metformin 500mg",
    expiry: "30 May 2026",
    expiryInfo: "(50d)",
    qty: 110,
    unitPrice: 8.0,
    value: 880,
    status: "Expiring soon",
  },
  {
    batchNo: "MET-25-001",
    medicine: "Metformin 500mg",
    expiry: "10 Aug 2027",
    expiryInfo: "",
    qty: 200,
    unitPrice: 8.25,
    value: 1650,
    status: "Good",
  },
  {
    batchNo: "ATV-25-001",
    medicine: "Atorvastatin 10mg",
    expiry: "15 Jun 2026",
    expiryInfo: "(66d)",
    qty: 190,
    unitPrice: 22.0,
    value: 4180,
    status: "Expiring soon",
  },
  {
    batchNo: "AZT-25-001",
    medicine: "Azithromycin 250mg",
    expiry: "01 Jun 2026",
    expiryInfo: "(52d)",
    qty: 170,
    unitPrice: 34.0,
    value: 5780,
    status: "Expiring soon",
  },
  {
    batchNo: "OMP-25-001",
    medicine: "Omeprazole 20mg",
    expiry: "20 Mar 2027",
    expiryInfo: "",
    qty: 390,
    unitPrice: 15.5,
    value: 6045,
    status: "Good",
  },
  {
    batchNo: "ATV-25-002",
    medicine: "Atorvastatin 10mg",
    expiry: "01 Nov 2027",
    expiryInfo: "",
    qty: 120,
    unitPrice: 21.5,
    value: 2580,
    status: "Good",
  },
];

    const filteredBatches = batches.filter((batch)=>{
        if (activeBtn === "expiring") return batch.status === "Expiring soon";
        if (activeBtn === "expired") return batch.status === "Expired";
        return true;
    })

    const setStatus = (setStatus)=>{
        if (setStatus === "Good"){
            return <span className="bg-green-600/10 text-xs text-green-700 px-2 py-[0.2vw] font-semibold block rounded-full">Good</span>
        }
        if (setStatus === "Expiring soon"){
            return <span className="bg-amber-600/10 text-xs text-amber-700 px-2 py-[0.2vw] font-semibold block rounded-full">Expiring soon</span>
        }
        else {
            return <span className="bg-red-600/10 text-xs text-red-700 px-2 block py-[0.2vw] font-semibold rounded-full">Expired</span>
        }
    }

  return (
    <div className="w-full h-fit">
      <div className="w-full flex items-center justify-between px-12">
        <h1 className="text-sm font-semibold text-gray-700">10 batches tracked</h1>
        <div className="text-xs flex items-center gap-3">
            <button 
            onClick={()=>setActiveBtn("all")} 
            className={`${activeBtn === "all"? "bg-indigo-700 text-white": "border-indigo-700 text-indigo-700"} font-semibold border px-2 py-1 rounded-md`}>All</button>
            <button
            onClick={()=>setActiveBtn("expiring")} 
            className={`${activeBtn === "expiring"? "bg-indigo-700 text-white": "border-amber-600 text-amber-600"} font-semibold border  px-2 py-1 rounded-md`}>Expiring soon</button>
            <button
            onClick={()=>setActiveBtn("expired")}
            className={`${activeBtn === "expired"? "bg-indigo-700 text-white": "border-red-600 text-red-600"} font-semibold border px-2 py-1 rounded-md`}>Expired</button>
        </div>
      </div>
      <table className="w-full text-xs">
        <thead>
            <tr>
                <th className="w-[14%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Batch no.</th>
                <th className="w-[15%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Medicine</th>
                <th className="w-[14%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Expiry date</th>
                <th className="w-[8%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Qty</th>
                <th className="w-[14%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Unit price</th>
                <th className="w-[14%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Batch value</th>
                <th className="w-[16%] text-left uppercase text-gray-700 py-2 pt-6 px-12">Status</th>
            </tr>
        </thead>
        <tbody>
            {filteredBatches.map((batch,idx)=>{
                return <tr key={idx} className="text-sm">
                    <td className="px-10 py-2 ">
                        <div className="bg-[#F1F5F9] text-xs py-1 px-2 rounded-full text-center">{batch.batchNo}</div>
                    </td>
                    <td className="pl-12">{batch.medicine}</td>
                    <td className="pl-12">{batch.expiry} {batch.expiryInfo}</td>
                    <td className="pl-12">{batch.qty}</td>
                    <td className="px-12">₹{batch.unitPrice}</td>
                    <td className="pl-12">₹{batch.value}</td>
                    <td className="px-12">
                        <span className="block">{setStatus(batch.status)}</span>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default BatchPreview
