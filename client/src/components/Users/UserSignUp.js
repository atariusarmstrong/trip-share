import React, { Component } from 'react';
import styled from 'styled-components'

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
        console.log(newState)
        newState[e.target.name] = e.target.value
        this.setState({user: newState})
        
    }


    render() {
        return (
            <div>
                <Container>
                    <h2>Tell us about yourself</h2>
                    <form>
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange}/><br/>
                        <input type="text" name="location" placeholder="Where are you from?" onChange={this.handleChange}/><br/>
                        <input type="text" name="dreamTrip" placeholder="Where's your dream destination?" onChange={this.handleChange}/><br/>
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