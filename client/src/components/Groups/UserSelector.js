import React, { Component } from 'react';
import Axios from 'axios'


class UserSelector extends Component {
    state = {
        users: [{}]
    }
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        Axios.all('/api/users/:userId/addgroup')
        .then((res) => this.setState({users: res.data}))
    }
    render() {
        return (
            <div>
                <select>
                {this.state.users.map((users, i) => (
                    <option key={i}>
                        {users.name}
                    </option>
                ))}
                </select>
                
            </div>
        );
    }
}

export default UserSelector;