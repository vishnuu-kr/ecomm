import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';

export default function SearchOverlay() {
  const [query, setQuery] = useState('');
  const { dispatch } = useStore();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const results = query.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.type.toLowerCase().includes(query.toLowerCase()) ||
        p.color.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const close = () => dispatch({ type: 'TOGGLE_SEARCH' });

  const go = (id) => {
    close();
    navigate(`/product/${id}`);
  };

  return (
    <div className="search-overlay" onClick={close}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-row">
          <Search size={20} strokeWidth={1.5} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="search-input"
          />
          <button className="icon-btn" onClick={close} aria-label="Close search">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {query.length > 1 && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="search-empty">No results for "{query}"</p>
            ) : (
              results.map(p => (
                <button key={p.id} className="search-result-item" onClick={() => go(p.id)}>
                  <img src={p.image} alt={p.name} className="search-result-img" />
                  <div>
                    <p className="search-result-name">{p.name}</p>
                    <p className="search-result-price">${p.price}</p>
                  </div>
                </button>
              ))
            )}
          </div>
        )}

        {query.length <= 1 && (
          <div className="search-suggestions">
            <p className="search-suggestions-label">Popular</p>
            {['Wool', 'Linen', 'Cotton', 'Blazer', 'Dress'].map(term => (
              <button key={term} className="search-tag" onClick={() => setQuery(term)}>
                {term}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
