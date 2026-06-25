import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

const steps = [
  {
    number: '01',
    icon: userIcon,
    title: 'Create Account',
    description:
      'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: packageIcon,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: rocketIcon,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
]

function Steps() {
  return (
    <section id="steps" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm"
            >
              {/* Step number badge */}
              <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <img src={step.icon} alt="" className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
