import React from 'react';
import { useSelector } from 'react-redux';

const Campus = props => {
  const { students, campus } = useSelector(state => {
    const campus = state.campuses.find(campus => campus.id === props.id * 1);
    const students = campus
      ? state.students.filter(student => campus.id === student.campusId)
      : null;
    return { students, campus };
  });

  if (campus) {
    return (
      <>
        <div id="campusDetail">
          <img className="campusImage" src={campus.imageURL} />
          <br />
          <div className="center">
            <h5>{campus.name}</h5>
            {campus.address}
            <br />
            {`${campus.city}, ${campus.state} ${campus.zip}`}
            <br />
            {campus && students
              ? `${students.length} enrolled`
              : `No students enrolled`}
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default Campus;
