"use client";
import React, { useState } from 'react';
import './shapers.scss';

// Mock Data representing the image provided
const SHAPERS = [
  { id: '1', name: 'Aanal Vyas', role: 'Global Shaper, Ahmedabad Hub', color: 'rgba(24, 72, 151, 0.1)' },
  { id: '2', name: 'Aananth Daksnamurthy', role: 'Global Shaper, Puducherry Hub', color: 'rgba(0, 101, 242, 0.1)' },
  { id: '3', name: 'Aardra Chandra Mouli', role: 'Founding Curator and Alumni, Thiruv...', color: 'rgba(10, 19, 60, 0.1)' },
  { id: '4', name: 'Aaron Sherwood', role: 'Global Shaper, London II Hub', organization: 'World Economic Forum', color: 'rgba(24, 72, 151, 0.2)' },
  { id: '5', name: 'Aarushi Sharma', role: 'Global Shaper, New Delhi Hub', color: 'rgba(0, 101, 242, 0.15)' },
  { id: '6', name: 'Aaron Lee', role: 'Global Shaper, Singapore Hub', color: 'rgba(10, 19, 60, 0.05)' },
  { id: '7', name: 'Aashna Patel', role: 'Global Shaper, Mumbai Hub', color: 'rgba(24, 72, 151, 0.08)' },
  { id: '8', name: 'Abbas Al-Ali', role: 'Global Shaper, Dubai Hub', color: 'rgba(0, 101, 242, 0.08)' },
];

const FILTER_OPTIONS = ['Locations', 'Organizations', 'Projects', 'Industries', 'Insights', 'More filters'];

const DUMMY_DROPDOWN_DATA: Record<string, string[]> = {
  'Locations': ['Ahmedabad Hub', 'Dubai Hub', 'London Hub', 'New Delhi Hub', 'Singapore Hub'],
  'Organizations': ['World Economic Forum', 'United Nations', 'Google', 'Microsoft'],
  'Projects': ['Climate Action', 'Education Reform', 'Health Tech', 'AI Ethics'],
  'Industries': ['Technology', 'Finance', 'Healthcare', 'NGO'],
  'Insights': ['Annual Reports', 'Blog Articles', 'Interviews'],
  'More filters': ['Alumni', 'Current Shapers', 'Curators']
};

const Shapers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <section className="shapers" id="shapers">
      <div className="shapers__container">
        
        {/* Shapers Hero Section */}
        <div className="shapers__hero">
          <div className="shapers__hero-text">
            <h1 className="shapers__hero-title">Global Shapers</h1>
            <p className="shapers__hero-desc">Explore and connect with our community of changemakers around the world.</p>
          </div>
          <button className="shapers__hero-btn">Become a Shaper</button>
        </div>

        {/* Filters Top Bar */}
        <div className="shapers__filters-bar">
          <div className="shapers__search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shapers__search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="shapers__search-input" 
              placeholder="Search for..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="shapers__dropdowns">
            {FILTER_OPTIONS.map((filter, idx) => {
              const isActive = activeDropdown === filter;
              return (
                <div className="shapers__dropdown-wrap" key={idx}>
                  <button 
                    className={`shapers__dropdown-btn ${isActive ? 'shapers__dropdown-btn--active' : ''}`}
                    onClick={() => setActiveDropdown(isActive ? null : filter)}
                  >
                    {filter}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shapers__dropdown-icon">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  
                  {isActive && DUMMY_DROPDOWN_DATA[filter] && (
                    <div className="shapers__dropdown-menu">
                      {DUMMY_DROPDOWN_DATA[filter].map(item => (
                        <label className="shapers__dropdown-item" key={item}>
                          <input type="checkbox" className="shapers__dropdown-checkbox" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="shapers__sort">
            <span className="shapers__sort-label">Sort by: <strong style={{color: '#0A133C'}}>A → Z</strong></span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shapers__dropdown-icon">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="shapers__header">
          <h2 className="shapers__title">5265 Members</h2>
        </div>

        {/* Grid */}
        <div className="shapers__grid">
          {SHAPERS.map((shaper) => (
            <div className="shaper-card" key={shaper.id}>
              {/* Image Placeholder - since we don't have the real photos */}
              <div 
                className="shaper-card__image-placeholder" 
                style={{ background: shaper.color }}
              >
                <span className="shaper-card__initials">
                  {shaper.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Content */}
              <div className="shaper-card__content">
                <h3 className="shaper-card__name">{shaper.name}</h3>
                <p className="shaper-card__role">{shaper.role}</p>
                {shaper.organization && (
                  <p className="shaper-card__org">{shaper.organization}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Shapers;
