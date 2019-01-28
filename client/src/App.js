import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import UserSignUp from './components/Users/UserSignUp';
import SingleUser from './components/Users/SingleUser';
import UsersList from './components/Users/UsersList';




class App extends Component {
  render() {
    return (
      <div>
       <Router>
         <Switch>
           <Route exact path="/" component={LandingPage} />
           <Route exact path="/signup" component={UserSignUp} />
           <Route exact path="/users" component={UsersList} />
           <Route exact path="/users/:userId" component={SingleUser} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
