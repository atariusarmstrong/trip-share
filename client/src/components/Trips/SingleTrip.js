import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from '../NavBar';
import EditTripForm from './EditTripForm';

class SingleTrip extends Component {
    state = {
        trip: {},
        showForm: false
    }

    componentDidMount() {
        this.getSingleTrip()
    }

    getSingleTrip = () => {
        const tripId = this.props.match.params.tripId
        Axios.get(`/api/trips/${tripId}`)
        .then((res) => this.setState({trip: res.data}))
    }

    toggleEditForm = () => {
        this.setState({ showForm: !this.state.showForm})
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1>{this.state.trip.destination}</h1>
                <p>from:{this.state.trip.from}</p>
                <p>to: {this.state.trip.to}</p>
                <h2>{this.state.trip.accomodation}</h2>
                <h2>{this.state.trip.transportation}</h2>
                
                <button onClick={this.toggleEditForm}>Edit</button>

                {this.state.showForm ?  <EditTripForm getSingleTrip={this.getSingleTrip} tripId={this.state.trip._id} toggleEditForm={this.toggleEditForm}/> : null}
            </div>
        );
    }
}

export default SingleTrip;