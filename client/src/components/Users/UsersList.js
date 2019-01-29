import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../NavBar';

const UserBlock = styled.div`
    background: #D5FFFF;
    border-radius: 20px;
    height: 400px;
    width: 400px;
    float: left;
    margin: 10px;
`
const ProfilePic = styled.img`
    height: 150px;
    width: 250px;
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

                {this.state.users.map((user, i) => (
                    <UserBlock key={i}>
                    <Link to={`/users/${user._id}`}>
                        <ProfilePic src={user.image} alt={user.username}/>
                        <h3>{user.username}</h3>
                        <h4>{user.location}</h4>
                    </Link>
                    </UserBlock> 
                ))}
            </div>
        );
    }
}

export default UsersList;