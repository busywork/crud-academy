import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CampusItem = props => {
  const { campus } = props;
  const students = useSelector(state =>
    state.students.filter(student => student.campusId === campus.id)
  );

  return (
    <div id="campusItem">
      <img className="campusImage" src={campus.imageURL} />
      <br />
      <div className="center">
        <Link className="center" to={`/campuses/${campus.id}`}>
          <h5>{`${campus.name}`}</h5>
        </Link>
        {students
          ? `${students.length} enrolled students`
          : 'No students enrolled.'}
      </div>
    </div>
  );
};

export default CampusItem;
