const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

function Stats() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-purple-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center sm:py-0">
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-medium text-violet-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
