import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import UserSignUp from './components/Users/UserSignUp';
import SingleUser from './components/Users/SingleUser';
import UsersList from './components/Users/UsersList';
import AddTripForm from './components/Trips/AddTripForm';
import TripsList from './components/Trips/TripsList';
import SingleTrip from './components/Trips/SingleTrip'
import AddGroupForm from './components/Groups/AddGroupForm';
import GroupsList from './components/Groups/GroupsList';




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
           <Route exact path="/users/:userId/addtrip" component={AddTripForm} />
           <Route exact path='/addtrip' component={AddTripForm}/>
           <Route exact path="/trips" component={TripsList} />
           <Route exact path="/trips/:tripId" component={SingleTrip} />
           <Route exact path="/users/:userId/addgroup" component={AddGroupForm}/>
           <Route exact path="/groups" component={GroupsList} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
