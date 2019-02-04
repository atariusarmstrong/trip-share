import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from '../NavBar';
import EditTripForm from './EditTripForm';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import editbutton from '../../icons/editbutton.png'
import deletebutton from '../../icons/delete.png'




const TripBlock = styled.div`
    width: 400px;
    height: 500px;
    float: left;
    margin: 10px;
    background: #D5FFFF;
    font-size: 20px;
    border-radius: 20px;
    color: #707070;
`

const Body = styled.div`
    font-family: Avenir;
    letter-spacing: 2px;
    color: #707070;
    text-align: center;
    text-transform: uppercase;
    input {
        width: 25%;
    }
`


class SingleTrip extends Component {
    state = {
        trip: {},
        showForm: false,
        redirect: false
    }

    componentDidMount() {
        this.getSingleTrip()
    }

    getSingleTrip = () => {
        const tripId = this.props.match.params.tripId
        Axios.get(`/api/trips/${tripId}`)
        .then((res) => this.setState({trip: res.data}))
    }

    toggleEditForm = () => {
        this.setState({ showForm: !this.state.showForm})
    }

    setRedirect = () => {
        this.setState({redirect: true})
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/trips' />
          }
    }

    deleteTrip = () => {
        const tripId = this.props.match.params.tripId
        Axios.delete(`/api/trips/${tripId}`)
        .then(()=> this.setRedirect())
    }

    render() {
        return (
            <div>
                <NavBar />
                <Body>
                    <TripBlock>
                        <h1>{this.state.trip.destination}</h1>
                        <p>from:{this.state.trip.from}</p>
                        <p>to: {this.state.trip.to}</p>
                        <h2>{this.state.trip.accomodation}</h2>
                        <h2>{this.state.trip.transportation}</h2>
                        

                            <img src={editbutton} alt='edit' onClick={this.toggleEditForm}/>

                        
                        {this.renderRedirect()}
                        <img src={deletebutton} alt="delete" onClick={this.deleteTrip}/>
                    </TripBlock>
                    
                    

                    {this.state.showForm ?  <EditTripForm getSingleTrip={this.getSingleTrip} tripId={this.state.trip._id} toggleEditForm={this.toggleEditForm}/> : null}
                </Body>
            </div>
        );
    }
}

export default SingleTrip;