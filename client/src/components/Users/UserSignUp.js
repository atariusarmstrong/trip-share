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
    render() {
        return (
            <div>
                <Container>
                    <h2>Tell us about yourself</h2>
                    <form>
                        <input type="text" placeholder="username"/><br/>
                        <input type="text" placeholder="Where are you from?"/><br/>
                        <input type="text" placeholder="Where's your dream destination?"/><br/>
                        <button type="submit">Sign Up</button>
                    </form>
                </Container>
            </div>
        );
    }
}

export default UserSignUp;