import React from 'react';
import { useSelector } from 'react-redux';
import CampusItem from './CampusItem';

const Campuses = () => {
  const campuses = useSelector(state => state.campuses);
  return (
    <>
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
