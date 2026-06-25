function CallToAction() {
  return (
    <section
      id="get-started"
      className="bg-linear-to-r from-violet-600 to-purple-600"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-violet-100">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#products"
            className="w-full rounded-full bg-white px-7 py-3 text-center text-base font-semibold text-violet-600 transition-colors hover:bg-violet-50 sm:w-auto"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="w-full rounded-full border border-white/60 px-7 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-sm text-violet-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CallToAction
