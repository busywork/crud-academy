import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default props => {
  const { campus } = props;
  const students = useSelector(state =>
    state.students.filter(student => student.campusId === campus.id)
  );

  return (
    <div className="col" key={campus.id}>
      <div className="card h-100">
        <img className="card-img-top" src={campus.imageURL} />
        <div className="card-body">
          <h5 className="card-title">{`${campus.name}`}</h5>
          <p className="card-text">
            {`${campus.address}, ${campus.city}, ${campus.state} ${campus.zip}`}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">
            {students.length ? `${students.length} students enrolled` : 'No students enrolled.'}
          </small>
          <Link to={`/campuses/${campus.id}/edit`}>
            <button type="button" className="btn btn-secondary btn-sm">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
