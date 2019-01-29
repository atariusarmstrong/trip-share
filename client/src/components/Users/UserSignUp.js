import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import NavBar from '../NavBar';


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
            image: "",
            location: "",
            dreamTrip: "",
            passport: Boolean,
        },
        redirect: false,
    }

    handleChange = (e) => {
        const newState = {...this.state.user}
        newState[e.target.name] = e.target.value
        this.setState({user: newState})
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/users' />
        }
      }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.user
        axios.post('/api/signup', payload)
        console.log((res) => {
            console.log(res.data)
        })
        this.setState({redirect: true})
    }


    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <h2>Tell us about yourself</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" value={this.state.user.username} placeholder="username" onChange={this.handleChange} required/><br/>
                        <input type="text" name="image" value={this.state.user.image} placeholder="Link to Profile Photo" onChange={this.handleChange} /><br/>
                        <input type="text" name="location" value={this.state.user.location} placeholder="Where are you from?" onChange={this.handleChange}/><br/>
                        <input type="text" name="dreamTrip" value={this.state.user.dreamTrip} placeholder="Where's your dream destination?" onChange={this.handleChange}/><br/>
                        <input type="checkbox"/> Passport?
                        <br/>
                        {this.renderRedirect()}
                        <button type="submit">Sign Up</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default UserSignUp;