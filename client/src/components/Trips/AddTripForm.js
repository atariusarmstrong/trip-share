import React, { Component } from 'react';
import NavBar from '../NavBar';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'

class AddTripForm extends Component {
    state = {
        trip: {
            destination: "",
            from: "",
            to: "",
            accomodation: "",
            transportation: "",
        },
        redirect: false
    }

    handleChange = (e) => {
        const newState = {...this.state.trip}
        newState[e.target.name] = e.target.value
        this.setState({trip: newState})
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/trips' />
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.trip
        Axios.post('/api/addtrip', payload)
        .then(this.setRedirect())
    }
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h2>Where are you going?</h2>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" name="destination" value={this.state.trip.destination}n placeholder="Destination" onChange={this.handleChange}/><br/>
                        <input type="date" name="from" value={this.state.trip.from} onChange={this.handleChange}/><br/>
                        <input type="date" name="to" value={this.state.trip.to} onChange={this.handleChange}/><br/>
                        <input type="text" name="accomodation" value={this.state.trip.accomodation} placeholder="Accomodation" onChange={this.handleChange}/><br/>
                        <input type="text" name="transportation" value={this.state.trip.transportation} placeholder="Transportation" onChange={this.handleChange}/><br/>
                        {this.renderRedirect()}
                        <button type="submit">Let's Go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTripForm;