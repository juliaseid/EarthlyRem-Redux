import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import React from 'react';
import { Remedies } from './RemediesControl';
import SignIn from './SignIn';


function App() {
  return (
    <Router>
      <div className='header'><Header /></div>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <div className='RemList'><Remedies /></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
