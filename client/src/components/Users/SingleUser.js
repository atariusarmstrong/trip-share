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
`
const Body = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 75% 25%;
`
const ProfilePic = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
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
                        <Link to={`/users/${this.state.user._id}/addtrip`}><Button>Add Trip</Button></Link>
                    </TripBlock>

                    <GroupBlock>
                        <Header>Groups</Header>
                        {this.state.user.groups.map((groups, i) => (
                            <div key={i}>
                                {groups.name}
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