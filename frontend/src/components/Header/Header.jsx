import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          TeamSync
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-link">
                Add Member
              </Link>
            </li>
            <li>
              <Link to="/members" className="nav-link">
                View Members
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
