import productsData from '../data/products.json'
import ProductCard from './ProductCard'
import Cart from './Cart'

function Products({
  cartItems,
  activeTab,
  onTabChange,
  onBuy,
  onRemove,
  onCheckout,
}) {
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

      {/* Products / Cart toggle */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => onTabChange('products')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'products'
                ? 'bg-violet-600 text-white'
                : 'text-slate-600 hover:text-violet-600'
            }`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onTabChange('cart')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'cart'
                ? 'bg-violet-600 text-white'
                : 'text-slate-600 hover:text-violet-600'
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

      {/* Active view */}
      {activeTab === 'products' ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={onBuy} />
          ))}
        </div>
      ) : (
        <Cart
          items={cartItems}
          onRemove={onRemove}
          onCheckout={onCheckout}
        />
      )}
    </section>
  )
}

export default Products
