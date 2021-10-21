import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createStudent } from '../store/students';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const campuses = useSelector(state => state.campuses);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageURL: '',
  });

  const onChange = (key, val) => setState({ ...state, [key]: val });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createStudent(state, history));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          id="firstName"
          value={state.firstName}
          onChange={e => onChange('firstName', e.target.value)}
          className="form-control"
          placeholder="First Name"
        />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="lastName"
          value={state.lastName}
          onChange={e => onChange('lastName', e.target.value)}
          className="form-control"
          placeholder="Last Name"
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="email"
          value={state.email}
          onChange={e => onChange('email', e.target.value)}
          className="form-control"
          placeholder="Email"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="imageURL"
          value={state.imageURL}
          onChange={e => onChange('imageURL', e.target.value)}
          className="form-control"
          placeholder="Image URL"
        />
        <label htmlFor="imageURL">Image URL</label>
      </div>
      <div className="form-floating mb-3">
        <select
          id="campusId"
          onChange={e => onChange('campusId', e.target.value * 1)}
          className="form-select"
        >
          <option value={undefined}> --- Select a Campus --- </option>
          {campuses.map(campus => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>
        <label htmlFor="campusId">Campus</label>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
