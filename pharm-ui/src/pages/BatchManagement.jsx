import AppNav from "../components/AppNav"
import { useMemo, useState } from "react"

const BatchManagement = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [query, setQuery] = useState("")

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

  const getExpiryStatus = (daysToExpiry) => {
    if (daysToExpiry < 0) return "expired"
    if (daysToExpiry <= 90) return "expiring"
    return "good"
  }

  const statusLabel = (status) => {
    if (status === "expired") return "Expired"
    if (status === "expiring") return "Expiring soon"
    return "Good"
  }

  const statusPillClass = (status) => {
    if (status === "expired") return "bg-red-100 text-red-700"
    if (status === "expiring") return "bg-amber-100 text-amber-700"
    return "bg-emerald-100 text-emerald-700"
  }

  const rowTintClass = (status) => {
    if (status === "expired") return "bg-red-50/70"
    if (status === "expiring") return "bg-amber-50/70"
    return "bg-white"
  }

  const expiryTextClass = (status) => {
    if (status === "expired") return "text-red-700"
    if (status === "expiring") return "text-amber-700"
    return "text-slate-700"
  }

  const formatDateHint = (daysToExpiry) => {
    if (daysToExpiry < 0) return `${Math.abs(daysToExpiry)}d past`
    return `${daysToExpiry}d`
  }

  const filteredBatches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return batches.filter((batch) => {
      const status = getExpiryStatus(batch.daysToExpiry)
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "expiring" && status === "expiring") ||
        (activeFilter === "expired" && status === "expired") ||
        (activeFilter === "good" && status === "good")

      const matchesQuery =
        !normalizedQuery ||
        batch.id.toLowerCase().includes(normalizedQuery) ||
        batch.medicine.toLowerCase().includes(normalizedQuery)

      return matchesFilter && matchesQuery
    })
  }, [activeFilter, batches, query])

  const filterButtonClass = (filterKey) =>
    `rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
      activeFilter === filterKey
        ? "bg-[#4338CA] text-white"
        : "border border-slate-300 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-700"
    }`

  return (
    <div className="h-screen max-w-full bg-[#F8FAFC]">
      <AppNav title={"Batch Management"} subTitle={"Batches · Expiry tracking"} />
      <div className="h-[90vh] w-full px-10 py-8">
        <div className="h-full w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-7 py-4">
            <div className="flex items-center gap-2 text-slate-700">
              <i className="ri-inbox-archive-line text-lg" />
              <h1 className="font-semibold">{filteredBatches.length} batches</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
                <i className="ri-search-line text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-44 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search batches..."
                />
              </div>

              <button onClick={() => setActiveFilter("all")} className={filterButtonClass("all")}>All</button>
              <button onClick={() => setActiveFilter("expiring")} className={filterButtonClass("expiring")}>Expiring soon</button>
              <button onClick={() => setActiveFilter("expired")} className={filterButtonClass("expired")}>Expired</button>
              <button onClick={() => setActiveFilter("good")} className={filterButtonClass("good")}>Good</button>
            </div>
          </div>

          <div className="h-[calc(100%-64px)] overflow-y-auto overflow-x-auto">
            <table className="min-w-285 w-full table-fixed">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="w-[10%] px-4 py-4 text-left">Batch no.</th>
                  <th className="w-[14%] px-4 py-4 text-left">Medicine</th>
                  <th className="w-[14%] px-4 py-4 text-left">Manufacture date</th>
                  <th className="w-[12%] px-4 py-4 text-left">Expiry date</th>
                  <th className="w-[8%] px-4 py-4 text-left">Qty</th>
                  <th className="w-[10%] px-4 py-4 text-left">Unit price</th>
                  <th className="w-[10%] px-4 py-4 text-left">Batch value</th>
                  <th className="w-[12%] px-4 py-4 text-left">Status</th>
                  <th className="w-[10%] px-4 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBatches.map((batch) => {
                  const status = getExpiryStatus(batch.daysToExpiry)
                  const batchValue = batch.qty * batch.unitPrice
                  const isExpired = status === "expired"

                  return (
                    <tr key={batch.id} className={`border-t border-slate-100 text-sm text-slate-700 ${rowTintClass(status)}`}>
                      <td className="px-4 py-4">
                        <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-700">{batch.id}</span>
                      </td>
                      <td className="px-4 py-4 font-semibold text-slate-800">{batch.medicine}</td>
                      <td className="px-4 py-4 text-slate-500">{batch.mfgDate}</td>
                      <td className="px-4 py-4">
                        <p className={`font-semibold ${expiryTextClass(status)}`}>{batch.expiryDate}</p>
                        <p className={`text-xs ${expiryTextClass(status)}`}>({formatDateHint(batch.daysToExpiry)})</p>
                      </td>
                      <td className="px-4 py-4">{batch.qty}</td>
                      <td className="px-4 py-4">₹{batch.unitPrice.toFixed(2)}</td>
                      <td className="px-4 py-4 font-semibold">₹{batchValue.toLocaleString()}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusPillClass(status)}`}>
                          {statusLabel(status)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          className={`rounded-md border px-3 py-1 text-xs font-semibold transition-colors ${
                            isExpired
                              ? "border-red-200 bg-red-100 text-red-700 hover:bg-red-200/70"
                              : "border-slate-300 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {isExpired ? "Remove" : "Edit"}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {filteredBatches.length === 0 && (
              <div className="flex h-48 items-center justify-center text-sm text-slate-500">
                No batches found for this filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BatchManagement
