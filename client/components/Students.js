import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

const Students = () => {
  const students = useSelector(state => state.students);
  return (
    <>
      <div className="flex">
        <h4 className="listHeader">All Students</h4>
        <Link to="/students/create">
          <button className="btn btn-primary">Add Student</button>
        </Link>
      </div>
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
