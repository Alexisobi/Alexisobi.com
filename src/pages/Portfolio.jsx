import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <main id="main-content">
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">What I Do</span>
                    <h1>Portfolio & Services</h1>
                    <p className="page-hero-subtitle">Professional services spanning engineering, technology, and beauty consultation.</p>
                </div>
            </section>

            <section className="featured-work-section" style={{ padding: '80px 0', background: 'var(--color-surface)' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-label">Featured Project</span>
                        <h2 className="section-title">PrimeTech Design & Engineering</h2>
                        <p>A glimpse into my recent engineering work and creative activity.</p>
                    </div>
                    <div className="video-container reveal" style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <video
                            src="/videos/PrimeTech_optimized.m4v"
                            poster="/images/primetech-thumbnail-new.jpg"
                            controls
                            playsInline
                            preload="metadata"
                            style={{ display: 'block', width: '100%', maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#000' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="reveal" style={{ textAlign: 'center', marginTop: '30px' }}>
                        <a href="https://www.linkedin.com/posts/primetech-design-and-engineering-nigeria-ltd_primetechdesignengineering-innovation-creativity-activity-7250414581326434304-5OdO" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View Full Post on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <section className="portfolio-section">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-label">Consultation Services</span>
                        <h2 className="section-title">How I Can Help</h2>
                        <p>From technical solutions to personal styling — I bring a unique blend of expertise to every project.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card reveal">
                            <div className="service-card-image">
                                <img src="/images/iso-brand-bag.jpg" alt="Hair consultation — ISO Hair brand packaging" width="600" height="750" loading="lazy" decoding="async" />
                            </div>
                            <div className="service-card-body">
                                <span className="section-label">Beauty</span>
                                <h3>Hair Consultation</h3>
                                <p>Private consultation for ISO hair bundles catered to customer preference. From texture selection to colour matching, I'll help you find the perfect look.</p>
                                <a href="#" className="btn btn-accent">Inquire Now</a>
                            </div>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-card-image">
                                <img src="/images/building-services.jpg" alt="Building services engineering consultation" width="600" height="750" loading="lazy" decoding="async" />
                            </div>
                            <div className="service-card-body">
                                <span className="section-label">Engineering</span>
                                <h3>Building Services Design</h3>
                                <p>Electrical building services design and consultation. Bringing technical excellence and attention to detail to every project.</p>
                                <a href="#" className="btn btn-accent">Inquire Now</a>
                            </div>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-card-image">
                                <img src="/images/tech-world.jpg" alt="Tech consultation" width="600" height="750" loading="lazy" decoding="async" />
                            </div>
                            <div className="service-card-body">
                                <span className="section-label">Technology</span>
                                <h3>Tech Solutions</h3>
                                <p>Providing consultation to businesses that require technological and process solutions. From software development to automation of workflows.</p>
                                <a href="#" className="btn btn-accent">Inquire Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-teaser">
                <div className="container">
                    <div className="about-teaser-inner reveal">
                        <div className="about-teaser-image">
                            <img src="/images/about-alexis.jpg" alt="Alexis Obi" width="600" height="600" loading="lazy" decoding="async" />
                        </div>
                        <div className="about-teaser-text">
                            <span className="section-label">My Background</span>
                            <h2>A Multi-Disciplinary Creative</h2>
                            <p>With a foundation in computer engineering and a passion for technology, I bring analytical thinking and creative problem-solving to everything I do.</p>
                            <p>My work spans diverse fields, yet my philosophy remains consistent: whether I am providing high-level tech strategy, architecting complex building electrical systems, or offering personalized consultations to help clients find their perfect hair match, I lead with curiosity and a genuine commitment to quality.</p>
                            <div className="cta-group mt-md">
                                <a href="https://www.linkedin.com/in/alexisobionIn" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg className="icon-svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zm-46.4-340a53.8 53.8 0 110-107.6 53.8 53.8 0 010 107.6zm394.1 340h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg> LinkedIn
                                </a>
                                <a href="mailto:hello@alexisobi.com" className="btn btn-outline">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
