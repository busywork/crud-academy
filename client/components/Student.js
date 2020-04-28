import React from 'react';
import { useSelector } from 'react-redux';

const Student = props => {
  const { student, campus } = useSelector(state => {
    const student = state.students.find(student => student.id === props.id * 1);
    const campus = student
      ? state.campuses.find(campus => campus.id === student.campusId)
      : null;
    return { student, campus };
  });

  if (student) {
    return (
      <>
        <div id="studentDetail">
          <img className="studentImage" src={student.imageURL} />
          <br />
          <div className="center">
            <h5>{student.firstName}</h5>
            {student.email}
            <br />
            {student && campus ? campus.name : `Not Enrolled`}
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default Student;
