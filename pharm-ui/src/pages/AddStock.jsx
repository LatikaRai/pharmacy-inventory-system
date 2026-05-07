import AppNav from "../components/AppNav"
import { useState, useEffect } from "react"

const AddStock = () => {
  const initialForm = {
    medicineId: "",
    medicineName: "",
    genericName: "",
    category: "Antibiotic",
    reorderLevel: "",
    batchNumber: "",
    manufactureDate: "",
    expiryDate: "",
    quantity: "",
    unitPrice: "",
    supplier: "",
    invoiceNumber: "",
    notes: "",
  }

  const [form, setForm] = useState(initialForm)

  const [medicineOptions, setMedicineOptions] = useState([])

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleMedicineSelect = (selectedId) => {
    if (!selectedId) {
      setForm((prev) => ({
        ...prev,
        medicineId: "",
        medicineName: "",
        genericName: "",
        category: "Antibiotic",
        reorderLevel: "",
      }))
      return
    }

    const selected = medicineOptions.find((option) => option.id === Number(selectedId))
    if (!selected) return

    setForm((prev) => ({
      ...prev,
      medicineId: selected.id,
      medicineName: selected.name,
      genericName: selected.generic_name,
      category: selected.category,
      reorderLevel: selected.reorderLevel,
    }))
  }

  // resetting the form
  const handleReset = () => {
    setForm({...initialForm})
  }

  // submitting the form
  const handleSubmit = async (event) => {
  event.preventDefault()

    let medicineId = form.medicineId

  if (!medicineId) {

  const medicineResponse = await fetch(
    "http://127.0.0.1:8000/medicines",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: form.medicineName,
        generic_name: form.genericName,
        category: form.category,
        reorder_level: Number(form.reorderLevel),
      }),
    }
  )

  const medicineData = await medicineResponse.json()

  medicineId = medicineData.id
}

  const payload = {
  batch_number: form.batchNumber,
  medicine_id: Number(medicineId),
  expiry_date: form.expiryDate,
  current_quantity: Number(form.quantity),
  price: Number(form.unitPrice),
}

  try {
    const response = await fetch("http://127.0.0.1:8000/batches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    console.log("Backend response:", data)

    alert("Stock entry recorded successfully!")

    setForm(initialForm)

  } catch (error) {
    console.log(error)
    alert("Failed to add stock")
  }
}

// fetch med from backend
  useEffect(() => {

  const fetchMedicines = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/medicines"
      )

      const data = await response.json()

      setMedicineOptions(data)

    } catch (error) {
      console.log(error)
    }
  }

  fetchMedicines()

}, [])

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#4338CA]"
  const labelClass = "pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500"

  return (
    <div className="h-screen bg-[#F8FAFC]">
      <AppNav title={"Add Stock (Inward)"} subTitle={"Operations · New entry"} />
      <form onSubmit={handleSubmit} className="h-[90vh] overflow-y-auto px-6 py-6">
        <div className="mx-auto w-full max-w-1100 space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 border-b border-slate-100 pb-4 text-lg font-semibold text-slate-800">
                <i className="ri-capsule-line text-[#4338CA]" />
                Medicine details
              </h2>

              <div className="pt-4">
                <label className={labelClass}>Select existing medicine</label>
                <select
                  value={form.medicineId}
                  onChange={(event) => handleMedicineSelect(event.target.value)}
                  className={inputClass}
                >
                  <option value="">- Choose a medicine -</option>
                  {medicineOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <p className="py-3 text-center text-sm text-slate-400">or add a new medicine</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className={labelClass}>Medicine name *</label>
                  <input
                    value={form.medicineName}
                    onChange={(event) => handleChange("medicineName", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. Ibuprofen 400mg"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Generic name</label>
                  <input
                    value={form.genericName}
                    onChange={(event) => handleChange("genericName", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. Ibuprofen"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Category</label>
                    <select
                      value={form.category}
                      onChange={(event) => handleChange("category", event.target.value)}
                      className={inputClass}
                    >
                      <option>Antibiotic</option>
                      <option>Analgesic</option>
                      <option>Antidiabetic</option>
                      <option>Statin</option>
                      <option>PPI</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Reorder level</label>
                    <input
                      type="number"
                      min="0"
                      value={form.reorderLevel}
                      onChange={(event) => handleChange("reorderLevel", event.target.value)}
                      className={inputClass}
                      placeholder="e.g. 300"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 border-b border-slate-100 pb-4 text-lg font-semibold text-slate-800">
                <i className="ri-computer-line text-[#4338CA]" />
                Batch details
              </h2>

              <div className="space-y-3 pt-4">
                <div>
                  <label className={labelClass}>Batch number *</label>
                  <input
                    value={form.batchNumber}
                    onChange={(event) => handleChange("batchNumber", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. AMX-26-003"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Manufacture date</label>
                    <input
                      type="date"
                      value={form.manufactureDate}
                      onChange={(event) => handleChange("manufactureDate", event.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Expiry date *</label>
                    <input
                      type="date"
                      value={form.expiryDate}
                      onChange={(event) => handleChange("expiryDate", event.target.value)}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Quantity (units) *</label>
                    <input
                      type="number"
                      min="0"
                      value={form.quantity}
                      onChange={(event) => handleChange("quantity", event.target.value)}
                      className={inputClass}
                      placeholder="e.g. 500"
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Unit price (Rs) *</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={form.unitPrice}
                      onChange={(event) => handleChange("unitPrice", event.target.value)}
                      className={inputClass}
                      placeholder="12.50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Supplier / Vendor</label>
                  <input
                    value={form.supplier}
                    onChange={(event) => handleChange("supplier", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. Sun Pharma Ltd."
                  />
                </div>

                <div>
                  <label className={labelClass}>Invoice / PO number</label>
                  <input
                    value={form.invoiceNumber}
                    onChange={(event) => handleChange("invoiceNumber", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. INV-2026-04884"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="flex items-center justify-end gap-3 pb-2">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
            >
              <i className="ri-restart-line mr-1" />
              Reset form
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#4338CA] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3a31af]"
            >
              <i className="ri-add-line mr-1" />
              Record stock entry
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddStock
