import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import UserSignUp from './components/Users/UserSignUp';
import SingleUser from './components/Users/SingleUser';
import UsersList from './components/Users/UsersList';
import AddTripForm from './components/Trips/AddTripForm';
import TripsList from './components/Trips/TripsList';
import EditTripForm from './components/Trips/EditTripForm';




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
           <Route exact path="/addtrip" component={AddTripForm} />
           <Route exact path="/trips" component={TripsList} />
           <Route exact path="/trips/:tripId" component={EditTripForm} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
