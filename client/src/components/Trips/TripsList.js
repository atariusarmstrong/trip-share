import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'
import styled from 'styled-components'

const TripBlock = styled.div`
    width: 400px;
    height: 500px;
    float: left;
    margin: 10px;
    background: #D5FFFF;
    font-size: 20px;
    border-radius: 20px;
`

const Body = styled.div`
    font-family: Avenir;
    letter-spacing: 2px;
    color: #707070;
    text-align: center;
    text-transform: uppercase;
    align-content: center;
    textarea {
        outline: none;
        font-family: Avenir;
        letter-spacing: 2px;
        background: #D5FFFF;
        resize: none;
        border: 0px;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
    }
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
    render() {
        return (
            <div>
                <NavBar />
                <Body>
                <h1>Upcoming Trips</h1>
                <div>
                    {this.state.trips.map((trips, i) => (
                        <TripBlock key={i}>
                            <h2><textarea placeholder={trips.destination}></textarea></h2>
                            <h3>{trips.from}</h3>
                            <h3>{trips.to}</h3>
                            <p><textarea placeholder={trips.accomodation}></textarea></p>
                            <p><textarea placeholder={trips.transportation}></textarea></p>
                        </TripBlock>
                    ))}
                </div>
                </Body>
            </div>
        );
    }
}

export default TripsList;