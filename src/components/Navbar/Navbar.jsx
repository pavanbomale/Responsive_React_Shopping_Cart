import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => setIsMobile(!isMobile);

  const closeMobileMenu = () => setIsMobile(false);

  return (
    <>
      <nav className="navbar">
      <div className="hamburger-menu" onClick={handleClick}>
          <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isMobile ? "nav-menu mobile-menu" : "nav-menu"}>
          <li className="list">
            <Link className="nav-link" to="/" onClick={closeMobileMenu}>
              <i className="fal fa-home"></i>Home
            </Link>
          </li>

          <li className="list active">
            <Link className="nav-link" to="/menu" onClick={closeMobileMenu}>
              <i className="fal fa-list-alt"></i>Menu
            </Link>
          </li>

          <li className="list">
            <Link className="nav-link" to="/about" onClick={closeMobileMenu}>
              <i className="fal fa-question-circle"></i>About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
