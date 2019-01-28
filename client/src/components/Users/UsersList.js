import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

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
                Here's a list of users

                {this.state.users.map((user, i) => (
                    <div key={i}>
                    <Link to={`/users/${user._id}`}>
                        <img src={user.image} alt={user.username}/>
                        <h3>{user.username}</h3>
                        <h4>{user.location}</h4>
                    </Link>
                    </div> 
                ))}
            </div>
        );
    }
}

export default UsersList;