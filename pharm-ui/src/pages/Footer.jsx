const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0F172A] px-[6vw] pt-14 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 border-b border-slate-700 pb-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold">
            Pharm<span className="text-[#818CF8]">Inventory</span>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Track stock, monitor expiry, and manage pharmacy inventory with confidence.
          </p>
          <div className="mt-5 flex items-center gap-3 text-slate-300">
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-600 p-2 transition-colors hover:border-slate-400 hover:text-white">
              <i className="ri-linkedin-line" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-slate-600 p-2 transition-colors hover:border-slate-400 hover:text-white">
              <i className="ri-twitter-x-line" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-slate-600 p-2 transition-colors hover:border-slate-400 hover:text-white">
              <i className="ri-instagram-line" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="pb-3 text-sm font-semibold uppercase tracking-wider text-slate-100">Quick links</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <a href="#" className="transition-colors hover:text-white">Home</a>
            <a href="#" className="transition-colors hover:text-white">Features</a>
            <a href="#" className="transition-colors hover:text-white">Demo</a>
            <a href="#" className="transition-colors hover:text-white">How it works</a>
          </div>
        </div>

        <div>
          <h4 className="pb-3 text-sm font-semibold uppercase tracking-wider text-slate-100">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <a href="#" className="transition-colors hover:text-white">Help center</a>
            <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of service</a>
            <a href="#" className="transition-colors hover:text-white">Contact us</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Copyright {currentYear} PharmInventory. All rights reserved.</p>
        <p>Made for modern pharmacy inventory teams.</p>
      </div>
    </footer>
  )
}

export default Footer
