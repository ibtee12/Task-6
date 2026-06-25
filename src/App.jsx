import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
  // 'products' is the default view; 'cart' shows the cart section.
  const [activeTab, setActiveTab] = useState('products')

  // Each click adds a cart line; cartItemId keeps duplicate lines unique.
  const handleBuy = (product) => {
    setCartItems((prev) => [
      ...prev,
      { ...product, cartItemId: `${product.id}-${Date.now()}` },
    ])
    toast.success(`${product.name} added to cart`)
  }

  const handleRemove = (cartItemId) => {
    const removed = cartItems.find((item) => item.cartItemId === cartItemId)
    setCartItems((prev) =>
      prev.filter((item) => item.cartItemId !== cartItemId),
    )
    if (removed) {
      toast.info(`${removed.name} removed from cart`)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn('Your cart is empty')
      return
    }
    setCartItems([])
    toast.success('Checkout complete! Thank you for your purchase.')
  }

  // Clicking the navbar cart icon jumps to the cart view.
  const handleCartClick = () => {
    setActiveTab('cart')
    document
      .getElementById('products')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cartItems.length} onCartClick={handleCartClick} />
      <main>
        <Banner />
        <Stats />
        <Products
          cartItems={cartItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onBuy={handleBuy}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        theme="light"
      />
    </div>
  )
}

export default App
