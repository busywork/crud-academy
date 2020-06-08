import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import StudentItem from './StudentItem';
import { deleteCampus } from '../store/campuses';
import { updateStudent } from '../store/students';

const Campus = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const { students, campus, unenrolled } = useSelector(state => {
    const campus = state.campuses.find(campus => campus.id === match.params.id * 1);
    const students = campus
      ? state.students.filter(student => campus.id === student.campusId)
      : null;
    const unenrolled = campus
      ? state.students.filter(student => campus.id !== student.campusId)
      : null;
    return { students, campus, unenrolled };
  });

  const [state, setState] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    state.campusId = campus.id;
    dispatch(updateStudent(state, history, location));
  };

  if (!campus) return null;

  return (
    <div id="campusDetail">
      <img className="campusImage" src={campus.imageURL} />
      <br />
      <div className="center">
        <h5>{campus.name}</h5>
        {campus.description}
        <br /> <br />
        {campus.address}
        <br />
        {`${campus.city}, ${campus.state} ${campus.zip}`}
        <br /> <br />
        {students ? `${students.length} students enrolled` : `No students enrolled`}
        <br /> <br />
        <Link to={`/campuses/${campus.id}/edit`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button onClick={() => dispatch(deleteCampus(campus, history))} className="btn btn-danger">
          Delete
        </button>
      </div>
      <div>
        <br />
      </div>
      Transfer a student to this campus:
      <form onSubmit={onSubmit} className="form-inline">
        <div className="form-group">
          <select
            onChange={e =>
              setState({
                ...unenrolled.find(student => student.id === e.target.value * 1),
              })
            }
            className="form-control"
          >
            <option value="-1"> --- Select a Student --- </option>
            {unenrolled.map(student => (
              <option key={student.id} value={student.id}>
                {`${student.firstName} ${student.lastName}`}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary"> Transfer </button>
      </form>
      <div className="studentsList">
        {students.length ? (
          students.map(student => <StudentItem key={student.id} student={student} />)
        ) : (
          <div className="center">There are no students currently enrolled at {campus.name}</div>
        )}
      </div>
    </div>
  );
};

export default Campus;
