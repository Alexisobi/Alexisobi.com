import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="main-content">
        <section className="error-page">
            <div className="error-content">
                <div className="error-code">404</div>
                <h1>Page not found</h1>
                <p>The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
                <div className="cta-group" style={{"justifyContent":"center"}}>
                    <a href="/" className="btn btn-primary">Go Home</a>
                    <a href="/blog" className="btn btn-outline">Read the Blog</a>
                </div>
            </div>
        </section>
    </main>
  );
}
