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
    text-align: center;

`

const Tag = styled.p`
    font-size: 40px;
    font-family: "Source Serif Pro"
`

const Body = styled.div`
    background-image: url("${background}");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Body>
                    {/* hello
                    <img src={background} alt="background"/> */}
                    <Header>TripShare</Header>

                    <Tag>Let's plan your next trip together.</Tag>

                    <Link to='/signup'><Button>Let's Go!</Button></Link>
                </Body>
                    
                
                
            </div>
        );
    }
}

export default LandingPage;