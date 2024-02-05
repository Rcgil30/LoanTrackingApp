import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUser from './CreateUser';
import CreateLoan from './CreateLoan';
import SearchClient from './SearchClient';
import UserDetails from './UserDetails';

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
            <Route exact path="/buscarCliente">
              <SearchClient/>
            </Route>
            <Route path="/buscarCliente/:id">
              <UserDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;