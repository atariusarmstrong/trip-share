import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'

class GroupsList extends Component {
    state = {
        groups: [{}]
    }

    componentDidMount = () => {
        this.getAllGroups()
    }

    getAllGroups = () => {
        axios.get('/api/groups')
        .then((res) => this.setState({groups: res.data}))
    }
    render() {
        return (
            <div>
                <NavBar/>
                {this.state.groups.map((groups, i) => (
                    <div key={i}>
                        <h2>{groups.name}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default GroupsList;