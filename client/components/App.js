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
import CampusForm from './CampusForm';

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
          <Route
            exact
            path="/students/create"
            render={({ history }) => <CreateStudent history={history} />}
          />
          <Route
            exact
            path="/students/:id"
            render={({ match, history }) => (
              <Student id={match.params.id} history={history} />
            )}
          />
          <Route
            path="/students/:id/edit"
            render={({ match, history }) => (
              <EditStudent id={match.params.id} history={history} />
            )}
          />
          <Route exact path="/students" component={Students} />
          <Route
            exact
            path="/campuses/create"
            render={({ history }) => <CampusForm history={history} />}
          />
          <Route
            exact
            path="/campuses/:id"
            render={({ match, history }) => (
              <Campus history={history} id={match.params.id} />
            )}
          />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};

export default App;
