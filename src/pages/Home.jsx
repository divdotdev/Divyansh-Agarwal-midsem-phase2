import React from "react";
import { Link } from "react-router";

function Home({ events }) {
  const totalEvents = events.length;
  const registeredEvents = events.filter((event) => event.isRegistered).length;
  const freeEvents = events.filter((event) => event.fee === 0).length;

  return (
    <div className="page home-page">
      <h1>Welcome to College Fest 2026</h1>
      <p className="intro-text">
        Join the most exciting technical, cultural, and sports events of the year. Browse events, filter by category, and register today!
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Events</h3>
          <p className="stat-number">{totalEvents}</p>
        </div>

        <div className="stat-card">
          <h3>Registered Events</h3>
          <p className="stat-number">{registeredEvents}</p>
        </div>

        <div className="stat-card">
          <h3>Free Events</h3>
          <p className="stat-number">{freeEvents}</p>
        </div>
      </div>

      <div className="home-action">
        <Link to="/events" className="btn btn-primary">
          Explore Events
        </Link>
      </div>
    </div>
  );
}

export default Home;
