import React from 'react';
import { useSelector } from 'react-redux';

import CampusCard from './CampusCard';

export default () => {
  const campuses = useSelector(state => state.campuses);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {campuses.length ? (
        <>
          {campuses.map(campus => (
            <CampusCard key={campus.id} campus={campus} />
          ))}
        </>
      ) : (
        <div className="col">{`There are no campuses in the database.`}</div>
      )}
    </div>
  );
};
