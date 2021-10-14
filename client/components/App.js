import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

import Navigation from './Navigation';
import Campuses from './Campuses';
import CreateCampus from './CreateCampus';
import Students from './Students';
import CreateStudent from './CreateStudent';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/campuses/create" render={() => <CreateCampus />} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students/create" render={() => <CreateStudent />} />
          <Route exact path="/students" component={Students} />
        </Switch>
      </div>
    </>
  );
};
