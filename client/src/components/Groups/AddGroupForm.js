import React, { Component } from 'react';
import NavBar from '../NavBar';
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 800px;
    height: 200px;
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
        text-transform: uppercase;
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

class AddGroupForm extends Component {
    state = {
        group: {
            name: ""
        },
        redirect: false
    }

    handleChange = (e) => {
        const newState = {...this.state.group}
        newState[e.target.name] = e.target.value
        this.setState({group: newState})
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/groups' />
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = this.state.group
        Axios.post(`/api/users/${this.props.match.params.userId}/addgroup`, payload)
        .then(this.setRedirect())
    }


    render() {
        return (
            <div>
                   <NavBar/>
                   <Container>
                    <h2>Let's make a group</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.group.name} placeholder="Group Name" onChange={this.handleChange}/><br/>
                        {this.renderRedirect()}
                        <button type='submit'>Let's Go</button>
                    </form>
                   </Container>

            </div>
        );
    }
}

export default AddGroupForm;