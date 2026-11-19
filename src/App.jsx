import React, { useState } from "react";
import { Routes, Route } from "react-router";
import eventsData from "./data/events.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import RegisteredEvents from "./pages/RegisteredEvents.jsx";
import "./App.css";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleToggleRegister(id) {
    const updated = events.map((event) => {
      if (event.id === id) {
        if (event.isRegistered) {
          return {
            ...event,
            isRegistered: false,
            registered: event.registered - 1,
          };
        } else {
          if (event.totalSeats - event.registered <= 0) {
            return event;
          }
          return {
            ...event,
            isRegistered: true,
            registered: event.registered + 1,
          };
        }
      }
      return event;
    });
    setEvents(updated);
  }

  const registeredCount = events.filter((event) => event.isRegistered).length;

  return (
    <div className="app-container">
      <Navbar registeredCount={registeredCount} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/events" element={<Events events={events} onToggleRegister={handleToggleRegister} />} />
          <Route path="/events/:id" element={<EventDetails events={events} onToggleRegister={handleToggleRegister} />} />
          <Route path="/registered" element={<RegisteredEvents events={events} onToggleRegister={handleToggleRegister} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
