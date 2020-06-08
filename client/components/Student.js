import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { deleteStudent } from '../store/students';

const Student = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { student, campus } = useSelector(state => {
    const student = state.students.find(student => student.id === match.params.id * 1);
    const campus = student ? state.campuses.find(campus => campus.id === student.campusId) : null;
    return { student, campus };
  });

  if (!student) return null;

  return (
    <div className="itemDetail">
      <img className="itemImage" src={student.imageURL} />
      <h5>{`${student.firstName} ${student.lastName}`}</h5>
      <p>{student.email}</p>
      <p>{campus ? `Enrolled at ${campus.name}` : `Not enrolled`}</p>
      <div>
        <Link to={`/students/${student.id}/edit`}>
          <button className="btn btn-primary mr10">Edit</button>
        </Link>
        <button
          onClick={() => dispatch(deleteStudent(student, history))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Student;
