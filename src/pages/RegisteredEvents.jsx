import React from "react";
import EventCard from "../components/EventCard.jsx";

function RegisteredEvents({ events, onToggleRegister }) {
  const registeredEvents = events.filter((event) => event.isRegistered);
  const totalFee = registeredEvents.reduce((sum, item) => sum + item.fee, 0);

  return (
    <div className="page registered-page">
      <h2>My Registered Events</h2>

      {registeredEvents.length === 0 ? (
        <p className="no-data">No events registered</p>
      ) : (
        <>
          <div className="fee-status">
            <p>
              <strong>Total Fee to Pay:</strong> ₹{totalFee}
            </p>
          </div>
          <div className="event-list">
            {registeredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onToggleRegister={onToggleRegister}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default RegisteredEvents;
