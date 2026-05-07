import AppNav from "../components/AppNav"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()
  const [range, setRange] = useState("today")

  const [medicines, setMedicines] = useState([])
  const [batches, setBatches] = useState([])

  const activityByRange = {
    today: [
      { type: "success", text: "Added 450 units - Amoxicillin (AMX-25-002)", time: "09:14 AM" },
      { type: "warning", text: "Low stock alert - Metformin 500mg", time: "08:55 AM" },
      { type: "danger", text: "Batch PCT-24-001 expired - 0 units", time: "08:10 AM" },
      { type: "success", text: "Updated reorder level - Atorvastatin 10mg", time: "07:45 AM" },
    ],
    week: [
      { type: "success", text: "Added 450 units - Amoxicillin (AMX-25-002)", time: "Today, 09:14 AM" },
      { type: "warning", text: "Low stock alert - Metformin 500mg", time: "Today, 08:55 AM" },
      { type: "danger", text: "Batch PCT-24-001 expired - 0 units", time: "Yesterday, 06:30 PM" },
      { type: "success", text: "Added 200 units - Metformin (MET-25-001)", time: "Yesterday, 03:10 PM" },
      { type: "success", text: "Added 620 units - Paracetamol (PCT-25-001)", time: "Mon, 04:25 PM" },
    ],
    month: [
      { type: "success", text: "Added 450 units - Amoxicillin (AMX-25-002)", time: "Apr 24" },
      { type: "warning", text: "Low stock alert - Metformin 500mg", time: "Apr 24" },
      { type: "danger", text: "Batch PCT-24-001 expired - 0 units", time: "Apr 23" },
      { type: "success", text: "Added 200 units - Metformin (MET-25-001)", time: "Apr 23" },
      { type: "success", text: "Adjusted stock - Omeprazole 20mg", time: "Apr 19" },
      { type: "warning", text: "Batch AZI-25-001 expiring in 52 days", time: "Apr 18" },
    ],
  }

  const stats = useMemo(() => {
    const totalMedicines = medicines.length
    const outOfStock = medicines.filter((med) => med.qty === 0).length
    const lowStock = medicines.filter((med) => med.qty > 0 && med.qty < med.reorder).length
    const inStock = medicines.filter((med) => med.qty >= med.reorder).length
    const expiringSoon = batches.filter((batch) => batch.daysToExpiry >= 0 && batch.daysToExpiry <= 90).length
    const stockValue = medicines.reduce((sum, med) => sum + med.qty * med.unitPrice, 0)

    return { totalMedicines, outOfStock, lowStock, inStock, expiringSoon, stockValue }
  }, [batches, medicines])

  const stockHealth = (med) => {
    if (med.qty === 0) return "out"
    if (med.qty < med.reorder) return "low"
    return "good"
  }

  const indicatorClass = (type) => {
    if (type === "danger") return "bg-red-500"
    if (type === "warning") return "bg-amber-500"
    return "bg-emerald-500"
  }

  const currencyCompact = new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 2 })

  useEffect(() => {

  const fetchDashboardData = async () => {

    try {

      const inventoryResponse = await fetch(
        "http://127.0.0.1:8000/inventory"
      )

      const inventoryData = await inventoryResponse.json()

      setMedicines(inventoryData)

      const batchesResponse = await fetch(
        "http://127.0.0.1:8000/batches"
      )

      const batchesData = await batchesResponse.json()

      const formattedBatches = batchesData.map((batch) => {

        const today = new Date()

        const expiry = new Date(batch.expiry_date)

        const diffTime = expiry - today

        const daysToExpiry = Math.ceil(
          diffTime / (1000 * 60 * 60 * 24)
        )

        return {
          id: batch.batch_number,
          medicine: batch.medicine_name,
          qty: batch.current_quantity,
          daysToExpiry,
        }
      })

      setBatches(formattedBatches)

    } catch (error) {
      console.log(error)
    }
  }

  fetchDashboardData()

}, [])

  return (
    <div className="h-screen w-full bg-[#F8FAFC]">
      <AppNav title={"Dashboard"} subTitle={"Overview · Main Branch"} />
      <div className="h-[90vh] w-full px-10 py-8">
        <div className="grid h-full grid-cols-12 gap-5">
          <section className="col-span-9 flex h-full flex-col gap-5">
            <div className="grid grid-cols-4 gap-4">
              <article className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <i className="ri-stack-line w-fit rounded-md bg-[#4338CA]/10 px-2 py-1 text-[#4338CA]" />
                <h2 className="mt-2 text-2xl font-bold">{stats.totalMedicines}</h2>
                <p className="text-xs text-slate-500">Total medicines</p>
                <p className="mt-2 inline-flex rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                  {stats.inStock} in stock
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <i className="ri-close-circle-line w-fit rounded-md bg-red-100 px-2 py-1 text-red-600" />
                <h2 className="mt-2 text-2xl font-bold text-red-600">{stats.outOfStock}</h2>
                <p className="text-xs text-slate-500">Out of stock</p>
                <p className="mt-2 inline-flex rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                  Reorder now
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <i className="ri-alarm-warning-line w-fit rounded-md bg-amber-100 px-2 py-1 text-amber-600" />
                <h2 className="mt-2 text-2xl font-bold text-amber-600">{stats.expiringSoon}</h2>
                <p className="text-xs text-slate-500">Expiring ≤ 90 days</p>
                <p className="mt-2 inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                  Check batches
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <i className="ri-money-rupee-circle-line w-fit rounded-md bg-emerald-100 px-2 py-1 text-emerald-600" />
                <h2 className="mt-2 text-2xl font-bold">₹{currencyCompact.format(stats.stockValue)}</h2>
                <p className="text-xs text-slate-500">Total stock value</p>
                <p className="mt-2 inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                  Auto-computed
                </p>
              </article>
            </div>

            <div className="grid grow grid-cols-5 gap-5">
              <article className="col-span-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
                  <h3 className="font-semibold text-slate-800">Inventory overview</h3>
                  <button
                    onClick={() => navigate("/app/inventory")}
                    className="text-sm font-medium text-[#4338CA] hover:underline"
                  >
                    View all <i className="ri-arrow-right-line" />
                  </button>
                </div>

                <div className="px-5 py-2">
                  {medicines.slice(0, 5).map((med) => {
                    const health = stockHealth(med)
                    const fill = Math.min(100, (med.qty / Math.max(med.reorder * 2, 1)) * 100)
                    const barColor = health === "out" ? "bg-red-500" : health === "low" ? "bg-amber-500" : "bg-emerald-500"
                    const labelClass =
                      health === "out"
                        ? "bg-red-100 text-red-700"
                        : health === "low"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-100 text-emerald-700"
                    const label = health === "out" ? "Out of stock" : health === "low" ? "Low stock" : "Good"

                    return (
                      <div key={med.name} className="grid grid-cols-12 items-center gap-3 border-b border-slate-100 py-3 last:border-b-0">
                        <div className="col-span-5">
                          <p className="text-sm font-semibold text-slate-800">{med.name}</p>
                          <p className="text-xs text-slate-500">{med.generic}</p>
                        </div>
                        <div className="col-span-3">
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                            <div className={`h-full ${barColor}`} style={{ width: `${fill}%` }} />
                          </div>
                        </div>
                        <p className={`col-span-1 text-sm font-semibold ${health === "out" ? "text-red-600" : health === "low" ? "text-amber-600" : "text-slate-700"}`}>
                          {med.qty}
                        </p>
                        <div className="col-span-3">
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${labelClass}`}>{label}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>

              <article className="col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
                  <h3 className="font-semibold text-slate-800">Alerts</h3>
                  <button
                    onClick={() => navigate("/app/alerts")}
                    className="text-sm font-medium text-[#4338CA] hover:underline"
                  >
                    Open
                  </button>
                </div>
                <div className="space-y-3 px-5 py-4">
                  {batches
                    .filter((batch) => batch.daysToExpiry <= 90)
                    .slice(0, 4)
                    .map((batch) => {
                      const isExpired = batch.daysToExpiry < 0
                      return (
                        <div
                          key={batch.id}
                          className={`rounded-xl border px-3 py-2 text-xs ${isExpired ? "border-red-200 bg-red-50 text-red-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}
                        >
                          <p className="font-semibold">{batch.id}</p>
                          <p>{batch.medicine}</p>
                          <p>{isExpired ? `${Math.abs(batch.daysToExpiry)} days past expiry` : `Expiring in ${batch.daysToExpiry} days`}</p>
                        </div>
                      )
                    })}
                </div>
              </article>
            </div>
          </section>

          <aside className="col-span-3 flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-3">
              <h3 className="font-semibold text-slate-800">Recent activity</h3>
              <div className="mt-3 flex items-center gap-2">
                {[
                  { id: "today", label: "Today" },
                  { id: "week", label: "Week" },
                  { id: "month", label: "Month" },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setRange(option.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                      range === option.id
                        ? "bg-[#4338CA] text-white"
                        : "border border-slate-300 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grow space-y-1 overflow-y-auto px-5 py-3">
              {activityByRange[range].map((activity, idx) => (
                <div key={`${activity.text}-${idx}`} className="flex gap-3 py-2">
                  <div className={`mt-1.5 h-2 w-2 rounded-full ${indicatorClass(activity.type)}`} />
                  <div>
                    <p className="text-sm text-slate-700">{activity.text}</p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 p-4">
              <button
                onClick={() => navigate("/app/reports")}
                className="w-full rounded-xl bg-[#4338CA] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3a31af]"
              >
                View reports
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
