import { Link } from 'react-router-dom';
import { X, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { state, dispatch, cartTotal } = useStore();

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Shopping Cart">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ fontSize: '1.3rem' }}>Your Bag ({state.cart.length})</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {state.cart.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-md)' }}>
            <ShoppingBagEmpty />
            <p style={{ color: 'var(--color-secondary)', fontSize: '0.85rem' }}>Your bag is empty</p>
            <button className="btn-text" onClick={onClose}>Continue browsing</button>
          </div>
        ) : (
          <div className="cart-items-scroll">
            {state.cart.map((item, idx) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <Link to={`/product/${item.id}`} onClick={onClose}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                </Link>
                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`} onClick={onClose} style={{ textDecoration: 'none' }}>
                    <p className="cart-item-name">{item.name}</p>
                  </Link>
                  <p className="cart-item-meta">Size: {item.size} · {item.color}</p>
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, size: item.size, quantity: item.quantity - 1 }})}>
                        <Minus size={12} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button className="qty-btn" onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, size: item.size, quantity: item.quantity + 1 }})}>
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="icon-btn" style={{ padding: '0.25rem' }} onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id, size: item.size }})}>
                      <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
            <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>Subtotal</span>
            <span style={{ fontWeight: 500, fontSize: '0.85rem' }}>${cartTotal.toFixed(2)}</span>
          </div>
          {cartTotal >= 200 && (
            <p style={{ fontSize: '0.7rem', color: 'var(--color-accent)', marginBottom: 'var(--space-sm)' }}>
              You qualify for complimentary shipping.
            </p>
          )}
          <p style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>
            Taxes and shipping calculated at checkout.
          </p>
          <Link to="/checkout" onClick={onClose} className="btn-primary" style={{ width: '100%', justifyContent: 'space-between', textDecoration: 'none' }}>
            <span>Checkout</span>
            <span className="btn-icon-wrapper">
              <ArrowRight size={15} strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

function ShoppingBagEmpty() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-border)' }}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
