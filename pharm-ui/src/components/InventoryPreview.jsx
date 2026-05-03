
const InventoryPreview = ({ onNavigateToBatches }) => {
  const medicines = [
  {
    name: "Amoxicillin 500mg",
    generic: "Amoxicillin Trihydrate",
    category: "Antibiotic",
    qty: 1250,
    reorder: 300,
  },
  {
    name: "Paracetamol 650mg",
    generic: "Acetaminophen",
    category: "Analgesic",
    qty: 0,
    reorder: 500,
  },
  {
    name: "Metformin 500mg",
    generic: "Metformin HCl",
    category: "Antidiabetic",
    qty: 310,
    reorder: 400,
  },
  {
    name: "Atorvastatin 10mg",
    generic: "Atorvastatin Calcium",
    category: "Statin",
    qty: 310,
    reorder: 200,
  },
  {
    name: "Azithromycin 250mg",
    generic: "Azithromycin Dihydrate",
    category: "Antibiotic",
    qty: 495,
    reorder: 150,
  },
  {
    name: "Omeprazole 20mg",
    generic: "Omeprazole Magnesium",
    category: "PPI",
    qty: 940,
    reorder: 250,
  },
  ];

  const getStatus = (med) =>{
    if (med.qty === 0){
      return <span className="text-red-700 py-1 px-3 block font-semibold text-xs bg-red-500/20 rounded-full">Out of stock</span>
    }
    if (med.qty < med.reorder){
      return <span className="text-amber-700 py-1 px-3 block font-semibold text-xs bg-amber-500/20 rounded-full">Low stock</span>
    }
    else {
      return <span className="text-green-700 py-1 px-3 block font-semibold text-xs bg-green-500/20 rounded-full">In stock</span>
    }
  }

  const getCategoryStyle = (category)=>{
    switch(category){
      case "Antibiotic":
        return "bg-indigo-500/20 text-indigo-700";
      case "Analgesic":
        return "bg-green-500/20 text-green-700";
      case "Antidiabetic":
        return "bg-violet-500/20 text-violet-700";
      case "Statin":
        return "bg-amber-500/20 text-amber-700";
      case "PPI":
        return "bg-gray-500/20 text-gray-700";
    }
  }

  return (
    <div className="w-full h-screen bg-[#F8FAFC]">
      <div className="w-full flex items-center justify-between px-10 py-4 text-sm">
        <h2 className="font-semibold">6 medicines registered</h2>
        <div className="flex items-center gap-3 text-xs">
          <input 
          type="search" 
          className="bg-[#F8FAFC]"
          placeholder="Search medicines..."/>
          <button className="bg-[#4338CA] rounded-md text-white py-1 px-2"><i className="ri-add-line"></i> Add medicine</button>
        </div>
      </div>
      <table className="w-full bg-white table-fixed">
        <thead className="px-10 py-2">
          <tr className="uppercase text-xs text-gray-700">
            <th className="w-[20%] px-10 pb-4 text-left">Medicine</th>
            <th className="w-[15%] px-10 pb-4 text-left">Generic name</th>
            <th className="w-[12%] px-10 pb-4 text-left">Category</th>
            <th className="w-[10%] px-10 pb-4 text-left">Total qty</th>
            <th className="w-[12%] px-10 pb-4 text-left">Reorder lvl</th>
            <th className="w-[14%] px-10 pb-4 text-left">Status</th>
            <th className="w-[10%] px-10 pb-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="w-full gap-8">
          {medicines.map((med,idx)=>{
            return <tr key={idx} className={`text-[0.83rem] ${med.qty === 0 || med.qty < med.reorder? "hover:bg-amber-300/30": ""}`}>
              <td className="py-5 px-10 font-semibold text-gray-600 text-[0.86rem]">{med.name}</td>
              <td className="text-left px-10">{med.generic}</td>
              <td className="px-10" >
                <span className={`block px-3 py-1 font-semibold rounded-full text-xs ${getCategoryStyle(med.category)}`}>{med.category}</span>
              </td>
              <td className={`px-10 font-semibold text-[0.85rem] ${med.qty === 0  ? " text-red-600": med.qty < med.reorder ? "text-amber-600": "text-gray-600"}`}>{med.qty}</td>
              <td className="px-10">{med.reorder}</td>
              <td className="px-10">{getStatus(med)}</td>
              <td className="text-left px-1">
                <button 
                onClick={()=>{onNavigateToBatches?.()}}
                className="text-[#4338CA] border py-1 px-2 rounded-md ">View batches</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default InventoryPreview
