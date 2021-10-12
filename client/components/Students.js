import React from 'react';
import { useSelector } from 'react-redux';

import StudentCard from './StudentCard';

export default () => {
  const students = useSelector(state => state.students);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {students.length ? (
        <>
          {students.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </>
      ) : (
        <div className="col">{`There are no students in the database.`}</div>
      )}
    </div>
  );
};
