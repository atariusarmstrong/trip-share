import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const InfoBlock = styled.div`
    width: 400px;
    height: 150px;
    border-radius: 20px;
    font-family: Avenir;
    font-size: 20px;
    letter-spacing: 2px;
    background: #D5FFFF;
`

const TripBlock = styled.div`
    width: 400px;
    height: 250px
    background: #D5FFFF;
    border-radius: 20px;
    float: right;
    text-align: center;
`

const Header = styled.h2`
    font-family: SignPainter;
    font-size: 30px
    color: #707070;
`


class SingleUser extends Component {
    state = {
        user: {
            username: "",
            image: "",
            location: "",
            dreamTrip: "",
            passport: Boolean,
            trips: [{}]
        }
    }

    componentDidMount = () => {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
        .then((res) => this.setState({ user: res.data }))
    }
    render() {
        return (
            <div>
                <InfoBlock>
                    {this.state.user.username}<br/>
                    {this.state.user.location}<br/>
                    Dream Vaction: 
                    {this.state.user.dreamTrip}<br/>
                    {this.state.user.passport}<br/>
                </InfoBlock>
 
                <TripBlock>
                    <Header>Trips</Header>
                     {this.state.user.trips.map((trips, i) => (
                        <div key={i}>
                            {trips.destination}
                        </div>
                    ))}
                </TripBlock>
            </div>
        );
    }
}

export default SingleUser;