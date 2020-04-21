import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

import Nav from './Nav';
import Home from './Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }, []);

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
};

export default App;
