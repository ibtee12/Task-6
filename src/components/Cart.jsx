import productIcons from '../data/icons'

function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">Your Cart</h3>

      {items.length === 0 ? (
        /* Empty state */
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-slate-500">
            Your cart is empty
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Browse the products and add something to get started.
          </p>
        </div>
      ) : (
        <>
          {/* Cart items (1 column) */}
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li
                key={item.cartItemId}
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                  <img src={productIcons[item.icon]} alt="" className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500">${item.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.cartItemId)}
                  className="text-sm font-semibold text-pink-600 transition-colors hover:text-pink-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-base font-medium text-slate-600">Total:</span>
            <span className="text-2xl font-extrabold text-slate-900">
              ${total}
            </span>
          </div>

          {/* Checkout */}
          <button
            type="button"
            onClick={onCheckout}
            className="mt-6 w-full rounded-full bg-linear-to-r from-violet-600 to-purple-600 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
