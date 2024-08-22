import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const linkStyle = {
        cursor: 'pointer',
        color: 'white' 
      };
  return (
    <header className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-center align-items-center">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="about-me"
                smooth={true}
                duration={200}
                className="nav-link text-light"
                style={linkStyle}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link text-light"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link text-light"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={200}
                className="nav-link text-light"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
