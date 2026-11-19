import React from "react";
import { Link } from "react-router";

function EventCard({ event, onToggleRegister }) {
  const seatsLeft = event.totalSeats - event.registered;

  return (
    <div className="event-card">
      <div className="card-header">
        <h3>{event.name}</h3>
        {seatsLeft >= 1 && seatsLeft <= 5 && (
          <span className="badge badge-warning">Filling Fast</span>
        )}
      </div>

      <p className="category"><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Fee:</strong> {event.fee === 0 ? "Free" : `₹${event.fee}`}</p>
      <p><strong>Seats Left:</strong> {seatsLeft}</p>

      <div className="card-actions">
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

        <Link to={`/events/${event.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
