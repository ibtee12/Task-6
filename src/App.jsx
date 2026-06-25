import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  // Each click adds a cart line; cartItemId keeps duplicate lines unique.
  const handleBuy = (product) => {
    setCartItems((prev) => [
      ...prev,
      { ...product, cartItemId: `${product.id}-${Date.now()}` },
    ])
  }

  const handleRemove = (cartItemId) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartItemId !== cartItemId),
    )
  }

  const handleCheckout = () => {
    setCartItems([])
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cartItems.length} />
      <main>
        <Banner />
        <Stats />
        <Products
          cartItems={cartItems}
          onBuy={handleBuy}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
