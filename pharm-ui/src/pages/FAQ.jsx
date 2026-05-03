import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      q: "What is PharmInventory?",
      a: "PharmInventory is a lightweight inventory tool for pharmacies to track medicines, manage batches, monitor expiry, and avoid stock shortages efficiently.",
    },
    {
      q: "What is a batch?",
      a: "A batch is a group of medicines with the same manufacturing and expiry date. Each medicine can have multiple batches for accurate tracking.",
    },
    {
      q: "How does batch tracking work?",
      a: "Each batch is stored separately with its own quantity, expiry date, and price to monitor stock and identify expiring items.",
    },
    {
      q: "What do expiry colours mean?",
      a: "Expiry statuses are color-coded - red indicates expired batches, amber shows items nearing expiry, and green means stock is safe.",
    },
    {
      q: "What is Low Stock vs Out of Stock?",
      a: "Low stock means quantity is below the reorder level, while out of stock means no remaining quantity is available.",
    },
    {
      q: "How do I add stock?",
      a: "Add stock by going to the Add Stock section, selecting a medicine, and entering batch details like quantity, expiry date, and price.",
    },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col justify-center px-[6vw] py-[4vh]">
      <div>
        <h2 className="pb-3 text-center font-semibold text-[#4338CA]">FAQ</h2>
        <h1 className='text-center font-["instrument-serif"] text-5xl'>
          Simple <span className="italic text-[#4338CA]">questions</span>, honest answers
        </h1>
      </div>

      <div className="mx-auto mt-[6vh] grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx

          return (
            <article
              key={faq.q}
              className={`rounded-2xl border bg-indigo-100/40 transition-all duration-200 ${
                isOpen
                  ? "border-indigo-400 shadow-md shadow-indigo-200/50"
                  : "border-indigo-200 hover:border-indigo-300 hover:bg-indigo-100/55"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <i
                  className={`ri-add-line rounded-full bg-indigo-100 px-1 text-indigo-700 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-6 text-gray-700">{faq.a}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
