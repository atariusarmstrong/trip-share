import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar';


const InfoBlock = styled.div`
    width: 400px;
    height: 150px;
    border-radius: 20px;
    font-family: Avenir;
    font-size: 20px;
    letter-spacing: 2px;
    background: #D5FFFF;
    grid-row-start: 2;
    grid-column-start: 1;
    text-align: center;
    justify-self: center;
    align-self: center;
`

const TripBlock = styled.div`
    width: 400px;
    height: 250px
    background: #D5FFFF;
    border-radius: 20px;
    float: right;
    text-align: center;
    align-self: center;
`

const GroupBlock = styled.div`
    width: 400px;
    height: 250px
    background: #D5FFFF;
    border-radius: 20px;
    float: right;
    text-align: center;
    
`

const Header = styled.h2`
    font-family: SignPainter;
    font-size: 40px
    color: #707070;
`
const Button = styled.button`
    background: #707070;
    width: 154px;
    height: 43px;
    font-family: Avenir;
    font-size: 15px
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
    border-radius: 10px;
`
const Body = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 50% 50%;
    p {
        text-transform: uppercase;
        font-family: Avenir;
        letter-spacing: 2px;
    }
`
const ProfilePic = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: solid 2px #707070;
    justify-self: center;
    margin-top: 50px;
    img {
        width: 300px;
        height: 300px;
        border-radius: 100%;
    }
`

class SingleUser extends Component {
    state = {
        user: {
            username: "",
            image: "",
            location: "",
            dreamTrip: "",
            passport: Boolean,
            trips: [{}],
            groups: [{}]
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
                <NavBar />
                <Body>
                    <ProfilePic>
                        <img src={this.state.user.image} alt={this.state.user.username}/>
                    </ProfilePic>
                    <InfoBlock>
                        <p>{this.state.user.username}</p>
                        <p>{this.state.user.location}</p>
                        <p>Dream Vaction: {this.state.user.dreamTrip}</p>
                        <p>{this.state.user.passport}</p>
                    </InfoBlock>
    
                    <TripBlock>
                        <Header>Trips</Header>
                        {this.state.user.trips.map((trips, i) => (
                            <div key={i}>
                                <p>{trips.destination} | {trips.from}-{trips.to}</p>
                            </div>
                        ))}
                        <Link to={`/users/${this.state.user._id}/addtrip`}><Button>Add Trip</Button></Link>
                    </TripBlock>

                    <GroupBlock>
                        <Header>Groups</Header>
                        {this.state.user.groups.map((groups, i) => (
                            <div key={i}>
                                <p>{groups.name}</p>
                            </div>
                        ))}
                        <Link to={`/users/${this.state.user._id}/addgroup`}>
                            <Button>Add Group</Button>
                        </Link>
                    </GroupBlock>
                </Body>
            </div>
        );
    }
}

export default SingleUser;