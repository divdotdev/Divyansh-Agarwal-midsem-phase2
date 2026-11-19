import React, { useState } from "react";
import EventCard from "../components/EventCard.jsx";

function Events({ events, onToggleRegister }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "All") {
      return true;
    }
    return event.category === selectedCategory;
  });

  return (
    <div className="page events-page">
      <h2>College Fest Events</h2>

      <div className="filter-section">
        <label htmlFor="categoryFilter">Filter by Category: </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.length === 0 ? (
          <p>No events found for this category.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onToggleRegister={onToggleRegister}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Events;
