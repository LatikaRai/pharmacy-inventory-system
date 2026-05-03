
const FeatureSection = () => {
  const featureCardClass =
    "group w-1/3 p-10 gap-3 flex flex-col items-start rounded-2xl border border-gray-300 bg-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-100/70"

  return (
    <div className="h-[120vh] w-full py-[10vh] px-[6vw] flex flex-col gap-[5vh]">
      <div className="flex flex-col items-start gap-[3vh] ">
        <h4 className="uppercase font-semibold text-[#4338CA]">Everything you need</h4>
        <h1 className="text-5xl font-['instrument-serif']">Built for the <span className="italic text-[#4338CA]">real</span> pharmacy floor</h1>
        <p className="text-gray-700 text-[1.1vw]">Every feature was designed around how pharmacies actually operate — <br /> tracking batches, catching expiry, and staying stocked.</p>
      </div>
      <div className="w-full h-fit flex flex-col items-center gap-[4vh]">
        <div className="w-full flex items-center gap-6 ">
          <div className={featureCardClass}>
            <i className="ri-dashboard-line rounded-lg bg-[#4338CA]/20 px-2 py-1 text-2xl text-[#4338CA] transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Intelligent dashboard</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">One glance shows total stock value, expiry alerts, low-stock warnings, and a recent activity feed — all prioritised by urgency.</p>
          </div>
          <div className={featureCardClass}>
            <i className="ri-alarm-warning-line rounded-lg bg-amber-400/20 px-2 py-1 text-2xl text-amber-600 transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Colour-coded expiry tracking</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">Batches are automatically flagged red when expired and amber when within 3 months. No setup needed — it just works.</p>
          </div>
          <div className={featureCardClass}>
            <i className="ri-box-3-line rounded-lg bg-green-400/20 px-2 py-1 text-2xl text-green-800 transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Batch management</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">Every batch is tracked independently with its own number, expiry date, quantity, and unit price — one medicine, many batches.</p>
          </div>
        </div>
        <div className="w-full flex items-center gap-6 ">
          <div className={featureCardClass}>
            <i className="ri-shopping-cart-2-line rounded-lg bg-red-400/20 px-2 py-1 text-2xl text-red-800 transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Reorder level alerts</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">Set a custom reorder threshold per medicine. Table rows highlight automatically when total stock falls below that level.</p>
          </div>
          <div className={featureCardClass}>
            <i className="ri-line-chart-line rounded-lg bg-blue-400/20 px-2 py-1 text-2xl text-blue-800 transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Stock valuation</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">Real-time inventory value computed per batch and rolled up to medicine level — always accurate, always current.</p>
          </div>
          <div className={featureCardClass}>
            <i className="ri-edit-line rounded-lg bg-purple-400/20 px-2 py-1 text-2xl text-purple-600 transition-transform duration-300 group-hover:scale-110"></i>
            <h1 className="font-semibold text-lg">Add stock (inward entry)</h1>
            <p className="text-sm text-gray-800 pr-10 leading-6">A split-form UI — select or create a medicine on the left, enter batch and supplier details on the right. Fast and clean.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
