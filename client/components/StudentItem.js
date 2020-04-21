import React from 'react';

const StudentItem = props => {
  const { student } = props;

  return (
    <div id="studentItem">
      <img className="studentImage" width="50%" src={student.imageURL} />
      <br />
      <div className="center">
        <h4> {`${student.firstName} ${student.lastName}`} </h4>
      </div>
    </div>
  );
};

export default StudentItem;
