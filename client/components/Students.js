import React from 'react';
import { useSelector } from 'react-redux';
import StudentItem from './StudentItem';

const Students = () => {
  const students = useSelector(state => state.students);
  return (
    <>
      {students.length ? (
        <div className="studentsList">
          {students.map(student => {
            return <StudentItem key={student.id} student={student} />;
          })}
        </div>
      ) : (
        <div className="center">
          <h2> There are no students in the database. </h2>
        </div>
      )}
    </>
  );
};

export default Students;
