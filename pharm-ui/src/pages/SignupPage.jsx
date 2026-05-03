import { Link, useNavigate } from "react-router-dom"

const SignupPage = () => {
  const navigate = useNavigate()

  const handleSignup = (event) => {
    event.preventDefault()
    localStorage.setItem("pharmAuth", "true")
    navigate("/app/dashboard")
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EEF2FF] via-[#F7F9FF] to-white px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-[#4338CA]/20 bg-white/70 shadow-2xl backdrop-blur-md lg:grid lg:grid-cols-2">
        <section className="bg-white/90 p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold text-gray-900">Create account</h2>
          <p className="mt-2 text-sm text-gray-600">Create your account in a minute.</p>

          <form onSubmit={handleSignup} className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Work email</label>
              <input
                type="email"
                placeholder="you@pharmacy.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Confirm</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
                />
              </div>
            </div>

            <label className="inline-flex items-start gap-2 text-xs text-gray-500">
              <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#4338CA]" />
              I agree to the terms and privacy policy.
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#4338CA] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a31af]"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[#4338CA] hover:underline">
              Sign in
            </Link>
          </p>
        </section>

        <section className="relative min-h-[300px] bg-gradient-to-br from-[#4338CA] via-[#5C50E3] to-[#7C73FF] p-8 text-white sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.22),transparent_42%)]" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
              Better inventory control
            </h2>
            <h1 className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">Build your workspace.</h1>
            <p className="mt-4 max-w-md text-sm text-indigo-100/95">
              Stay on top of stock, batches, and alerts.
            </p>
            <div className="mt-10 rounded-xl border border-white/25 bg-white/10 p-3 text-sm backdrop-blur">
              Real-time pharmacy insights
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SignupPage
