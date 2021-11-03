import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/campuses" className="nav-link">
                Campuses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">
                Students
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                + Add
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/campuses/create" className="dropdown-item">
                    Campus
                  </Link>
                </li>
                <li>
                  <Link to="/students/create" className="dropdown-item">
                    Student
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
