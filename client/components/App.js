import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

import Nav from './Nav';
import Home from './Home';
import Students from './Students';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }, []);

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route path="/students" component={Students} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default App;
