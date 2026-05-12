import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_POSTS = [
    {
        id: 1,
        category: 'lifestyle',
        tag: 'Lifestyle',
        date: 'June 5, 2024',
        title: 'Entry-Level Engineer',
        excerpt: 'A deep dive into the evolving world of networking and what it means for our connected future.',
        image: '/images/tech-world.jpg'
    },
    {
        id: 2,
        category: 'beauty',
        tag: 'Beauty',
        date: 'June 5, 2024',
        title: 'Skin hacks: Autumn shade vs Summer shade',
        excerpt: 'The ultimate guide to transitioning your skincare and makeup palette with the seasons.',
        image: '/images/skin-hacks.jpg'
    },
    {
        id: 3,
        category: 'fashion',
        tag: 'Fashion',
        date: 'June 5, 2024',
        title: 'The shirt that had the men bidding, a work story',
        excerpt: 'A workplace fashion moment that turned heads and started conversations.',
        image: '/images/fashion-story.jpg'
    },
    {
        id: 4,
        category: 'lifestyle',
        tag: 'Lifestyle',
        date: 'May 11, 2025',
        title: 'Finding balance: engineer by day, creative by night',
        excerpt: 'How I navigate the intersection of technical work and creative expression in my daily life.',
        image: '/images/lifestyle-balance.jpg'
    },
    {
        id: 5,
        category: 'lifestyle',
        tag: 'Lifestyle',
        date: 'May 11, 2025',
        title: 'Weekend wanderings: curating the perfect getaway',
        excerpt: 'My tried-and-tested formula for making the most of short trips and long weekends.',
        image: '/images/weekend-wanderings.jpg'
    },
    {
        id: 6,
        category: 'beauty',
        tag: 'Beauty',
        date: 'April 20, 2025',
        title: "Hair extensions 101: a beginner's guide",
        excerpt: 'Everything you need to know about choosing, styling, and maintaining quality hair extensions.',
        image: '/images/haircare.jpg'
    }
];

export default function Blog() {
    const [filter, setFilter] = useState('all');

    const filteredPosts = filter === 'all' 
        ? ALL_POSTS 
        : ALL_POSTS.filter(post => post.category === filter);

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
                            <img src="/images/hero-portrait.jpg" alt="Restauranting in London" width="800" height="500" loading="eager" />
                        </div>
                        <div className="blog-featured-body">
                            <span className="section-label">Featured</span>
                            <h1>Restauranting in London, a pic your food affair</h1>
                            <p>From hidden gems in Soho to rooftop dining in Shoreditch — my curated list of London's most photogenic restaurants, with honest reviews and plenty of food photography tips.</p>
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
                            {['all', 'lifestyle', 'travel', 'beauty', 'fashion'].map((cat) => (
                                <button 
                                    key={cat}
                                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                    onClick={() => setFilter(cat)}
                                    aria-pressed={filter === cat}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="posts-grid">
                        {filteredPosts.map((post) => (
                            <article key={post.id} className="post-card reveal" data-category={post.category}>
                                <div className="post-card-image">
                                    <a href="#"><img src={post.image} alt={post.title} width="600" height="450" loading="lazy" decoding="async" /></a>
                                </div>
                                <div className="post-card-body">
                                    <div className="post-card-meta">
                                        <span className="btn-tag">{post.tag}</span>
                                        <span className="post-card-date">{post.date}</span>
                                    </div>
                                    <h3><a href="#">{post.title}</a></h3>
                                    <p>{post.excerpt}</p>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
