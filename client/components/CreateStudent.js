import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStudent } from '../store/students';
import { clearErrors } from '../store/errors';

const CreateStudent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { campuses, errors } = useSelector(state => {
    const campuses = state.campuses;
    const errors = state.errors;
    return { campuses, errors };
  });

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageURL: '',
  });

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  const onChange = (key, val) => {
    setState({ ...state, [key]: val });
  };

  const onSubmit = e => {
    e.preventDefault();
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
            className={`form-control ${
              errors.find(err => err.path === 'firstName') ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">Please enter a first name.</div>
        </div>
        <div className="form-group col-md-6">
          <label>Last Name:</label>
          <input
            value={state.lastName}
            onChange={e => {
              onChange('lastName', e.target.value);
            }}
            className={`form-control ${
              errors.find(err => err.path === 'lastName') ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">Please enter a last name.</div>
        </div>
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          value={state.email}
          onChange={e => {
            onChange('email', e.target.value);
          }}
          className={`form-control ${errors.find(err => err.path === 'email') ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">Please enter an email address.</div>
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
        <select className="form-control" onChange={e => onChange('campusId', e.target.value * 1)}>
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
