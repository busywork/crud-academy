import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentItem = props => {
  const { student } = props;
  const campus = useSelector(state =>
    state.campuses.find(campus => student.campusId === campus.id)
  );

  return (
    <div id="studentItem">
      <img className="studentImage" src={student.imageURL} />
      <br />
      <div className="center">
        <Link className="center" to={`/students/${student.id}`}>
          <h5>{`${student.firstName} ${student.lastName}`}</h5>
        </Link>
        {campus ? `${campus.name}` : 'Not enrolled.'}
      </div>
    </div>
  );
};

export default StudentItem;
