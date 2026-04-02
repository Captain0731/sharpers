"use client";
import React from 'react';
import './about.scss';

const About: React.FC = () => {
  return (
    <section
      className="about"
      id="about"
    >
      {/* Title */}
      <h2 className="about__title about__reveal">About Us</h2>

      {/* Description Box */}
      <div className="about__description-box about__reveal about__reveal--delay-1">
        <p className="about__description">
          Welcome to the hub of innovation and experiences. Varchas connects visionary ideas, inspiring people, and unforgettable moments. Our platform is designed to elevate every aspect of event management, creating seamless harmony from start to finish.
        </p>
      </div>

      {/* Two Columns Grid */}
      <div className="about__grid">
        {/* Left Column: Image */}
        <div className="about__image-wrapper about__reveal about__reveal--delay-2">
          <div className="about__image-placeholder">
            <div className="icon">✨</div>
            <span>Varchas</span>
          </div>
        </div>

        {/* Right Column: Information container */}
        <div className="about__info-box about__reveal about__reveal--delay-3">
          <div className="about__info-content">
            <h3 className="about__info-title">Information</h3>
            <p className="about__info-text">
              Discover a premium ecosystem built purely for event organizers and attendees. Manage RSVPs, check-in seamlessly with QR passes, and explore detailed event agendas like never before.
              <br /><br />
              Ready to take your events to the next level? Explore the possibilities with us!
            </p>
          </div>

          <div className="about__action">
            <button className="about__button">
              Explore More
            </button>
            <button className="about__arrow-btn" aria-label="Arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
