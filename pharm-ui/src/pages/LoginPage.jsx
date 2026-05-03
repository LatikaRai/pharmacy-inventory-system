import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem("pharmAuth", "true")
    navigate("/app/dashboard")
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#EEF2FF] via-[#F7F9FF] to-white px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-[#4338CA]/20 bg-white/70 shadow-2xl backdrop-blur-md lg:grid lg:grid-cols-2">
        <section className="relative min-h-75 bg-linear-to-br from-[#1E1B4B] via-[#3730A3] to-[#4338CA] p-8 text-white sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
              PharmInventory
            </h2>
            <div>
              <h1 className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">Welcome back.</h1>
              <p className="mt-4 max-w-md text-sm text-indigo-100/90">
                Manage stock and alerts in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/90 p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold text-gray-900">Log in</h2>
          <p className="mt-2 text-sm text-gray-600">Use your account details to continue.</p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@pharmacy.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#4338CA]"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#4338CA]" />
                Keep me signed in
              </label>
              <button type="button" className="text-[#4338CA] hover:underline">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#4338CA] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a31af]"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            New here?{" "}
            <Link to="/signup" className="font-medium text-[#4338CA] hover:underline">
              Create account
            </Link>
          </p>
        </section>
      </div>
    </div>
  )
}

export default LoginPage
