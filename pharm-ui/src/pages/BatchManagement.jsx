import AppNav from "../components/AppNav"
import { useEffect, useMemo, useState } from "react"

const BatchManagement = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [query, setQuery] = useState("")

  // for editing batch
  const [showModal, setShowModal] = useState(false)

  const [editForm, setEditForm] = useState({
    expiryDate: "",
    qty: "",
    unitPrice: "",
  })

const [selectedBatch, setSelectedBatch] = useState(null)

  const [batches, setBatches] = useState([])
  const [loading, setLoading] = useState(true)

  // batch status
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

  // expiry date
  const formatDateHint = (daysToExpiry) => {
    if (daysToExpiry < 0) return `${Math.abs(daysToExpiry)}d past`
    return `${daysToExpiry}d`
  }

// fetching data from backend
  useEffect(() => {
  const fetchBatches = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/batches")

      const data = await response.json()

      const formattedData = data.map((batch) => {
        const expiry = new Date(batch.expiry_date)
        const today = new Date()

        const diffTime = expiry - today

        const daysToExpiry = Math.ceil(
          diffTime / (1000 * 60 * 60 * 24)
        )

        return {
          dbId: batch.id,
          id: batch.batch_number,
          medicine: batch.medicine_name ,
          mfgDate: "N/A",
          expiryDate: batch.expiry_date,
          daysToExpiry,
          qty: batch.current_quantity,
          unitPrice: batch.price,
}
      })

      setBatches(formattedData)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  fetchBatches()
}, [])

// filtering out batches
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

    // deleting a batch
  const deleteBatch = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/batches/${id}`, {
        method: "DELETE",
      })

      setBatches((prev) =>
        prev.filter((batch) => batch.dbId !== id)
      )

    } catch (error) {
      console.log(error)
    }
  }

  // editing a batch
  const editBatch = (batch) => {
  setSelectedBatch(batch)

  setEditForm({
    expiryDate: batch.expiryDate,
    qty: batch.qty,
    unitPrice: batch.unitPrice,
  })

  setShowModal(true)
}

  const saveEdit = async () => {

  try {

    await fetch(
      `http://127.0.0.1:8000/batches/${selectedBatch.dbId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          expiry_date: editForm.expiryDate,
          current_quantity: Number(editForm.qty),
          price: Number(editForm.unitPrice),
        }),
      }
    )

    setBatches((prev) =>
      prev.map((batch) =>
        batch.dbId === selectedBatch.dbId
          ? {
              ...batch,
              expiryDate: editForm.expiryDate,
              qty: Number(editForm.qty),
              unitPrice: Number(editForm.unitPrice),
            }
          : batch
      )
    )

    setShowModal(false)

  } catch (error) {
    console.log(error)
  }
} 

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
            <table className="w-full table-fixed">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="w-[10%] px-4 py-4 text-left">Batch no.</th>
                  <th className="w-[14%] px-4 py-4 text-left">Medicine</th>
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
                          onClick={() =>
                            isExpired
                              ? deleteBatch(batch.dbId)
                              : editBatch(batch)
                          }
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
      {
  showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="w-[400px] rounded-2xl bg-white p-6">

        <h1 className="mb-5 text-xl font-semibold">
          Edit Batch
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="date"
            value={editForm.expiryDate}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                expiryDate: e.target.value,
              })
            }
            className="rounded-lg border p-2"
          />

          <input
            type="number"
            value={editForm.qty}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                qty: e.target.value,
              })
            }
            className="rounded-lg border p-2"
            placeholder="Quantity"
          />

          <input
            type="number"
            value={editForm.unitPrice}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                unitPrice: e.target.value,
              })
            }
            className="rounded-lg border p-2"
            placeholder="Price"
          />

          <div className="mt-4 flex justify-end gap-3">

            <button
              onClick={() => setShowModal(false)}
              className="rounded-lg border px-4 py-2"
            >
              Cancel
            </button>

            <button
              onClick={saveEdit}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
            >
              Save
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}
    </div>
  )
}

export default BatchManagement
