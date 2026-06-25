import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={0} />
      <main>
        <Banner />
        <Stats />
        {/* Upcoming steps: Products/Cart, Steps, Pricing, CTA, Footer */}
      </main>
    </div>
  )
}

export default App
