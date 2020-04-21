import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav" className="navbar justify-content-between">
      <a className="navbar-brand" href="/">
        CRUD Academy
      </a>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/students" className="nav-link">
            Students
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/campuses" className="nav-link">
            Campuses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
