const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 0,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    tagline: 'Best for professionals',
    price: 29,
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: 99,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function CheckIcon({ highlighted }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 ${
        highlighted ? 'text-white' : 'text-violet-500'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Plans grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl p-8 shadow-sm ${
              plan.highlighted
                ? 'bg-linear-to-br from-violet-600 to-purple-600 text-white shadow-xl lg:-translate-y-2'
                : 'border border-slate-100 bg-white'
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                Most Popular
              </span>
            )}

            <h3
              className={`text-lg font-bold ${
                plan.highlighted ? 'text-white' : 'text-slate-900'
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`mt-1 text-sm ${
                plan.highlighted ? 'text-violet-100' : 'text-slate-500'
              }`}
            >
              {plan.tagline}
            </p>

            <p className="mt-6">
              <span
                className={`text-4xl font-extrabold ${
                  plan.highlighted ? 'text-white' : 'text-slate-900'
                }`}
              >
                ${plan.price}
              </span>
              <span
                className={`text-sm font-medium ${
                  plan.highlighted ? 'text-violet-100' : 'text-slate-400'
                }`}
              >
                /Month
              </span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-2 text-sm ${
                    plan.highlighted ? 'text-violet-50' : 'text-slate-600'
                  }`}
                >
                  <CheckIcon highlighted={plan.highlighted} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                plan.highlighted
                  ? 'bg-white text-violet-600 hover:bg-violet-50'
                  : 'bg-violet-600 text-white hover:bg-violet-700'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
