import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import UserSignUp from './components/Users/UserSignUp';




class App extends Component {
  render() {
    return (
      <div>
       <Router>
         <Switch>
           <Route exact path="/" component={LandingPage} />
           <Route exact path="/signup" component={UserSignUp} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
