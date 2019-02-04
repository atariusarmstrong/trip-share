import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'
import styled, {keyframes} from 'styled-components'
import {fadeInDown} from 'react-animations'

const fadeDown = keyframes`${fadeInDown}`

const GroupBlock = styled.div`
    width: 400px;
    height: 300px;
    float: left;
    margin: 10px;
    background: #D5FFFF;
    font-size: 20px;
    border-radius: 20px;
    &:hover {
        background: #00e6e6;
    }
    font-family: Avenir;
    text-transform: uppercase;
    color: #707070;
    text-align: center;
    animation: ${fadeDown} 2s;
    
`

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
                    <GroupBlock key={i}>
                        <h2>{groups.name}</h2>
                    </GroupBlock>
                ))}
            </div>
        );
    }
}

export default GroupsList;