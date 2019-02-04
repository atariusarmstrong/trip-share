import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import NavBar from '../NavBar';
import location from '../../icons/location.png'
import {fadeInDown} from 'react-animations'

const fadeDown = keyframes`${fadeInDown}`

const UserBlock = styled.div`
    background: #D5FFFF;
    border-radius: 20px;
    height: 400px;
    width: 400px;
    float: left;
    margin: 10px;
    &:hover {
        background: #00e6e6;
    }
    animation: ${fadeDown} 2s;
`
const ProfilePic = styled.img`
    max-height: 250px;
    max-width: 250px;
    margin-top: 10px;
`
const UserContainer = styled.div`
    width: 1260px;
    margin: 0 auto;
    display: inline-grid;
    grid-template-columns: auto auto auto;
`

const Body = styled.div`
    font-family: Avenir;
    letter-spacing: 2px;
    color: #707070;
    text-align: center;
    text-transform: uppercase;
    align-content: center;
    a {
        text-decoration: none;
        color: #707070;
    }
`

class UsersList extends Component {
    state = {
        users: [{}]
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        Axios.get('/api/users')
        .then((res) => this.setState({users: res.data}))
    }
    render() {
        return (
            <div>
                <NavBar />
                <Body>
                    <UserContainer>
                        {this.state.users.map((user, i) => (
                            <UserBlock key={i}>
                            <Link to={`/users/${user._id}`}>
                                <ProfilePic src={user.image} alt={user.username}/>
                                <h3>{user.username}</h3>
                                <h4><img src={location} alt="location"/>{user.location}</h4>

                            </Link>
                            </UserBlock> 
                        ))}

                    </UserContainer>

                </Body>   
            </div>
        );
    }
}

export default UsersList;