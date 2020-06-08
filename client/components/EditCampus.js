import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { updateCampus } from '../store/campuses';
import { clearErrors } from '../store/errors';

const EditCampus = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const { campuses, errors } = useSelector(state => {
    const campuses = state.campuses;
    const errors = state.errors;
    return { campuses, errors };
  });

  const [state, setState] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageURL: '',
  });

  useEffect(() => {
    const campus = campuses.find(campus => campus.id === match.params.id * 1);
    setState(campus);
    return () => {
      dispatch(clearErrors());
    };
  }, [campuses]);

  const onChange = (key, val) => {
    setState({ ...state, [key]: val });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateCampus(state, history));
  };

  if (!state) return null;

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

export default EditCampus;
