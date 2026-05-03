import AppNav from "../components/AppNav"
import { useMemo, useState } from "react"

const Reports = () => {
  const [downloadingKey, setDownloadingKey] = useState(null)
  const [lastDownloadedKey, setLastDownloadedKey] = useState("")

  const medicines = useMemo(
    () => [
      { name: "Amoxicillin 500mg", category: "Antibiotic", qty: 1250, reorder: 300, unitPrice: 11 },
      { name: "Paracetamol 650mg", category: "Analgesic", qty: 0, reorder: 500, unitPrice: 3.75 },
      { name: "Metformin 500mg", category: "Antidiabetic", qty: 310, reorder: 400, unitPrice: 8.25 },
      { name: "Atorvastatin 10mg", category: "Statin", qty: 310, reorder: 200, unitPrice: 22 },
      { name: "Azithromycin 250mg", category: "Antibiotic", qty: 495, reorder: 150, unitPrice: 34 },
      { name: "Omeprazole 20mg", category: "PPI", qty: 940, reorder: 250, unitPrice: 15.5 },
    ],
    []
  )

  const batches = useMemo(
    () => [
      { id: "AMX-24-001", medicine: "Amoxicillin 500mg", expiryDate: "2026-04-06", daysToExpiry: -4, qty: 80, unitPrice: 12.5 },
      { id: "PCT-24-001", medicine: "Paracetamol 650mg", expiryDate: "2026-03-20", daysToExpiry: -21, qty: 0, unitPrice: 3.5 },
      { id: "MET-24-001", medicine: "Metformin 500mg", expiryDate: "2026-05-30", daysToExpiry: 50, qty: 110, unitPrice: 8 },
      { id: "ATV-25-001", medicine: "Atorvastatin 10mg", expiryDate: "2026-06-15", daysToExpiry: 66, qty: 190, unitPrice: 22 },
      { id: "AZI-25-001", medicine: "Azithromycin 250mg", expiryDate: "2026-06-01", daysToExpiry: 52, qty: 170, unitPrice: 34 },
      { id: "OMP-25-001", medicine: "Omeprazole 20mg", expiryDate: "2027-03-20", daysToExpiry: 353, qty: 390, unitPrice: 15.5 },
    ],
    []
  )

  const stockEntries = useMemo(
    () => [
      { date: "2026-04-27", medicine: "Amoxicillin 500mg", batch: "AMX-25-002", supplier: "Sun Pharma Ltd.", qty: 450, unitPrice: 11, invoice: "INV-2026-04884" },
      { date: "2026-04-26", medicine: "Metformin 500mg", batch: "MET-25-001", supplier: "Cipla", qty: 200, unitPrice: 8.25, invoice: "INV-2026-04863" },
      { date: "2026-04-25", medicine: "Paracetamol 650mg", batch: "PCT-25-001", supplier: "Dr. Reddy's", qty: 620, unitPrice: 3.75, invoice: "INV-2026-04841" },
    ],
    []
  )

  const toCsv = (rows) =>
    rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n")

  const downloadCsv = (filename, rows) => {
    const csv = toCsv(rows)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", filename)
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  const generateReport = (reportKey) => {
    setDownloadingKey(reportKey)

    setTimeout(() => {
      const date = new Date().toISOString().slice(0, 10)

      if (reportKey === "valuation") {
        const rows = [
          ["Medicine", "Category", "Quantity", "Unit Price", "Stock Value"],
          ...medicines.map((med) => [med.name, med.category, med.qty, med.unitPrice, med.qty * med.unitPrice]),
        ]
        downloadCsv(`stock-valuation-${date}.csv`, rows)
      }

      if (reportKey === "expiry") {
        const rows = [
          ["Batch", "Medicine", "Expiry Date", "Days To Expiry", "Status", "Qty"],
          ...batches
            .slice()
            .sort((a, b) => a.daysToExpiry - b.daysToExpiry)
            .map((batch) => [
              batch.id,
              batch.medicine,
              batch.expiryDate,
              batch.daysToExpiry,
              batch.daysToExpiry < 0 ? "Expired" : batch.daysToExpiry <= 90 ? "Expiring soon" : "Good",
              batch.qty,
            ]),
        ]
        downloadCsv(`expiry-report-${date}.csv`, rows)
      }

      if (reportKey === "low-stock") {
        const rows = [
          ["Medicine", "Category", "Quantity", "Reorder Level", "Suggested Order Qty"],
          ...medicines
            .filter((med) => med.qty < med.reorder)
            .map((med) => [med.name, med.category, med.qty, med.reorder, med.reorder - med.qty]),
        ]
        downloadCsv(`low-stock-report-${date}.csv`, rows)
      }

      if (reportKey === "inward-history") {
        const rows = [
          ["Date", "Medicine", "Batch", "Supplier", "Quantity", "Unit Price", "Total Value", "Invoice"],
          ...stockEntries.map((entry) => [
            entry.date,
            entry.medicine,
            entry.batch,
            entry.supplier,
            entry.qty,
            entry.unitPrice,
            entry.qty * entry.unitPrice,
            entry.invoice,
          ]),
        ]
        downloadCsv(`stock-inward-history-${date}.csv`, rows)
      }

      setDownloadingKey(null)
      setLastDownloadedKey(reportKey)
    }, 450)
  }

  const reports = [
    {
      key: "valuation",
      title: "Stock valuation report",
      description:
        "Complete inventory value breakdown by medicine and batch, including unit prices and total value.",
      icon: "ri-line-chart-line",
      iconClass: "bg-indigo-100 text-indigo-700",
      buttonClass: "bg-[#4338CA] text-white hover:bg-[#3a31af]",
    },
    {
      key: "expiry",
      title: "Expiry report",
      description:
        "All batches sorted by expiry date. Highlights expired, expiring within 30 days, and within 3 months.",
      icon: "ri-alarm-warning-line",
      iconClass: "bg-red-100 text-red-700",
      buttonClass: "bg-red-100 text-red-700 hover:bg-red-200/80",
    },
    {
      key: "low-stock",
      title: "Low stock report",
      description:
        "All medicines currently below their reorder level, with suggested order quantities.",
      icon: "ri-inbox-archive-line",
      iconClass: "bg-amber-100 text-amber-700",
      buttonClass: "bg-amber-100 text-amber-800 hover:bg-amber-200/70",
    },
    {
      key: "inward-history",
      title: "Stock inward history",
      description:
        "Complete log of all stock entries - medicine, batch, supplier, quantity, date, and invoice number.",
      icon: "ri-edit-line",
      iconClass: "bg-emerald-100 text-emerald-700",
      buttonClass: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200/70",
    },
  ]

  return (
    <div className="h-screen bg-[#F8FAFC]">
      <AppNav title={"Reports"} subTitle={"Analytics · Generate reports"} />
      <div className="h-[90vh] w-full px-6 py-6">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-2">
          {reports.map((report) => {
            const isDownloading = downloadingKey === report.key
            const isDownloaded = lastDownloadedKey === report.key

            return (
              <article
                key={report.key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <i
                  className={`${report.icon} mb-4 inline-flex rounded-xl px-3 py-2 text-xl ${report.iconClass}`}
                />
                <h2 className="text-2xl font-semibold text-slate-800">{report.title}</h2>
                <p className="mt-2 text-[1rem] leading-7 text-slate-500">{report.description}</p>

                <button
                  onClick={() => generateReport(report.key)}
                  disabled={isDownloading}
                  className={`mt-5 rounded-xl px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${report.buttonClass}`}
                >
                  <i className={`mr-2 ${isDownloading ? "ri-loader-4-line animate-spin" : isDownloaded ? "ri-check-line" : "ri-download-line"}`} />
                  {isDownloading ? "Generating..." : isDownloaded ? "Downloaded" : "Generate & download"}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Reports
