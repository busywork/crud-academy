import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

import Nav from './Nav';
import Home from './Home';
import Students from './Students';
import Student from './Student';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import Campuses from './Campuses';
import Campus from './Campus';
import CreateCampus from './CreateCampus';
import EditCampus from './EditCampus';

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
          <Route exact path="/students/create" render={() => <CreateStudent />} />
          <Route exact path="/students/:id" render={() => <Student />} />
          <Route path="/students/:id/edit" render={() => <EditStudent />} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/campuses/create" render={() => <CreateCampus />} />
          <Route exact path="/campuses/:id" render={() => <Campus />} />
          <Route path="/campuses/:id/edit" render={() => <EditCampus />} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default App;
