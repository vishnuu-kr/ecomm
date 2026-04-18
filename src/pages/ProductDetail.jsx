import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ArrowRight, Truck, RotateCcw, Shield, Star, StarHalf } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail({ onOpenCart }) {
  const { id } = useParams();
  const { state, dispatch } = useStore();
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);
  const product = products.find(p => p.id === Number(id));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) return (
    <div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '60vh' }}>
      <h2>Product not found</h2>
      <Link to="/collection" className="btn-text" style={{ marginTop: 'var(--space-lg)', display: 'inline-block' }}>Back to collection</Link>
    </div>
  );

  const isWished = state.wishlist.some(i => i.id === product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id: product.id, name: product.name, price: product.price, image: product.image, size: selectedSize, color: product.color }
    });
    onOpenCart();
  };

  return (
    <div style={{ paddingTop: '7rem' }}>
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/collection/${product.category}`}>{product.category === 'women' ? 'Womenswear' : product.category === 'men' ? 'Menswear' : 'Objects'}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="pdp-layout">
          {/* Image */}
          <div className="pdp-image">
            <div className="double-bezel" style={{ borderRadius: '2rem', padding: '0.5rem' }}>
              <div className="double-bezel-inner" style={{ borderRadius: 'calc(2rem - 0.5rem)' }}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pdp-info">
            {product.isNew && <span className="eyebrow" style={{ marginBottom: 'var(--space-md)' }}>New Arrival</span>}
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: 'var(--space-md)' }}>{product.name}</h1>
            <div className="pdp-price-row">
              <span className="pdp-price">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="pdp-price-original">${product.originalPrice}</span>
                  <span className="pdp-discount">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                </>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
              <div style={{ display: 'flex', color: 'var(--color-primary)' }}>
                {[...Array(Math.floor(product.rating || 5))].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                {(product.rating % 1 !== 0) && <StarHalf size={14} fill="currentColor" />}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)' }}>
                {product.rating} ({product.reviews?.length || 0} Reviews)
              </span>
            </div>

            <p className="pdp-description">{product.description}</p>

            {/* Size selector */}
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <p className="pdp-label">Size {sizeError && <span style={{ color: '#c45', fontSize: '0.75rem' }}>— Please select a size</span>}</p>
              <div className="size-grid">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''} ${sizeError && !selectedSize ? 'error' : ''}`}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pdp-actions">
              <button className="btn-primary pdp-add-btn" onClick={handleAddToCart}>
                Add to Bag — ${product.price}
                <span className="btn-icon-wrapper">
                  <ArrowRight size={15} strokeWidth={1.5} />
                </span>
              </button>
              <button
                className={`wishlist-btn-large ${isWished ? 'active' : ''}`}
                onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: product })}
              >
                <Heart size={20} strokeWidth={isWished ? 0 : 1.5} fill={isWished ? 'var(--color-accent)' : 'none'} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="pdp-trust">
              <div className="trust-item"><Truck size={16} strokeWidth={1.5} /><span>Free shipping over $200</span></div>
              <div className="trust-item"><RotateCcw size={16} strokeWidth={1.5} /><span>30-day returns</span></div>
              <div className="trust-item"><Shield size={16} strokeWidth={1.5} /><span>Lifetime guarantee</span></div>
            </div>

            {/* Details & Reviews Accrodions */}
            <details className="pdp-details-accordion">
              <summary>Product Details</summary>
              <ul className="pdp-details-list">
                {product.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </details>
            
            <details className="pdp-details-accordion">
              <summary>Shipping & Returns</summary>
              <div className="pdp-details-list">
                <p style={{ marginBottom: '1rem' }}>Complimentary expedited shipping worldwide on orders above $200. Delivered in our signature sustainable packaging.</p>
                <p>We accept returns within 30 days of receipt. Items must be unworn with tags attached.</p>
              </div>
            </details>

            <details className="pdp-details-accordion">
              <summary>Customer Reviews ({product.reviews?.length || 0})</summary>
              <div className="pdp-details-list">
                {product.reviews && product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <div key={review.id} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 500, color: 'var(--color-primary)' }}>{review.author}</span>
                        <span style={{ fontSize: '0.8rem' }}>{review.date}</span>
                      </div>
                      <div style={{ display: 'flex', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="container section">
          <div className="section-header">
            <h2>You May Also Like</h2>
          </div>
          <div className="product-grid">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
