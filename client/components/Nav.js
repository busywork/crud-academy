import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav" className="navbar">
      <Link to="/">
        <img src="/images/react_redux_logo.png" />
      </Link>
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
