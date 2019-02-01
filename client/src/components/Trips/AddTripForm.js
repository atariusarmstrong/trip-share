import React, { Component } from 'react';
import NavBar from '../NavBar';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 800px;
    height: 350px;
    border-radius: 40px;
    background: #D5FFFF;
    text-align center;
    margin: 0 auto;
    h2 {
        font-family: SignPainter;
        color: #707070;
        font-size: 40px;
        padding-top: 20px;
    }
    button {
        border-radius: 5px;
        background: #707070;
        width: 100px;
        height: 30px;
        font-family: Avenir;
        font-size: 20px
        color: white;
    }
    input {
        width: 85%;
        height: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        font-family: Avenir;
        text-transform: uppercase;
    }
`

class AddTripForm extends Component {
    state = {
        trip: {
            destination: "",
            from: "",
            to: "",
            accomodation: "",
            transportation: "",
        },
        redirect: false
    }

    handleChange = (e) => {
        const newState = {...this.state.trip}
        newState[e.target.name] = e.target.value
        this.setState({trip: newState})
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/trips' />
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.trip
        Axios.post(`/api/users/${this.props.match.params.userId}/addtrip`, payload)
        .then(this.setRedirect())
    }
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <h2>Where are you going?</h2>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" name="destination" value={this.state.trip.destination}n placeholder="Destination" onChange={this.handleChange}/><br/>
                        <input type="date" name="from" value={this.state.trip.from} onChange={this.handleChange}/><br/>
                        <input type="date" name="to" value={this.state.trip.to} onChange={this.handleChange}/><br/>
                        <input type="text" name="accomodation" value={this.state.trip.accomodation} placeholder="Accomodation" onChange={this.handleChange}/><br/>
                        <input type="text" name="transportation" value={this.state.trip.transportation} placeholder="Transportation" onChange={this.handleChange}/><br/>
                        {this.renderRedirect()}
                        <button type="submit">Let's Go!</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default AddTripForm;