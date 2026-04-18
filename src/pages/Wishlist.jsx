import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Wishlist() {
  const { state } = useStore();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const wishedProducts = products.filter(p => state.wishlist.some(w => w.id === p.id));

  return (
    <div className="container" style={{ paddingTop: '8rem', minHeight: '70vh' }}>
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Wishlist</span>
      </nav>

      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: 'var(--space-xl)' }}>
        Wishlist ({wishedProducts.length})
      </h1>

      {wishedProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
          <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>
            Your wishlist is empty.
          </p>
          <Link to="/collection" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishedProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
