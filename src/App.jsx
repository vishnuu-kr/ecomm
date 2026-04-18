import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import SearchOverlay from './components/SearchOverlay'
import Toast from './components/Toast'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import CustomCursor from './components/CustomCursor'
import { useStore } from './context/StoreContext'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useStore()

  return (
    <div className="app-container">
      <div className="announcement-bar">
        COMPLIMENTARY WORLDWIDE SHIPPING ON ALL ORDERS OVER $200
      </div>
      <CustomCursor />
      <Header onOpenCart={() => setIsCartOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenCart={() => setIsCartOpen(true)} />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:category" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail onOpenCart={() => setIsCartOpen(true)} />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {state.isSearchOpen && <SearchOverlay />}
      <Toast />
    </div>
  )
}

export default App
