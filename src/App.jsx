import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={0} />
      <main>
        <Banner />
        <Stats />
        <Products />
        {/* Upcoming steps: Cart functionality, Steps, Pricing, CTA, Footer */}
      </main>
    </div>
  )
}

export default App
