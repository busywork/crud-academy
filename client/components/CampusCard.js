import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteCampus } from '../store/campuses';

export default ({ campus }) => {
  const dispatch = useDispatch();
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
          <div>
            <Link to={`/campuses/${campus.id}/edit`}>
              <button type="button" className="btn btn-secondary btn-sm">
                Edit
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-danger btn-sm ms-1"
              onClick={() => dispatch(deleteCampus(campus))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
