import React from 'react';
import { useSelector } from 'react-redux';

export default props => {
  const { student } = props;
  const campus = useSelector(state =>
    state.campuses.find(campus => student.campusId === campus.id)
  );

  return (
    <div className="col" key={student.id}>
      <div className="card h-100">
        <img className="card-img-top" src={student.imageURL} />
        <div className="card-body">
          <h5 className="card-title">{`${student.firstName} ${student.lastName}`}</h5>
          <p className="card-text">{`${student.email}`}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{campus ? campus.name : 'Not Enrolled'}</small>
        </div>
      </div>
    </div>
  );
};
