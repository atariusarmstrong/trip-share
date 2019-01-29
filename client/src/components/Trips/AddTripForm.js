import React, { Component } from 'react';
import NavBar from '../NavBar';

class AddTripForm extends Component {
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
        console.log(newState)
    }
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h2>Where are you going?</h2>
                    <form>
                        <input type="text" name="destination" value={this.state.trip.destination}n placeholder="Destination" onChange={this.handleChange}/><br/>
                        <input type="date" name="from" value={this.state.trip.from} onChange={this.handleChange}/><br/>
                        <input type="date" name="to" value={this.state.trip.to} onChange={this.handleChange}/><br/>
                        <input type="text" name="accomodation" value={this.state.trip.accomodation} placeholder="Accomodation" onChange={this.handleChange}/><br/>
                        <input type="text" name="transportation" value={this.state.trip.transportation} placeholder="Transportation" onChange={this.handleChange}/>
                        <button>Let's Go!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTripForm;