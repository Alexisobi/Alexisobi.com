import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <main id="main-content">
        <section className="iso-hero" id="iso-hero">
            <div className="iso-hero-inner">
                <div className="iso-hero-text">
                    <div className="iso-brand-name">ISO</div>
                    <div className="iso-brand-tagline">Hair</div>
                    <p className="iso-brand-desc">Premium hair extensions, hand-selected and curated for quality, texture, and style. Every bundle tells a story.</p>
                    <a href="#iso-products" className="btn btn-primary">Shop Collection</a>
                </div>
                <div className="iso-hero-image">
                    <img src="/images/iso-brand-bag.jpg" alt="ISO Hair brand packaging — kraft bag with ISO logo" width="600" height="600" loading="eager" />
                </div>
            </div>
        </section>

        <section className="iso-story">
            <div className="container">
                <div className="iso-story-inner">
                    <div className="iso-story-col">
                        <span className="iso-story-number">01</span>
                        <h3>Curated Quality</h3>
                        <p>Each bundle is hand-selected for premium texture and lasting softness.</p>
                    </div>
                    <div className="iso-story-col">
                        <span className="iso-story-number">02</span>
                        <h3>Ethically Sourced</h3>
                        <p>We believe in beautiful hair with a clear conscience.</p>
                    </div>
                    <div className="iso-story-col">
                        <span className="iso-story-number">03</span>
                        <h3>Styled For You</h3>
                        <p>Book a consultation to find the perfect match for your look.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="iso-products" id="iso-products">
            <div className="container">
                <div className="section-header reveal">
                    <span className="iso-label">The Collection</span>
                    <h2 className="section-title">Shop ISO Hair</h2>
                    <p>Premium extensions for every style and occasion.</p>
                </div>
                <div className="products-grid">
                    <div className="product-card reveal">
                        <div className="product-card-image">
                            <img src="/images/french-curls.jpg" alt="French Curls hair extensions" width="600" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="product-card-body">
                            <h3>French Curls</h3>
                            <div className="product-specs">
                                <span>Length: 24 inches</span>
                                <span>Weight: 85g per bundle</span>
                            </div>
                            <div className="product-price">₦8,500</div>
                            <button className="btn iso-btn-cart">Add to Cart</button>
                        </div>
                    </div>
                    <div className="product-card reveal">
                        <div className="product-card-image">
                            <img src="/images/deep-wave-hair.jpg" alt="Deep Wave hair extensions" width="600" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="product-card-body">
                            <h3>Deep Wave Extensions</h3>
                            <div className="product-specs">
                                <span>Length: 20 inches</span>
                                <span>Weight: 150g per bundle</span>
                            </div>
                            <div className="product-price">₦9,000</div>
                            <button className="btn iso-btn-cart">Add to Cart</button>
                        </div>
                    </div>
                    <div className="product-card reveal">
                        <div className="product-card-image">
                            <img src="/images/bonestraight-hair.jpg" alt="Silky Bonestraight braiding hair" width="600" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="product-card-body">
                            <h3>Silky Bonestraight Braiding Hair</h3>
                            <div className="product-specs">
                                <span>Length: 20 inches</span>
                                <span>Weight: 150g per bundle</span>
                            </div>
                            <div className="product-price">₦9,000</div>
                            <button className="btn iso-btn-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="iso-packaging">
            <div className="iso-packaging-inner">
                <div className="iso-packaging-image">
                    <img src="/images/iso-packaging.jpg" alt="ISO Hair packaging and presentation" width="800" height="500" loading="lazy" decoding="async" />
                </div>
                <div className="iso-packaging-text">
                    <span className="iso-label">The ISO Experience</span>
                    <h2>More Than Just Hair</h2>
                    <p>Every order arrives in our signature ISO kraft packaging — because the experience should feel as premium as the product itself.</p>
                    <p>From the moment you open the bag to the first time you style your new hair, ISO is designed to make you feel confident and beautiful.</p>
                    <a href="/portfolio" className="btn btn-outline mt-sm">Book a Consultation</a>
                </div>
            </div>
        </section>
    </main>
  );
}
