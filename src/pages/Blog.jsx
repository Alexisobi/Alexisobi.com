import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main id="main-content">

        
        <section className="blog-hero">
            <div className="container">
                <span className="section-label">The Blog</span>
                <p className="font-script blog-subtitle">A collection of thoughts and experiences.</p>
            </div>
        </section>

        
        <section className="blog-featured-section blog-featured-section--compact">
            <div className="container">
                <div className="blog-featured reveal">
                    <div className="blog-featured-image">
                        <img src="/images/hero-portrait.jpg" alt="Restauranting in London — dining scene" width="800" height="500" loading="eager" />
                    </div>
                    <div className="blog-featured-body">
                        <span className="section-label">Featured</span>
                        <h1>Restauranting in London, a pic your food affair</h1>
                        <p>From hidden gems in Soho to rooftop dining in Shoreditch — my curated list of London's most
                            photogenic restaurants, with honest reviews and plenty of food photography tips.</p>
                        <div className="blog-featured-meta">
                            <span className="btn-tag">Travel</span>
                            <span className="blog-featured-date">June 5, 2024</span>
                        </div>
                        <a href="#" className="btn btn-primary">Read Article</a>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="blog-list">
            <div className="container">
                <div className="filters-container reveal">
                    <div className="font-script filters-heading">I'm looking for:</div>
                    <div className="blog-filters">
                        <button className="filter-btn active" data-filter="all" aria-pressed="true">All</button>
                        <button className="filter-btn" data-filter="lifestyle" aria-pressed="false">Lifestyle</button>
                        <button className="filter-btn" data-filter="travel" aria-pressed="false">Travel</button>
                        <button className="filter-btn" data-filter="beauty" aria-pressed="false">Beauty</button>
                        <button className="filter-btn" data-filter="fashion" aria-pressed="false">Fashion</button>
                    </div>
                </div>

                <div className="posts-grid">
                    <article className="post-card reveal" data-category="travel">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/tech-world.jpg" alt="Entry-level engineer article" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Lifestyle</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="#">Entry-Level Engineer</a></h3>
                            <p>A deep dive into the evolving world of networking and what it means for our connected future.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal" data-category="beauty">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/skin-hacks.jpg" alt="Skin hacks — autumn vs summer shades" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Beauty</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="#">Skin hacks: Autumn shade vs Summer shade</a></h3>
                            <p>The ultimate guide to transitioning your skincare and makeup palette with the seasons.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal" data-category="fashion">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/fashion-story.jpg" alt="Fashion story" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Fashion</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="#">The shirt that had the men bidding, a work story</a></h3>
                            <p>A workplace fashion moment that turned heads and started conversations.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal" data-category="lifestyle">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/lifestyle-balance.jpg" alt="Finding balance" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Lifestyle</span>
                                <span className="post-card-date">May 11, 2025</span>
                            </div>
                            <h3><a href="#">Finding balance: engineer by day, creative by night</a></h3>
                            <p>How I navigate the intersection of technical work and creative expression in my daily life.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal" data-category="lifestyle">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/weekend-wanderings.jpg" alt="Weekend wanderings" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Lifestyle</span>
                                <span className="post-card-date">May 11, 2025</span>
                            </div>
                            <h3><a href="#">Weekend wanderings: curating the perfect getaway</a></h3>
                            <p>My tried-and-tested formula for making the most of short trips and long weekends.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal" data-category="beauty">
                        <div className="post-card-image">
                            <a href="#"><img src="/images/haircare.jpg" alt="Hair extensions guide" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Beauty</span>
                                <span className="post-card-date">April 20, 2025</span>
                            </div>
                            <h3><a href="#">Hair extensions 101: a beginner's guide</a></h3>
                            <p>Everything you need to know about choosing, styling, and maintaining quality hair extensions.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

    </main>
  );
}
