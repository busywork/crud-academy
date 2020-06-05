import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

const Student = () => {
  const match = useRouteMatch();
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
        {campus ? campus.name : 'Not enrolled.'}
        <br /> <br />
        <Link to={`/students/${student.id}/edit`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Student;
