import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CampusItem from './CampusItem';

const Campuses = () => {
  const campuses = useSelector(state => state.campuses);
  return (
    <>
      <div className="flex">
        <h4 className="listHeader">All Campuses</h4>
        <Link to="/campuses/create">
          <button className="btn btn-primary">Add Campus</button>
        </Link>
      </div>
      {campuses.length ? (
        <div className="campusesList">
          {campuses.map(campus => {
            return <CampusItem key={campus.id} campus={campus} />;
          })}
        </div>
      ) : (
        <div className="center">
          <h2> There are no campuses in the database. </h2>
        </div>
      )}
    </>
  );
};

export default Campuses;
