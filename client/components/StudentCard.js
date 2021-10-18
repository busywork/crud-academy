import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">{campus ? campus.name : 'Not enrolled.'}</small>
          <Link to={`/students/${student.id}/edit`}>
            <button type="button" className="btn btn-secondary btn-sm">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
