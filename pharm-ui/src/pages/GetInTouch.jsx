const GetInTouch = () => {
  return (
    <section className="w-full px-[6vw] py-[10vh]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-3xl border border-indigo-200 bg-indigo-50/70 p-8 md:p-12">
        <div className="text-center">
          <h4 className="pb-3 font-semibold uppercase text-[#4338CA]">Get in touch</h4>
          <h2 className='text-4xl font-["instrument-serif"] md:text-5xl'>
            Lets build a smoother <span className="italic text-[#4338CA]">pharmacy workflow</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
            Share your current inventory challenges and we will help you set up a clean, reliable flow for stock, batches, and expiry monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-indigo-200 bg-white px-5 py-4">
            <h3 className="text-xs uppercase tracking-wide text-indigo-500">Email</h3>
            <p className="mt-2 font-semibold text-gray-900">support@pharminventory.com</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-white px-5 py-4">
            <h3 className="text-xs uppercase tracking-wide text-indigo-500">Phone</h3>
            <p className="mt-2 font-semibold text-gray-900">+91 90000 12345</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-white px-5 py-4">
            <h3 className="text-xs uppercase tracking-wide text-indigo-500">Working hours</h3>
            <p className="mt-2 font-semibold text-gray-900">Mon - Sat, 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
