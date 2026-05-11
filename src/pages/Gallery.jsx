import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  useEffect(() => {
    document.body.classList.add('gallery-page');
    return () => {
      document.body.classList.remove('gallery-page');
    };
  }, []);
  return (
    <main id="main-content">

        
        <section className="gallery-hero">
            <h1>GALLERY</h1>
        </section>

        
        <section className="gallery-grid-section gallery-grid-section--dark">
            <div className="gallery-grid">
                <div className="gallery-item tall">
                    <img src="/images/portrait-main.jpg" alt="Portrait of Alexis Obi" width="600" height="1200" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Portrait</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/hero-portrait.jpg" alt="London dining experience" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>London Dining</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/tech-world.jpg" alt="Technology and cybersecurity" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Tech World</span></div>
                </div>
                <div className="gallery-item wide">
                    <img src="/images/weekend-wanderings.jpg" alt="Lifestyle and weekend adventures" width="1200" height="675" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Lifestyle</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/fashion-story.jpg" alt="Fashion editorial moment" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Fashion Moment</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/skin-hacks.jpg" alt="Beauty and skincare" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Beauty</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/lifestyle-balance.jpg" alt="Lifestyle and style" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Style</span></div>
                </div>
                <div className="gallery-item tall">
                    <img src="/images/iso-packaging.jpg" alt="Professional consultation" width="600" height="1200" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Professional</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/engineering.jpg" alt="Engineering and technical work" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Engineering</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/iso-brand-bag.jpg" alt="ISO Hair tech solutions" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Tech Solutions</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/haircare.jpg" alt="Captured moments" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Moments</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/captured-moment.jpg" alt="Captured scene" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Captured</span></div>
                </div>
                <div className="gallery-item wide">
                    <img src="/images/about-alexis.jpg" alt="Golden hour portrait" width="1200" height="675" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Golden Hour</span></div>
                </div>
                <div className="gallery-item">
                    <img src="/images/deep-wave-hair.jpg" alt="Hair textures and styling" width="600" height="600" loading="lazy" decoding="async" />
                    <div className="gallery-item-overlay"><span>Textures</span></div>
                </div>
            </div>
        </section>

        
        <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
            <button className="lightbox-close" aria-label="Close image viewer">&times;</button>
            <img id="lightbox-img" src="" alt="Gallery image full view" />
        </div>

    </main>
  );
}
