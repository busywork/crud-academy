import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createCampus } from '../store/campuses';
import { clearErrors } from '../store/errors';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(state => state.errors);

  const [state, setState] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageURL: '',
  });

  useEffect(() => {
    return () => dispatch(clearErrors());
  }, []);

  const onChange = (key, val) => setState({ ...state, [key]: val });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createCampus(state, history));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          id="name"
          value={state.name}
          onChange={e => onChange('name', e.target.value)}
          className={`form-control ${errors.find(err => err.path === 'name') ? 'is-invalid' : ''}`}
          placeholder="Campus Name"
        />
        <label htmlFor="name">Campus Name</label>
        <div className="invalid-feedback">Please enter a campus name.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          id="address"
          value={state.address}
          onChange={e => onChange('address', e.target.value)}
          className={`form-control ${
            errors.find(err => err.path === 'address') ? 'is-invalid' : ''
          }`}
          placeholder="Address"
        />
        <label htmlFor="address">Address</label>
        <div className="invalid-feedback">Please enter an address.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          id="city"
          value={state.city}
          onChange={e => onChange('city', e.target.value)}
          className={`form-control ${errors.find(err => err.path === 'city') ? 'is-invalid' : ''}`}
          placeholder="City"
        />
        <label htmlFor="city">City</label>
        <div className="invalid-feedback">Please enter a city.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          id="state"
          value={state.state}
          onChange={e => onChange('state', e.target.value)}
          className={`form-control ${errors.find(err => err.path === 'state') ? 'is-invalid' : ''}`}
          placeholder="State"
        />
        <label htmlFor="state">State</label>
        <div className="invalid-feedback">Please enter a state.</div>
      </div>
      <div className="form-floating mb-3">
        <input
          id="zip"
          value={state.zip}
          onChange={e => onChange('zip', e.target.value)}
          className={`form-control ${errors.find(err => err.path === 'zip') ? 'is-invalid' : ''}`}
          placeholder="Zip"
        />
        <label htmlFor="zip">Zip</label>
        <div className="invalid-feedback">Please enter a zip.</div>
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
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="button" className="btn btn-danger ms-1" onClick={() => history.goBack()}>
          Cancel
        </button>
      </div>
    </form>
  );
};
