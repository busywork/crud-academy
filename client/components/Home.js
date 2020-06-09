import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <img src="/images/react_redux_logo.png" className="mb15" />
      <div>
        <Link to="/students">
          <button className="btn btn-dark mr10">STUDENTS</button>
        </Link>
        <Link to="/campuses">
          <button className="btn btn-dark">CAMPUSES</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
