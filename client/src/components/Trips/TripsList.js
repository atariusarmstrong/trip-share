import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const TripBlock = styled.div`
    width: 400px;
    height: 500px;
    float: left;
    margin: 10px;
    background: #D5FFFF;
    font-size: 20px;
    border-radius: 20px;
    a {
        text-decoration: none;
        color: #707070;
    }
`

const Body = styled.form`
    font-family: Avenir;
    letter-spacing: 2px;
    color: #707070;
    text-align: center;
    text-transform: uppercase;
    align-content: center;
`

class TripsList extends Component {
    state = {
        trips: [{}]
    }

    componentDidMount() {
        this.getAllTrips()
    }

    getAllTrips = () => {
        axios.get('/api/trips')
        .then((res) => this.setState({trips: res.data}))
    }

    deleteTrip = (e) => {
        e.preventDefault()
        const tripId = this.state.trips[0]._id
        console.log(tripId)
        axios.delete(`/api/trips/${tripId}`)

    }
    render() {
        return (
            <div>
                <NavBar />
                <Body>
                <h1>Upcoming Trips</h1>
                <div>
                    {this.state.trips.map((trips, i) => (
                        <TripBlock key={i}>
                            <Link to={`/trips/${trips._id}`}>
                                <h2>{trips.destination}</h2>
                                <h3>{trips.from}</h3>
                                <h3>{trips.to}</h3>
                                <p>{trips.accomodation}</p>
                                <p>{trips.transportation}</p>
                            </Link>
                        </TripBlock>
                    ))}
                </div>
                </Body>
            </div>
        );
    }
}

export default TripsList;