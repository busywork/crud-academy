import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent } from '../store/students';

const CreateStudent = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const campuses = useSelector(state => state.campuses);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageURL: '',
  });

  const onChange = (key, val) => {
    setState({ ...state, [key]: val });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (state.imageURL === '') {
      state.imageURL = undefined;
    }
    dispatch(createStudent(state, history));
  };

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
          className="form-control"
          onChange={e => onChange('campusId', e.target.value * 1)}
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

export default CreateStudent;
