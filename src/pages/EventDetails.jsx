import React from "react";
import { useParams, Link } from "react-router";

function EventDetails({ events, onToggleRegister }) {
  const { id } = useParams();

  const event = events.find((item) => item.id === parseInt(id));

  if (!event) {
    return (
      <div className="page">
        <h2>Event Not Found</h2>
        <Link to="/events" className="btn btn-secondary">
          Back to Events
        </Link>
      </div>
    );
  }

  const seatsLeft = event.totalSeats - event.registered;

  return (
    <div className="page event-details-page">
      <Link to="/events" className="back-link">
        ← Back to Events
      </Link>

      <div className="details-card">
        <div className="details-header">
          <h2>{event.name}</h2>
          {seatsLeft >= 1 && seatsLeft <= 5 && (
            <span className="badge badge-warning">Filling Fast</span>
          )}
        </div>

        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <p><strong>Coordinator:</strong> {event.coordinator}</p>
        <p><strong>Fee:</strong> {event.fee === 0 ? "Free" : `₹${event.fee}`}</p>
        <p><strong>Total Seats:</strong> {event.totalSeats}</p>
        <p><strong>Registered Count:</strong> {event.registered}</p>
        <p><strong>Seats Left:</strong> {seatsLeft}</p>

        <div className="details-actions">
          {event.isRegistered ? (
            <button
              onClick={() => onToggleRegister(event.id)}
              className="btn btn-withdraw"
            >
              Unregister
            </button>
          ) : seatsLeft === 0 ? (
            <button disabled className="btn btn-disabled">
              Housefull
            </button>
          ) : (
            <button
              onClick={() => onToggleRegister(event.id)}
              className="btn btn-apply"
            >
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
