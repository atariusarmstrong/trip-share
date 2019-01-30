import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from '../NavBar';
import EditTripForm from './EditTripForm';
import { Redirect } from 'react-router-dom'

class SingleTrip extends Component {
    state = {
        trip: {},
        showForm: false,
        redirect: false
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

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/trips' />
          }
    }

    deleteTrip = () => {
        const tripId = this.props.match.params.tripId
        Axios.delete(`/api/trips/${tripId}`)
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
                {this.renderRedirect()}
                <button onClick={this.deleteTrip}>Delete</button>

                {this.state.showForm ?  <EditTripForm getSingleTrip={this.getSingleTrip} tripId={this.state.trip._id} toggleEditForm={this.toggleEditForm}/> : null}
            </div>
        );
    }
}

export default SingleTrip;