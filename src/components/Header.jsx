import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Heart, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Header({ onOpenCart }) {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollRef = useRef(0);
  const { cartCount, dispatch } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScrollRef.current && current > 200);
      setIsScrolled(current > 50);
      lastScrollRef.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${hidden ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <button className="icon-btn mobile-menu-btn" aria-label="Menu" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={18} strokeWidth={1.5} />
          </button>

          <nav className="nav-links">
            <Link className="nav-link" to="/collection">Collection</Link>
            <Link className="nav-link" to="/collection/women">Women</Link>
            <Link className="nav-link" to="/collection/men">Men</Link>
          </nav>

          <Link to="/" className="logo-text">Aura</Link>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => dispatch({ type: 'TOGGLE_SEARCH' })}>
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="icon-btn" aria-label="Wishlist" onClick={() => navigate('/wishlist')}>
              <Heart size={18} strokeWidth={1.5} />
            </button>
            <button className="icon-btn cart-btn" aria-label="Cart" onClick={onOpenCart}>
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)} />
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="logo-text">Aura</span>
          <button className="icon-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="mobile-nav-links">
          <Link to="/collection" onClick={() => setMobileMenuOpen(false)}>All Collection</Link>
          <Link to="/collection/women" onClick={() => setMobileMenuOpen(false)}>Womenswear</Link>
          <Link to="/collection/men" onClick={() => setMobileMenuOpen(false)}>Menswear</Link>
          <Link to="/collection/accessories" onClick={() => setMobileMenuOpen(false)}>Objects</Link>
          <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>Wishlist</Link>
        </nav>
      </div>
    </>
  );
}
