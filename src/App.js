import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';
import SignIn from './Googlesignin/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/HeaderArea" component={HeaderArea} />
          <Route path="/" exact component={LoginPage} />
          {/* Redirect any other routes to the login page */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

