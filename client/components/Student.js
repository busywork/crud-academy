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
    <div id="studentDetail">
      <img className="studentImage" src={student.imageURL} />
      <br />
      <div className="center">
        <h5>{`${student.firstName} ${student.lastName}`}</h5>
        {student.email}
        <br />
        {campus ? campus.name : 'Not enrolled'}
        <br /> <br />
        <Link to={`/students/${student.id}/edit`}>
          <button className="btn btn-primary">Edit</button>
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
