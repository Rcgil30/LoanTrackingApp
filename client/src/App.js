import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUser from './CreateUser';
import CreateLoan from './CreateLoan';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/crearCliente">
              <CreateUser />
            </Route>
            <Route exact path="/crearPrestamo">
              <CreateLoan />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;