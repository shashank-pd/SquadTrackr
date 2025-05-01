import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="/fav.png" alt="Glitch Logo" className="logo-img" />
            <span className="logo-text">Glitch</span>
          </Link>
        </div>
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
