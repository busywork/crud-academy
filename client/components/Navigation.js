import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          CRUD
          <img
            src="/images/react_redux_logo.png"
            width="24"
            height="24"
            className="d-inline-block align-text-top"
          />
          ACADEMY
        </Link>
        <Link to="/campuses" className="nav-link">
          Campuses
        </Link>
        <Link to="/students" className="nav-link me-auto">
          Students
        </Link>
        <Link to="/campuses/create" className="nav-link">
          Add Campus
        </Link>
      </div>
    </nav>
  );
};
