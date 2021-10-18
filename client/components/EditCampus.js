import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { updateCampus } from '../store/campuses';

export default () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const campuses = useSelector(state => state.campuses);

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
  }, [campuses]);

  const onChange = (key, val) => setState({ ...state, [key]: val });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateCampus(state));
  };

  return state ? (
    <form onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          id="name"
          value={state.name}
          onChange={e => onChange('name', e.target.value)}
          className="form-control"
          placeholder="Campus Name"
        />
        <label htmlFor="name">Campus Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="address"
          value={state.address}
          onChange={e => onChange('address', e.target.value)}
          className="form-control"
          placeholder="Address"
        />
        <label htmlFor="address">Address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="city"
          value={state.city}
          onChange={e => onChange('city', e.target.value)}
          className="form-control"
          placeholder="City"
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="state"
          value={state.state}
          onChange={e => onChange('state', e.target.value)}
          className="form-control"
          placeholder="State"
        />
        <label htmlFor="state">State</label>
      </div>
      <div className="form-floating mb-3">
        <input
          id="zip"
          value={state.zip}
          onChange={e => onChange('zip', e.target.value)}
          className="form-control"
          placeholder="Zip"
        />
        <label htmlFor="zip">Zip</label>
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
      </div>
    </form>
  ) : null;
};