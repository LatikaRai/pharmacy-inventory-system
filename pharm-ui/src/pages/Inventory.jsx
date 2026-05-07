import AppNav from "../components/AppNav"
import { useMemo, useState, useEffect  } from "react"
import { useNavigate } from "react-router-dom"

const Inventory = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState("all")
  const [query, setQuery] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [editDraft, setEditDraft] = useState(null)

  const [medicines, setMedicines] = useState([])

  const getStatus = (med) => {
    if (med.qty === 0) return "out"
    if (med.qty < med.reorder) return "low"
    return "in"
  }

  const statusPillClass = (status) => {
    if (status === "out") return "bg-red-100 text-red-700"
    if (status === "low") return "bg-amber-100 text-amber-700"
    return "bg-emerald-100 text-emerald-700"
  }

  const statusLabel = (status) => {
    if (status === "out") return "Out of stock"
    if (status === "low") return "Low stock"
    return "In stock"
  }

  const getCategoryStyle = (category) => {
    switch (category) {
      case "Antibiotic":
        return "bg-indigo-100 text-indigo-700"
      case "Analgesic":
        return "bg-emerald-100 text-emerald-700"
      case "Antidiabetic":
        return "bg-violet-100 text-violet-700"
      case "Statin":
        return "bg-amber-100 text-amber-700"
      case "PPI":
        return "bg-slate-200 text-slate-700"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  const filteredMedicines = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return medicines.filter((med) => {
      const status = getStatus(med)
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "low" && status === "low") ||
        (activeFilter === "out" && status === "out")

      const matchesQuery =
        !normalizedQuery ||
        med.name.toLowerCase().includes(normalizedQuery) ||
        med.generic.toLowerCase().includes(normalizedQuery) ||
        med.category.toLowerCase().includes(normalizedQuery)

      return matchesFilter && matchesQuery
    })
  }, [activeFilter, medicines, query])

  const handleStartEdit = (med) => {
    setEditingId(med.id)
    setEditDraft({
      name: med.name,
      generic: med.generic,
      category: med.category,
      qty: med.qty,
      reorder: med.reorder,
      batches: med.batches,
    })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditDraft(null)
  }

  const handleSaveEdit = () => {
    if (!editDraft) return

    setMedicines((prev) =>
      prev.map((med) =>
        med.id === editingId
          ? {
              ...med,
              name: editDraft.name.trim() || med.name,
              generic: editDraft.generic.trim() || med.generic,
              category: editDraft.category,
              qty: Number(editDraft.qty) || 0,
              reorder: Number(editDraft.reorder) || 0,
              batches: Math.max(1, Number(editDraft.batches) || 1),
            }
          : med
      )
    )

    setEditingId(null)
    setEditDraft(null)
  }

  const filterButtonClass = (filterKey) =>
    `rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
      activeFilter === filterKey
        ? "bg-[#4338CA] text-white"
        : "border border-slate-300 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-700"
    }
    `

    // fetch inventory
    useEffect(() => {

  const fetchInventory = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/inventory"
      )

      const data = await response.json()

      setMedicines(data)

    } catch (error) {
      console.log(error)
    }
  }

  fetchInventory()

}, [])

  return (
    <div className="h-screen max-w-full bg-[#F8FAFC]">
      <AppNav title={"Inventory Master"} subTitle={"Medicines · All stock"} />
      <div className="h-[90vh] w-full px-10 py-8">
        <div className="h-full w-full rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-7 py-4">
            <div className="flex items-center gap-2 text-slate-700">
              <i className="ri-capsule-line text-lg" />
              <h1 className="font-semibold">{filteredMedicines.length} medicines</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
                <i className="ri-search-line text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-52 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search medicines..."
                />
              </div>

              <button onClick={() => setActiveFilter("all")} className={filterButtonClass("all")}>All</button>
              <button onClick={() => setActiveFilter("low")} className={filterButtonClass("low")}>Low stock</button>
              <button onClick={() => setActiveFilter("out")} className={filterButtonClass("out")}>Out of stock</button>

              <button
                onClick={() => navigate("/app/addstock")}
                className="rounded-xl bg-[#4338CA] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#3a31af]"
              >
                <i className="ri-add-line mr-1" />
                Add medicine
              </button>
            </div>
          </div>

          <div className="h-[calc(100%-64px)] overflow-y-auto overflow-x-auto">
            <table className="min-w-full w-full table-fixed">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="w-[16%] px-5 py-4 text-left">Medicine</th>
                  <th className="w-[16%] px-5 py-4 text-left">Generic name</th>
                  <th className="w-[12%] px-5 py-4 text-left">Category</th>
                  <th className="w-[10%] px-5 py-4 text-left">Total qty</th>
                  <th className="w-[10%] px-5 py-4 text-left">Reorder lvl</th>
                  <th className="w-[12%] px-5 py-4 text-left">Batches</th>
                  <th className="w-[12%] px-5 py-4 text-left">Status</th>
                  <th className="w-[8%] px-5 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.map((med) => {
                  const isEditing = editingId === med.id
                  const status = getStatus(med)
                  const isWarningRow = status === "low" || status === "out"

                  return (
                    <tr
                      key={med.id}
                      className={`border-t border-slate-100 text-sm text-slate-700 ${isWarningRow ? "bg-amber-50/70" : "bg-white"}`}
                    >
                      <td className="px-5 py-5">
                        {isEditing ? (
                          <input
                            value={editDraft?.name ?? ""}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, name: event.target.value }))}
                            className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-[#4338CA]"
                          />
                        ) : (
                          <p className="font-semibold text-slate-800">{med.name}</p>
                        )}
                        {!isEditing && status !== "in" && (
                          <p className="mt-1 text-xs font-medium text-amber-700">Below reorder level</p>
                        )}
                      </td>
                      <td className="px-5 py-5">
                        {isEditing ? (
                          <input
                            value={editDraft?.generic ?? ""}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, generic: event.target.value }))}
                            className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-[#4338CA]"
                          />
                        ) : (
                          med.generic
                        )}
                      </td>
                      <td className="px-5 py-5">
                        {isEditing ? (
                          <select
                            value={editDraft?.category ?? med.category}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, category: event.target.value }))}
                            className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-[#4338CA]"
                          >
                            <option>Antibiotic</option>
                            <option>Analgesic</option>
                            <option>Antidiabetic</option>
                            <option>Statin</option>
                            <option>PPI</option>
                          </select>
                        ) : (
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getCategoryStyle(med.category)}`}>
                            {med.category}
                          </span>
                        )}
                      </td>
                      <td className={`px-5 py-5 font-semibold ${status === "out" ? "text-red-600" : status === "low" ? "text-amber-600" : "text-slate-700"}`}>
                        {isEditing ? (
                          <input
                            type="number"
                            min="0"
                            value={editDraft?.qty ?? med.qty}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, qty: event.target.value }))}
                            className="w-24 rounded-md border border-slate-300 px-2 py-1 text-sm font-normal text-slate-700 outline-none focus:border-[#4338CA]"
                          />
                        ) : (
                          med.qty.toLocaleString()
                        )}
                      </td>
                      <td className="px-5 py-5">
                        {isEditing ? (
                          <input
                            type="number"
                            min="0"
                            value={editDraft?.reorder ?? med.reorder}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, reorder: event.target.value }))}
                            className="w-24 rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-[#4338CA]"
                          />
                        ) : (
                          med.reorder
                        )}
                      </td>
                      <td className="px-5 py-5">
                        {isEditing ? (
                          <input
                            type="number"
                            min="1"
                            value={editDraft?.batches ?? med.batches}
                            onChange={(event) => setEditDraft((prev) => ({ ...prev, batches: event.target.value }))}
                            className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm outline-none focus:border-[#4338CA]"
                          />
                        ) : (
                          <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                            {med.batches} {med.batches > 1 ? "batches" : "batch"}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-5">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusPillClass(status)}`}>
                          {statusLabel(status)}
                        </span>
                      </td>
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-2">
                          {isEditing ? (
                            <>
                              <button
                                onClick={handleSaveEdit}
                                className="rounded-md bg-[#4338CA] px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-[#3a31af]"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleStartEdit(med)}
                                className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                              >
                                Edit
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {filteredMedicines.length === 0 && (
              <div className="flex h-48 items-center justify-center text-sm text-slate-500">
                No medicines found for this filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
