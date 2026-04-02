"use client";
import React, { useState } from "react";
import "./dinner.scss";

const MENU_DATA = [
  {
    category: "Starter",
    items: [
      { name: "Roasted Tomato Soup", tag: "Vegan", tagColor: "#4CAF50" },
      { name: "Garden Salad", tag: "Vegetarian", tagColor: "#8BC34A" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { name: "Grilled Paneer Steak", tag: "Vegetarian", tagColor: "#8BC34A" },
      { name: "Herb Rice & Veggies", tag: "Vegan", tagColor: "#4CAF50" },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Chocolate Mousse", tag: "Gluten Free", tagColor: "#9C27B0" },
      { name: "Fruit Platter", tag: "Vegan", tagColor: "#4CAF50" },
    ],
  },
];

const Dinner: React.FC = () => {
  const [searchName, setSearchName] = useState("");
  const [seatResult, setSeatResult] = useState<string | null>(null);

  const handleFindSeat = () => {
    if (searchName.trim()) {
      const tables = ["A", "B", "C", "D", "E", "F"];
      const randomTable = tables[Math.floor(Math.random() * tables.length)];
      const randomSeat = Math.floor(Math.random() * 8) + 1;
      setSeatResult(`Table ${randomTable}, Seat ${randomSeat}`);
    }
  };

  return (
    <section className="dinner" id="dinner">
      <div className="dinner__container">

        {/* Hero */}
        <div className="dinner__hero">
          <div className="dinner__hero-text">
            <h1 className="dinner__hero-title">Gala Dinner</h1>
            <p className="dinner__hero-desc">
              An elegant evening of celebration, connection, and recognition —
              bringing together shapers from around the globe.
            </p>
          </div>
          <button className="dinner__hero-btn">RSVP Now</button>
        </div>

        {/* Seating */}
        <div className="dinner__seating">
          <h2 className="dinner__section-title">Seating Finder</h2>

        <div className="dinner__seating-search">
          <input
            type="text"
            className="dinner__seating-input"
            placeholder="Enter your name"
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
              setSeatResult(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleFindSeat()}
          />
          <button
            className="dinner__seating-btn"
            onClick={handleFindSeat}
          >
            Find Seat →
          </button>
        </div>

        {seatResult && (
          <div className="dinner__seating-result">
            <span className="dinner__seating-result-name">
              {searchName}
            </span>
            <span className="dinner__seating-result-seat">
              {seatResult}
            </span>
          </div>
        )}
      </div>

        {/* Menu */}
        <div className="dinner__menu">
          <h2 className="dinner__section-title">Dinner Menu</h2>

          <div className="dinner__menu-grid">
            {MENU_DATA.map((section) => (
              <div
                className="dinner__menu-card"
                key={section.category}
              >
                <h3 className="dinner__menu-card-title">
                  {section.category}
                </h3>

                <ul className="dinner__menu-card-list">
                  {section.items.map((item) => (
                    <li
                      className="dinner__menu-card-item"
                      key={item.name}
                    >
                      <span className="dinner__menu-card-name">
                        {item.name}
                      </span>

                      <span
                        className="dinner__menu-card-tag"
                        style={{
                          background: item.tagColor + "22",
                          color: item.tagColor,
                          borderColor: item.tagColor + "44",
                        }}
                      >
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dinner;