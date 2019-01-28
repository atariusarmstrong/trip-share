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
        .then((res) => this.setState(res.data))
    }
    render() {
        return (
            <div>
                Here's a list of users

                {this.state.users.map((user, i) => (
                    <div key={i}>
                        {user.username}
                    </div> 
                ))}
            </div>
        );
    }
}

export default UsersList;