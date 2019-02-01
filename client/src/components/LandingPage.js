import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import background from '../photos/background.jpg'

const Button = styled.button`
    border-radius: 20px;
    background: white;
    width: 261px;
    height: 75px;
    font-family: SignPainter;
    font-size: 40px
    color: #707070;
`

const Header = styled.h1`
    font-family: SignPainter;
    font-size: 120px;
    color: #707070;
`

const Tag = styled.p`
    font-size: 40px;
    font-family: "Source Serif Pro"
`

const Body = styled.div`
    background-image: url(${background})
    max-height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Body>
                    {/* hello
                    <img src={background} alt="background"/> */}
                </Body>
                    <Header>TripShare</Header>
                
                <Tag>Let's plan your next trip together.</Tag>

                <Link to='/signup'><Button>Let's Go!</Button></Link>
                <Body></Body>
            </div>
        );
    }
}

export default LandingPage;