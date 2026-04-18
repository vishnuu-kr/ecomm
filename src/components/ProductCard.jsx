import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product, className = '' }) {
  const { state, dispatch } = useStore();
  const isWished = state.wishlist.some(i => i.id === product.id);

  return (
    <div className={`product-card ${className}`}>
      <div className="double-bezel" style={{ position: 'relative' }}>
        <div className="double-bezel-inner">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} loading="lazy" />
          </Link>
        </div>
        <button
          className={`wishlist-btn ${isWished ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: product })}
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} strokeWidth={isWished ? 0 : 1.5} fill={isWished ? 'var(--color-accent)' : 'none'} />
        </button>
        {product.isNew && <span className="product-badge">New</span>}
        {product.originalPrice && (
          <span className="product-badge sale-badge">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
      </div>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="product-meta">
          <span className="product-title">{product.name}</span>
          <div className="product-price-row">
            <span className="product-price">${product.price}</span>
            {product.originalPrice && (
              <span className="product-price-original">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
