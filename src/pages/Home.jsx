import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="main-content">

        
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="section-label">Welcome</span>
                        <h1>Life through <span>my lens</span></h1>
                        <p>Fashion, beauty, travel, tech, and the stories in between. I'm Lexi, a creative mind navigating
                            lifestyle, engineering, and everything that sparks joy.</p>
                        <div className="hero-cta-group">
                            <a href="/blog" className="btn btn-primary">Read the Blog</a>
                            <a href="/gallery" className="btn btn-outline">View Gallery</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/images/portrait-main.jpg" alt="Alexis Obi — lifestyle and beauty creator" width="720" height="960" loading="eager" />
                    </div>
                </div>
            </div>
        </section>

        
        <section className="featured-section" id="featured-posts">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Latest Stories</span>
                    <h2 className="section-title">From the Blog</h2>
                    <p>Thoughts on life, travel, beauty and everything that catches my eye.</p>
                </div>

                <div className="posts-grid">
                    <article className="post-card reveal">
                        <div className="post-card-image">
                            <a href="/blog"><img src="/images/hero-portrait.jpg" alt="Restauranting in London" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Travel</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="/blog">Restauranting in London, a pic your food affair</a></h3>
                            <p>Exploring London's best eateries through the lens of someone who always photographs their plate first.</p>
                            <a href="/blog" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal">
                        <div className="post-card-image">
                            <a href="/blog"><img src="/images/tech-world.jpg" alt="Entry-level engineer article" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Lifestyle</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="/blog">Entry-Level Engineer</a></h3>
                            <p>A deep dive into the evolving world of networking and what it means for our connected future.</p>
                            <a href="/blog" className="read-more">Read More</a>
                        </div>
                    </article>

                    <article className="post-card reveal">
                        <div className="post-card-image">
                            <a href="/blog"><img src="/images/skin-hacks.jpg" alt="Skin hacks article" width="600" height="450" loading="lazy" decoding="async" /></a>
                        </div>
                        <div className="post-card-body">
                            <div className="post-card-meta">
                                <span className="btn-tag">Beauty</span>
                                <span className="post-card-date">June 5, 2024</span>
                            </div>
                            <h3><a href="/blog">Skin hacks: Autumn shade vs Summer shade</a></h3>
                            <p>The ultimate guide to transitioning your skincare and makeup palette with the seasons.</p>
                            <a href="/blog" className="read-more">Read More</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        
        <section className="about-teaser" id="about-teaser">
            <div className="container">
                <div className="about-teaser-inner reveal">
                    <div className="about-teaser-image">
                        <img src="/images/about-alexis.jpg" alt="Alexis Obi portrait" width="600" height="600" loading="lazy" decoding="async" />
                    </div>
                    <div className="about-teaser-text">
                        <span className="section-label">About Me</span>
                        <h2>I'm Alexis Obi</h2>
                        <p>At my core, I'm a creative soul with a love for fashion, beauty, travel, and technology. My "day
                            job"? I'm a computer engineering student, an entrepreneur and a content creator. When I clock out,
                            I'm on my 1,004 hobbies, curating my experiences, and documenting them here.</p>
                        <p>This space is where all of my worlds collide: lifestyle musings, professional insights, and
                            everything beautiful in between.</p>
                        <a href="/portfolio" className="btn btn-accent mt-sm">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="gallery-preview" id="gallery-preview">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">Visual Stories</span>
                    <h2 className="section-title">Gallery</h2>
                    <p>Moments captured, moods created.</p>
                </div>
            </div>
            <div className="gallery-marquee">
                <div className="gallery-marquee-item"><img src="/images/hero-portrait.jpg" alt="London dining" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/portrait-main.jpg" alt="Portrait" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/fashion-story.jpg" alt="Fashion story" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/weekend-wanderings.jpg" alt="Weekend wanderings" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/skin-hacks.jpg" alt="Skin hacks" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/lifestyle-balance.jpg" alt="Lifestyle balance" width="320" height="427" loading="lazy" decoding="async" /></div>
                
                <div className="gallery-marquee-item"><img src="/images/hero-portrait.jpg" alt="London dining" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/portrait-main.jpg" alt="Portrait" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/fashion-story.jpg" alt="Fashion story" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/weekend-wanderings.jpg" alt="Weekend wanderings" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/skin-hacks.jpg" alt="Skin hacks" width="320" height="427" loading="lazy" decoding="async" /></div>
                <div className="gallery-marquee-item"><img src="/images/lifestyle-balance.jpg" alt="Lifestyle balance" width="320" height="427" loading="lazy" decoding="async" /></div>
            </div>
            <div className="text-center mt-lg">
                <a href="/gallery" className="btn btn-outline">View Full Gallery</a>
            </div>
        </section>

    </main>
  );
}
