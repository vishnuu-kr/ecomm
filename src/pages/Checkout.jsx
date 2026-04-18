import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Checkout() {
  const { state, dispatch, cartTotal } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    cardNumber: '',
    expDate: '',
    cvc: '',
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (state.cart.length === 0 && step !== 3) {
    return (
      <div className="container" style={{ paddingTop: '10rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Your bag is empty</h2>
        <Link to="/collection" className="btn-primary" style={{ marginTop: 'var(--space-lg)', display: 'inline-flex', textDecoration: 'none' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      setStep(3);
    }, 1500);
  };

  if (step === 3) {
    return (
      <div className="container checkout-success">
        <CheckCircle2 size={48} color="var(--color-accent)" strokeWidth={1.5} />
        <h1>Order Confirmed</h1>
        <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-xl)' }}>
          Thank you for your purchase. Your order number is #AUR-{Math.floor(Math.random() * 100000)}.<br/>
          We'll send a confirmation email to {formData.email} shortly.
        </p>
        <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
          Return to Home
        </Link>
      </div>
    );
  }

  const shippingCost = cartTotal >= 200 ? 0 : 15;
  const tax = cartTotal * 0.08; // 8% simulated tax
  const total = cartTotal + shippingCost + tax;

  return (
    <div className="checkout-container container">
      <div className="checkout-form-section">
        <nav className="breadcrumb" style={{ marginBottom: 'var(--space-xl)' }}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Checkout</span>
        </nav>

        {step === 1 && (
          <form onSubmit={handleShippingSubmit} className="checkout-form">
            <h2>Shipping Information</h2>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="form-input" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required value={formData.address} onChange={handleInputChange} className="form-input" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" id="postalCode" name="postalCode" required value={formData.postalCode} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 'var(--space-xl)' }}>
              <label htmlFor="country">Country</label>
              <select id="country" name="country" value={formData.country} onChange={handleInputChange} className="form-input">
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
              Continue to Payment
              <span className="btn-icon-wrapper">
                <ArrowRight size={15} strokeWidth={1.5} />
              </span>
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePaymentSubmit} className="checkout-form">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <h2>Payment</h2>
              <button type="button" className="btn-text" onClick={() => setStep(1)} style={{ fontSize: '0.85rem' }}>Edit Shipping</button>
            </div>

            <div className="checkout-summary-box mb-xl">
              <div className="summary-row">
                <span className="label">Contact</span>
                <span className="value">{formData.email}</span>
              </div>
              <div className="summary-row">
                <span className="label">Ship to</span>
                <span className="value">{formData.address}, {formData.city}, {formData.postalCode}</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" required placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} className="form-input" />
            </div>

            <div className="form-row" style={{ marginBottom: 'var(--space-xl)' }}>
              <div className="form-group">
                <label htmlFor="expDate">Expiration Date</label>
                <input type="text" id="expDate" name="expDate" required placeholder="MM/YY" value={formData.expDate} onChange={handleInputChange} className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" name="cvc" required placeholder="123" value={formData.cvc} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
              Pay ${total.toFixed(2)}
              <span className="btn-icon-wrapper">
                <ArrowRight size={15} strokeWidth={1.5} />
              </span>
            </button>
          </form>
        )}
      </div>

      <div className="checkout-summary-section">
        <div className="checkout-summary-inner">
          <h3 style={{ marginBottom: 'var(--space-lg)' }}>Order Summary</h3>
          
          <div className="checkout-items">
            {state.cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="checkout-item">
                <div className="item-img-wrap">
                  <img src={item.image} alt={item.name} />
                  <span className="item-qty-badge">{item.quantity}</span>
                </div>
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <p className="item-meta">{item.color} / {item.size}</p>
                </div>
                <div className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-totals">
            <div className="totals-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="totals-row">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? 'Complimentary' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="totals-row">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="totals-row final-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
