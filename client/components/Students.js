import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentItem from './StudentItem';

const Students = () => {
  const students = useSelector(state => state.students);

  return (
    <>
      <div className="flex">
        <h5 className="listHeader">All Students</h5>
        <Link to="/students/create">
          <button className="btn btn-primary">Add Student</button>
        </Link>
      </div>
      {students.length ? (
        <div className="list">
          {students.map(student => {
            return <StudentItem key={student.id} student={student} />;
          })}
        </div>
      ) : (
        <div className="center">There are no students in the database.</div>
      )}
    </>
  );
};

export default Students;
