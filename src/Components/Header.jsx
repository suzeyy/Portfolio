import React, { useState } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle = {
    cursor: "pointer",
    color: "white",
  };

  return (
    <header className="bg-dark text-light" style={{ height: "66px" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              menuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="about-me"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={200}
                  className="nav-link"
                  style={linkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
