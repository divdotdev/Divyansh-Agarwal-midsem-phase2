import React from "react";
import { Link } from "react-router";

function Navbar({ registeredCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">College Fest</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/registered">Registered ({registeredCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
