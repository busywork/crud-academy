import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createStudent } from '../store/students';

const StudentForm = props => {
  const { history } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const student = { firstName, lastName, email, imageURL };
    dispatch(createStudent(student, history));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name:</label>
            <input
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name:</label>
            <input
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="form-control"
          />
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

export default StudentForm;
