
const FeatureHighlights = () => {
  return (
    <div className="w-full h-[25vh] flex bg-[#0F172A]">
      <div className="w-1/4 h-full flex items-center justify-center gap-4 px-10 border-r-gray-300/30">
        <i className="ri-alarm-warning-line py-2 px-3 rounded-lg bg-[#5c50e3]/20 text-[#4338CA] text-2xl"></i>
        <div>
            <h1 className="text-white text-md font-semibold">Never miss expiry</h1>
            <p className="text-gray-400 text-sm">Batches turn red when expired, amber near expiry.</p>
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center gap-4 px-10 border-2 border-r-gray-400/30">
        <i className="ri-archive-2-line py-2 px-3 rounded-lg bg-green-300/20 text-green-500 text-2xl"></i>
        <div>
            <h1 className="text-white text-md font-semibold">Avoid stockouts</h1>
            <p className="text-gray-400 text-sm">Get alerts before stock runs out.</p>
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center gap-4 px-10 border-2 border-r-gray-400/30">
        <i className="ri-briefcase-3-line py-2 px-3 rounded-lg bg-amber-400/20 text-amber-400 text-2xl"></i>
        <div>
            <h1 className="text-white text-md font-semibold">Track stock value</h1>
            <p className="text-gray-400 text-sm">Auto-calculated from quantity × price.</p>
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center justify-center gap-4 px-10 border-2 border-r-gray-400/30">
        <i className="ri-edit-line py-2 px-3 rounded-lg bg-pink-500/20 text-pink-500 text-2xl"></i>
        <div>
            <h1 className="text-white text-md font-semibold">Log stock fast</h1>
            <p className="text-gray-400 text-sm">Add medicine and batch details quickly.</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureHighlights
