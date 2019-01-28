import React, { Component } from 'react';
import Axios from 'axios';

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
                        <h3>{user.username}</h3>
                        <h4>{user.location}</h4>
                    </div> 
                ))}
            </div>
        );
    }
}

export default UsersList;