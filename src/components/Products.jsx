import productsData from '../data/products.json'
import ProductCard from './ProductCard'

function Products({ onBuy }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Premium Digital Tools
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Products / Cart toggle (interactivity added in Step 4) */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
          <button
            type="button"
            className="rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold text-white"
          >
            Products
          </button>
          <button
            type="button"
            className="rounded-full px-6 py-2 text-sm font-semibold text-slate-600"
          >
            Cart (0)
          </button>
        </div>
      </div>

      {/* 3-column product grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onBuy={onBuy} />
        ))}
      </div>
    </section>
  )
}

export default Products
