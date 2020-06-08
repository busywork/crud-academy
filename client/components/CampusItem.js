import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CampusItem = props => {
  const { campus } = props;
  const students = useSelector(state =>
    state.students.filter(student => student.campusId === campus.id)
  );

  return (
    <div className="listItem">
      <img className="itemImage" src={campus.imageURL} />
      <Link className="center" to={`/campuses/${campus.id}`}>
        <h5>{`${campus.name}`}</h5>
      </Link>
      {students ? `${students.length} students enrolled` : 'No students enrolled.'}
    </div>
  );
};

export default CampusItem;
