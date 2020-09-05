import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fib from './Fib';
import OtherPage from './otherPage';

function App() {
  return (

    <div className="App">
      <Router>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>

          <Switch>
            <Route exact path="/">
              <Fib />
            </Route>
            <Route path="/otherpage">
              <OtherPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
