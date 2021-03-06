import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { updateStudent } from '../store/students';

const StudentItem = props => {
  const { student } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const campus = useSelector(state =>
    state.campuses.find(campus => student.campusId === campus.id)
  );

  return (
    <div className="listItem">
      <img className="itemImage" src={student.imageURL} />
      <Link className="center" to={`/students/${student.id}`}>
        <h5>{`${student.firstName} ${student.lastName}`}</h5>
      </Link>
      {location.pathname.includes('campuses') ? (
        <button
          className="center btn btn-danger"
          onClick={() =>
            dispatch(updateStudent({ id: student.id, campusId: null }, history, location))
          }
        >
          Remove
        </button>
      ) : (
        <>{campus ? campus.name : 'Not Enrolled'}</>
      )}
    </div>
  );
};

export default StudentItem;
