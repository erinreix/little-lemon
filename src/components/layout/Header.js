import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import logo from './assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import pages from '../../utils/pages'
import './Header.css'

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

function Header() {
  const { pathname } = useLocation();
  const [NavExpanded, setNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to={pages.get('home').path}>
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setNavExpanded(!NavExpanded)}
        >
          {NavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x"/>
            : <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul
          className={NavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
          onClick={() => setNavExpanded(!NavExpanded)}
        >
          {navLinks.map((navLink, index) =>
            <li key={index}>
              <Link
                className={pathname === navLink.path ? "current-location" : ""}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;