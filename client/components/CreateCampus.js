import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createCampus } from '../store/campuses';
import { clearErrors } from '../store/errors';

const CreateCampus = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(state => state.errors);

  const [state, setState] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
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
    dispatch(createCampus(state, history));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          value={state.name}
          onChange={e => {
            onChange('name', e.target.value);
          }}
          className={`form-control ${errors.find(err => err.path === 'name') ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">Please enter a name.</div>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          rows="3"
          value={state.description}
          onChange={e => {
            onChange('description', e.target.value);
          }}
          className={`form-control ${
            errors.find(err => err.path === 'description') ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback">Please enter a description.</div>
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          value={state.address}
          onChange={e => {
            onChange('address', e.target.value);
          }}
          className={`form-control ${
            errors.find(err => err.path === 'address') ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback">Please enter an address.</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>City: </label>
          <input
            value={state.city}
            onChange={e => {
              onChange('city', e.target.value);
            }}
            className={`form-control ${
              errors.find(err => err.path === 'city') ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">Please enter a city.</div>
        </div>
        <div className="form-group col-md-4">
          <label>State: </label>
          <input
            value={state.state}
            onChange={e => {
              onChange('state', e.target.value);
            }}
            className={`form-control ${
              errors.find(err => err.path === 'state') ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">Please enter a state.</div>
        </div>
        <div className="form-group col-md-2">
          <label>Zip: </label>
          <input
            value={state.zip}
            onChange={e => {
              onChange('zip', e.target.value);
            }}
            className={`form-control ${errors.find(err => err.path === 'zip') ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">Please enter a zip.</div>
        </div>
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
      <div className="center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateCampus;
