import { useState } from 'react'
import productIcons from '../data/icons'

// Tailwind classes for each tag type (matches the design colours).
const tagStyles = {
  bestSeller: 'bg-amber-100 text-amber-700',
  popular: 'bg-violet-100 text-violet-700',
  new: 'bg-emerald-100 text-emerald-700',
}

const periodLabels = {
  monthly: '/Mo',
  yearly: '/Yr',
  'one-time': '/One-Time',
}

function ProductCard({ product, onBuy }) {
  const { name, description, price, period, tag, tagType, features, icon } =
    product

  // Brief "Added to cart" feedback on the Buy Now button after a click.
  const [added, setAdded] = useState(false)

  const handleBuy = () => {
    onBuy?.(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Icon + tag */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
          <img src={productIcons[icon]} alt="" className="h-7 w-7" />
        </div>
        {tag && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              tagStyles[tagType] ?? 'bg-slate-100 text-slate-700'
            }`}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Name + description */}
      <h3 className="mt-5 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Price */}
      <p className="mt-4 text-2xl font-extrabold text-slate-900">
        ${price}
        <span className="text-sm font-medium text-slate-400">
          {periodLabels[period] ?? ''}
        </span>
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <svg
              className="h-4 w-4 shrink-0 text-violet-500"
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
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy button */}
      <button
        type="button"
        onClick={handleBuy}
        disabled={added}
        className={`mt-6 w-full rounded-full py-3 text-sm font-semibold text-white transition-colors ${
          added
            ? 'bg-emerald-500'
            : 'bg-violet-600 hover:bg-violet-700'
        }`}
      >
        {added ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard
