import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => els?.forEach((el) => observer.unobserve(el));
  }, []);
  return ref;
}

export default function Home({ onOpenCart }) {
  const pageRef = useScrollReveal();
  const bestsellers = products.filter(p => p.isBestseller);
  const newArrivals = products.filter(p => p.isNew);

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className="container hero-split">
        <div className="hero-text-block">
          <span className="eyebrow animate-fade-up delay-100">Collection 01</span>
          <h1 style={{ marginBottom: 'var(--space-lg)' }}>
            <span className="mask-line"><span className="mask-content delay-100">The quiet art</span></span><br/>
            <span className="mask-line"><span className="mask-content delay-200">of dressing well.</span></span>
          </h1>
          <p className="hero-subtitle animate-fade-up delay-300">
            Refined textures and considered silhouettes for those who understand that true style whispers.
          </p>
          <div className="animate-fade-up delay-400">
            <Link to="/collection" className="btn-primary" style={{ textDecoration: 'none' }}>
              Explore Collection
              <span className="btn-icon-wrapper">
                <ArrowRight size={15} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-media-block animate-fade-up delay-400">
          <div className="double-bezel">
            <div className="double-bezel-inner">
              <img src="/images/hero.png" alt="Aura Apparel Editorial" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="marquee-item">
              Considered Materials <span className="marquee-dot" /> Timeless Design <span className="marquee-dot" /> Lifetime Craft <span className="marquee-dot" /> Sustainable Sourcing <span className="marquee-dot" /> Enduring Quality <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="container section">
        <div className="reveal" style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">The Disciplines</span>
          <h2>A curation of form<br/>and function.</h2>
        </div>
        <div className="bento-grid">
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              to={`/collection/${cat.id}`}
              className={`${idx === 0 ? 'bento-item-wide' : ''} double-bezel reveal reveal-delay-${idx + 1}`}
            >
              <div className="double-bezel-inner">
                <img src={cat.image} alt={cat.name} />
                <div className="bento-content">
                  <h3>{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container section">
        <div className="section-header reveal">
          <h2>Bestsellers</h2>
          <Link to="/collection" className="btn-text">View All</Link>
        </div>
        <div className="product-grid">
          {bestsellers.map((product, idx) => (
            <ProductCard key={product.id} product={product} className={`reveal reveal-delay-${idx + 1}`} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container section">
        <div className="section-header reveal">
          <h2>New Arrivals</h2>
          <Link to="/collection" className="btn-text">View All</Link>
        </div>
        <div className="product-grid">
          {newArrivals.map((product, idx) => (
            <ProductCard key={product.id} product={product} className={`reveal reveal-delay-${idx + 1}`} />
          ))}
        </div>
      </section>

      {/* EXCLUSIVE OFFER */}
      <section className="container" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 0 }}>
        <div className="offer-banner reveal">
          <div className="offer-banner-bg">
            <img src="/images/offer-banner.png" alt="Aura Exclusive Sale" />
          </div>
          <div className="offer-banner-content">
            <span className="eyebrow" style={{ color: 'var(--color-bg)', borderColor: 'rgba(255,255,255,0.2)' }}>Private Sale</span>
            <h2 style={{ color: 'var(--color-bg)', marginBottom: 'var(--space-md)' }}>The Archive Event</h2>
            <p style={{ color: 'rgba(253, 251, 247, 0.8)', marginBottom: 'var(--space-xl)', maxWidth: '400px' }}>
              Enjoy up to 30% off selected pieces from our previous collections. An opportunity to invest in enduring design.
            </p>
            <Link to="/collection" className="btn-primary" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-primary)' }}>
              Shop the Event
              <span className="btn-icon-wrapper" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg)' }}>
                <ArrowRight size={15} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY (Replaces Value Props) */}
      <section className="container brand-philosophy-section">
        <div className="philosophy-grid">
          <div className="philosophy-image-col reveal">
            <div className="double-bezel">
              <div className="double-bezel-inner">
                <img src="/images/category-objects.png" alt="Aura Brand Philosophy" />
              </div>
            </div>
          </div>
          <div className="philosophy-content-col">
            <span className="eyebrow reveal delay-100">Our Ethos</span>
            <h2 className="reveal delay-200" style={{ marginBottom: 'var(--space-2xl)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Intentionally crafted<br/>for permanence.</h2>
            
            <div className="philosophy-pillars">
              <div className="pillar-item reveal delay-300">
                <div className="pillar-header">
                  <span className="pillar-num">01</span>
                  <h3 className="pillar-title">Considered Materials</h3>
                </div>
                <p className="pillar-desc">Sourced from historic Italian and Japanese mills committed to longevity. Our fibers are chosen for character and endurance, not fleeting trend cycles.</p>
              </div>

              <div className="pillar-item reveal delay-400">
                <div className="pillar-header">
                  <span className="pillar-num">02</span>
                  <h3 className="pillar-title">Universal Transit</h3>
                </div>
                <p className="pillar-desc">Complimentary expedited shipping worldwide on orders above $200. Each piece is tracked, insured, and impeccably packaged in sustainable materials.</p>
              </div>

              <div className="pillar-item reveal delay-500">
                <div className="pillar-header">
                  <span className="pillar-num">03</span>
                  <h3 className="pillar-title">Lifecycle Guarantee</h3>
                </div>
                <p className="pillar-desc">We stand resolutely behind our construction. Structural repairs and conditioning are complimentary for the lifetime of every garment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
