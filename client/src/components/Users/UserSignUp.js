import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    width: 800px;
    height: 350px;
    border-radius: 40px;
    background: #D5FFFF;
    text-align center;
    margin: 0 auto;
`


class UserSignUp extends Component {
    state = {
        user: {
            username: "",
            location: "",
            dreamTrip: "",
            passport: Boolean,
        }
    }

    handleChange = (e) => {
        const newState = {...this.state.user}
        // console.log(newState)
        newState[e.target.name] = e.target.value
        this.setState({user: newState})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.user
        axios.post('/api/signup', payload)
        console.log((res) => {
            console.log(res.data)
        })
    }


    render() {
        return (
            <div>
                <Container>
                    <h2>Tell us about yourself</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" value={this.state.user.username} placeholder="username" onChange={this.handleChange}/><br/>
                        <input type="text" name="location" value={this.state.user.location} placeholder="Where are you from?" onChange={this.handleChange}/><br/>
                        <input type="text" name="dreamTrip" value={this.state.user.dreamTrip} placeholder="Where's your dream destination?" onChange={this.handleChange}/><br/>
                        <input type="checkbox"/> Passport?
                        <br/>
                        <button type="submit">Sign Up</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default UserSignUp;