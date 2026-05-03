import { div } from "three/tsl"
import AppNav from "../components/AppNav"
import { useState } from "react"

const Alerts = () => {

   const batches = [
    {
      id: "AMX-24-001",
      medicine: "Amoxicillin 500mg",
      mfgDate: "01 Apr 2024",
      expiryDate: "06 Apr 2026",
      daysToExpiry: -4,
      qty: 80,
      unitPrice: 12.5,
    },
    {
      id: "AMX-25-002",
      medicine: "Amoxicillin 500mg",
      mfgDate: "01 Jun 2025",
      expiryDate: "15 Jan 2027",
      daysToExpiry: 289,
      qty: 450,
      unitPrice: 11,
    },
    {
      id: "PCT-24-001",
      medicine: "Paracetamol 650mg",
      mfgDate: "01 Mar 2024",
      expiryDate: "20 Mar 2026",
      daysToExpiry: -21,
      qty: 0,
      unitPrice: 3.5,
    },
    {
      id: "PCT-25-001",
      medicine: "Paracetamol 650mg",
      mfgDate: "01 May 2025",
      expiryDate: "01 May 2027",
      daysToExpiry: 395,
      qty: 620,
      unitPrice: 3.75,
    },
    {
      id: "MET-24-001",
      medicine: "Metformin 500mg",
      mfgDate: "01 May 2024",
      expiryDate: "30 May 2026",
      daysToExpiry: 50,
      qty: 110,
      unitPrice: 8,
    },
    {
      id: "MET-25-001",
      medicine: "Metformin 500mg",
      mfgDate: "01 Aug 2025",
      expiryDate: "10 Aug 2027",
      daysToExpiry: 496,
      qty: 200,
      unitPrice: 8.25,
    },
    {
      id: "ATV-25-001",
      medicine: "Atorvastatin 10mg",
      mfgDate: "15 Jun 2025",
      expiryDate: "15 Jun 2026",
      daysToExpiry: 66,
      qty: 190,
      unitPrice: 22,
    },
    {
      id: "AZI-25-001",
      medicine: "Azithromycin 250mg",
      mfgDate: "01 Jun 2025",
      expiryDate: "01 Jun 2026",
      daysToExpiry: 52,
      qty: 170,
      unitPrice: 34,
    },
    {
      id: "OMP-25-001",
      medicine: "Omeprazole 20mg",
      mfgDate: "20 Mar 2025",
      expiryDate: "20 Mar 2027",
      daysToExpiry: 353,
      qty: 390,
      unitPrice: 15.5,
    },
  ]

  const getBatchStatus = (batch)=>{
    if(batch.daysToExpiry < 0){
      return {
        status : 'Expired',
        color : 'bg-red-600',
        bg : 'bg-red-300/30',
        text : 'text-red-700',
        msg : `Batch ${batch.id} has expired`
      }
    }
    if(batch.daysToExpiry <= 90){
      return {
        status : 'Expiring',
        color : 'bg-amber-500',
        bg : 'bg-amber-300/40',
        text : 'text-amber-700',
        msg : `Batch ${batch.id} expiring in ${Math.abs(batch.daysToExpiry)} days`
      }
    }
    return {
      status : 'Safe'
    }
  }

  const [alerts, setAlerts] = useState(batches.filter(batch=> batch.daysToExpiry <= 90))

  const clearAlert = (batchid)=>{
    return setAlerts(prev => prev.filter(batch=> batch.id !== batchid))
  }

  return (
    <div>
      <AppNav title={'Alerts'} subTitle={'Notifications · Active alerts'} alerts={alerts} />
      <div className="h-auto w-full px-10 py-8">
        <div className="w-full h-full rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 shadow-xs border-b border-slate-200">
            <div className="flex items-center gap-3">
              <i className="ri-notification-3-line"></i>
              <h2 className="font-semibold text-md">Active alerts</h2>
            </div>
          </div>
          {/* alerts */}
          {
           alert.map((batch,idx)=>{
            const info = getBatchStatus(batch)
            return <div key={batch.id} className={`w-full flex items-center justify-between border-b-2 border-slate-100 p-6 ${info.bg}`}>
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${info.color}`}></div>
                <div>
                  <h1 className={`font-semibold text-lg ${info.text}`}>{info.msg}</h1>
                  <p className="text-slate-700 text-sm">{batch.medicine} . {batch.qty} units . Expires {batch.expiryDate}.</p>
                </div>
              </div>
              <button
              onClick={()=>clearAlert(batch.id)} 
              className="px-2 py-1 border border-white rounded-lg shadow-sm text-gray-600 text-sm">Dismiss</button>
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Alerts
