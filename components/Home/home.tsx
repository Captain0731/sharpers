"use client";
import React from "react";
import "./home.scss";


// ── Hero Component ─────────────────────────────────────
const Home: React.FC = () => {
  const handleGetStarted = () => {
    const el = document.getElementById("events");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      {/* Background glow blobs */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>




      {/* Main content */}
      <div className="hero__content">
        {/* Live pill badge */}
        <div className="hero__pill">
          <span className="hero__pill-pulse" />
          Welcome to the official Varchas Event Portal
        </div>

        {/* Overline */}
        <p className="hero__overline">Welcome to</p>

        {/* Big title block — line 1 */}
        <div className="hero__title-wrap">
          <div className="hero__title-row hero__title-row--1">
            <h1 className="hero__title hero__title--shimmer">AWESOME</h1>

          </div>

          {/* Big title block — line 2 */}
          <div className="hero__title-row hero__title-row--2">
            {/* Inline CTA buttons — sit between the two title lines */}
            <div className="hero__inline-actions">
              <button
                className="hero__btn-primary"
                onClick={handleGetStarted}
                aria-label="Get Started"
              >
                Get Started
              </button>
              <button
                className="hero__btn-play"
                aria-label="Arrow Button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M3.5 2L12 7L3.5 12V2Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <h1 className="hero__title hero__title--accent hero__title--shimmer">
              EVENTS
              <span className="hero__exclaim">!</span>
            </h1>
          </div>
        </div>

        {/* Devanagari subtitle */}
        <p className="hero__devanagari">
          वर्चस् · The Hub for Events, Speakers &amp; Connections
        </p>

        {/* Description */}
        <p className="hero__desc">
          Where ideas become events, moments become memories,
          <br />
          and leaders emerge.
        </p>
      </div>
    </section>
  );
};

export default Home;