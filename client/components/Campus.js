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
    <>
      <div className="itemDetail">
        <img className="itemImage" src={campus.imageURL} />
        <h5>{campus.name}</h5>
        <p>
          {campus.address}
          <br />
          {`${campus.city}, ${campus.state} ${campus.zip}`}
        </p>
        <p>{students ? `${students.length} students enrolled` : `No students enrolled`}</p>
        <div className="mb15">
          <Link to={`/campuses/${campus.id}/edit`}>
            <button className="btn btn-primary mr10">Edit</button>
          </Link>
          <button
            onClick={() => dispatch(deleteCampus(campus, history))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
        <p> Transfer a student to this campus:</p>
        <form onSubmit={onSubmit} className="center">
          <div className="form-group mr10">
            <select
              onChange={e =>
                setState({
                  ...unenrolled.find(student => student.id === e.target.value * 1),
                })
              }
              className="form-control"
            >
              <option value="-1">--- Select a Student ---</option>
              {unenrolled.map(student => (
                <option key={student.id} value={student.id}>
                  {`${student.firstName} ${student.lastName}`}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">Transfer</button>
        </form>
      </div>
      <div className="list">
        {students.length ? (
          students.map(student => <StudentItem key={student.id} student={student} />)
        ) : (
          <div className="center">There are no students currently enrolled at {campus.name}</div>
        )}
      </div>
    </>
  );
};

export default Campus;
