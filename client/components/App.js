import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

import Campuses from './Campuses';
import Students from './Students';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/campuses" component={Campuses} />
        <Route exact path="/students" component={Students} />
      </Switch>
    </div>
  );
};
