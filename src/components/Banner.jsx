import bannerImg from '../assets/banner.png'
import playIcon from '../assets/Play.png'

function Banner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Supercharge Your{' '}
            <span className="text-violet-600">Digital Workflow</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#products"
              className="w-full rounded-full bg-violet-600 px-7 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 sm:w-auto"
            >
              Explore Products
            </a>
            <a
              href="#demo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-7 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              <img src={playIcon} alt="" className="h-4 w-4" />
              Watch Demo
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <img
            src={bannerImg}
            alt="Digital workflow illustration"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
