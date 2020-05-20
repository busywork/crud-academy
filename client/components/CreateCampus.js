import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCampus } from '../store/campuses';

const CreateCampus = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
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
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          rows="3"
          value={state.description}
          onChange={e => {
            onChange('description', e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          value={state.address}
          onChange={e => {
            onChange('address', e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>City: </label>
          <input
            value={state.city}
            onChange={e => {
              onChange('city', e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label>State: </label>
          <input
            value={state.state}
            onChange={e => {
              onChange('state', e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group col-md-2">
          <label>Zip: </label>
          <input
            value={state.zip}
            onChange={e => {
              onChange('zip', e.target.value);
            }}
            className="form-control"
          />
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
