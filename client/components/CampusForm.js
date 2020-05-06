import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCampus } from '../store/campuses';

const CampusForm = props => {
  const { history } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [imageURL, setImageURL] = useState(undefined);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const campus = { name, description, address, city, state, zip, imageURL };
    dispatch(createCampus(campus, history));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            rows="3"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            value={address}
            onChange={e => {
              setAddress(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City: </label>
            <input
              value={city}
              onChange={e => {
                setCity(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-4">
            <label>State: </label>
            <input
              value={state}
              onChange={e => {
                setState(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2">
            <label>Zip: </label>
            <input
              value={zip}
              onChange={e => {
                setZip(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Image URL: </label>
          <input
            value={imageURL}
            onChange={e => {
              setImageURL(e.target.value);
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
    </>
  );
};

export default CampusForm;
