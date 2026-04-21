import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import FoundreePill from './FoundreePill';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container">
          <div style={{ maxWidth: '480px' }}>
            <h2 style={{ color: 'var(--color-background)', marginBottom: 'var(--space-md)' }}>
              Stay informed.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Previews of upcoming collections, studio notes, and early access to limited drops.
            </p>
            <form style={{ marginTop: 'var(--space-xl)', maxWidth: '360px' }} onSubmit={e => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input-minimal"
                  required
                />
                <button type="submit" className="icon-btn" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="logo-text" style={{ color: 'var(--color-background)', display: 'inline-block' }}>
                Aura
              </Link>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: 'var(--space-sm)', maxWidth: '28ch', lineHeight: 1.7 }}>
                Est. 2026. Refining the intersection of material and meaning.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'var(--space-lg)' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-btn" style={{ color: 'rgba(255,255,255,0.4)', width: '1.75rem', height: '1.75rem' }}>
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-btn" style={{ color: 'rgba(255,255,255,0.4)', width: '1.75rem', height: '1.75rem' }}>
                  <Twitter size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div>
              <p className="footer-col-title">Index</p>
              <ul className="footer-links">
                <li><Link to="/collection/women">Womenswear</Link></li>
                <li><Link to="/collection/men">Menswear</Link></li>
                <li><Link to="/collection/accessories">Objects</Link></li>
                <li><Link to="/collection">Collection</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Client Care</p>
              <ul className="footer-links">
                <li><Link to="/collection">Contact</Link></li>
                <li><Link to="/collection">Shipping & Returns</Link></li>
                <li><Link to="/collection">Size Guide</Link></li>
                <li><Link to="/collection">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Aura Apparel</p>
            <FoundreePill />
          </div>
        </div>
      </div>
    </footer>
  );
}
