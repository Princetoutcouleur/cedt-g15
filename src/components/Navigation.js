import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fonction pour fermer le dropdown après le clic
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Fonction pour basculer la barre de navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Fonction pour fermer la barre de navigation
  const closeNav = () => {
    setNavOpen(false);
    closeDropdown(); // Fermer également le dropdown si ouvert
  };

  return (
    <div className="container border-bottom">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand primaryColor fw-bold" to="/">CEDT - Le G15</Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link
                  className={`nav-link fs-5 ${location.pathname === "/" ? "activeLink" : ""}`}
                  to="/"
                  onClick={closeNav}
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className={`nav-link fs-5 dropdown-toggle ${location.pathname === "/presentation" || location.pathname === "/conditions-admission" ? "activeLink" : ""}`}
                  href="#"
                  role="button"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  Le G15
                </a>
                <ul className={`dropdown-menu ${dropdownOpen ? "show primaryBg" : ""}`}>
                  <li className="dropdown-item primaryBg text-white">
                    <Link
                      className={`nav-link text-white fs-5 ${location.pathname === "/presentation" ? "activeLink" : ""}`}
                      to="/presentation"
                      onClick={closeNav}
                    >
                      Présentation
                    </Link>
                  </li>
                  <li className="dropdown-item primaryBg">
                    <Link
                      className={`nav-link text-white fs-5 ${location.pathname === "/conditions-admission" ? "activeLink" : ""}`}
                      to="/conditions-admission"
                      onClick={closeNav}
                    >
                      Conditions D'admission
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fs-5 ${location.pathname === "/formations" ? "activeLink" : ""}`}
                  to="/formations"
                  onClick={closeNav}
                >
                  Formations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fs-5 ${location.pathname === "/contact" ? "activeLink" : ""}`}
                  to="/contact"
                  onClick={closeNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
