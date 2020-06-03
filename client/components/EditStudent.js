import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent } from '../store/students';

const EditStudent = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const { students, campuses } = useSelector(state => {
    const students = state.students;
    const campuses = state.campuses;
    return { students, campuses };
  });

  const [state, setState] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    imageURL: '',
  });

  useEffect(() => {
    const student = students.find(student => student.id === props.id * 1);
    setState(student);
  }, [students]);

  const onChange = (key, val) => {
    setState({ ...state, [key]: val });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateStudent(state, history));
  };

  if (!state) return null;

  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>First Name:</label>
          <input
            value={state.firstName}
            onChange={e => {
              onChange('firstName', e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label>Last Name:</label>
          <input
            value={state.lastName}
            onChange={e => {
              onChange('lastName', e.target.value);
            }}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          value={state.email}
          onChange={e => {
            onChange('email', e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Image URL: </label>
        <input
          value={state.imageURL}
          onChange={e => {
            onChange('imageURL', e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Campus</label>
        <select
          value={state.campusId || undefined}
          onChange={e => onChange('campusId', e.target.value * 1 || undefined)}
          className="form-control"
        >
          <option value={undefined}> --- Select a Campus --- </option>
          {campuses.map(campus => {
            return (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditStudent;
