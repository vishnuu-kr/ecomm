import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Collection() {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => { window.scrollTo(0, 0); }, [category]);

  const types = [...new Set(products.map(p => p.type))];

  let filtered = products;
  if (category) filtered = filtered.filter(p => p.category === category);
  if (selectedTypes.length > 0) filtered = filtered.filter(p => selectedTypes.includes(p.type));

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'newest') filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  const toggleType = (type) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const title = category
    ? category === 'women' ? 'Womenswear' : category === 'men' ? 'Menswear' : 'Objects'
    : 'All Collection';

  return (
    <div className="container" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>

      <div className="collection-header">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{title}</h1>
        <div className="collection-controls">
          <button className="filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filter
          </button>
          <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Filter chips */}
      {filterOpen && (
        <div className="filter-panel">
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)', marginBottom: 'var(--space-md)' }}>Type</p>
          <div className="filter-chips">
            {types.map(type => (
              <button
                key={type}
                className={`filter-chip ${selectedTypes.includes(type) ? 'active' : ''}`}
                onClick={() => toggleType(type)}
              >
                {type}
                {selectedTypes.includes(type) && <X size={12} style={{ marginLeft: '0.25rem' }} />}
              </button>
            ))}
          </div>
          {selectedTypes.length > 0 && (
            <button className="btn-text" style={{ marginTop: 'var(--space-md)' }} onClick={() => setSelectedTypes([])}>
              Clear All
            </button>
          )}
        </div>
      )}

      <p style={{ color: 'var(--color-secondary)', fontSize: '0.8rem', marginBottom: 'var(--space-xl)' }}>
        {filtered.length} product{filtered.length !== 1 ? 's' : ''}
      </p>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
          <p style={{ color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)' }}>No products match your filters.</p>
          <button className="btn-text" onClick={() => { setSelectedTypes([]); setSortBy('featured'); }}>
            Reset filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((product, idx) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
