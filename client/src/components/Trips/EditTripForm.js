import React, { Component } from 'react';
import axios from 'axios'


class EditTripForm extends Component {
    state = {
        trip: {
            destination: "",
            from: "",
            to: "",
            accomodation: "",
            transportation: "",
        }
    }

    handleChange = (e) => {
        const newState = {...this.state.trip}
        newState[e.target.name] = e.target.value
        this.setState({trip: newState})
        // console.log(newState)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.trip
        const tripId = this.props.tripId
        axios.patch(`/api/trips/${tripId}`, payload)
        .then(() => {this.props.getSingleTrip()})
        .then(() => {this.props.toggleEditForm()})
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Where are you going?</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="destination" value={this.state.trip.destination}n placeholder="Destination" onChange={this.handleChange}/><br/>
                        <input type="date" name="from" value={this.state.trip.from} onChange={this.handleChange}/><br/>
                        <input type="date" name="to" value={this.state.trip.to} onChange={this.handleChange}/><br/>
                        <input type="text" name="accomodation" value={this.state.trip.accomodation} placeholder="Accomodation" onChange={this.handleChange}/><br/>
                        <input type="text" name="transportation" value={this.state.trip.transportation} placeholder="Transportation" onChange={this.handleChange}/><br/>
                        <button>Let's Go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditTripForm;