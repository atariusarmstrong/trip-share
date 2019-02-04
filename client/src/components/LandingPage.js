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
    position: absolute;
    right: 140px;
    bottom: 100px;
`

const Header = styled.h1`
    font-family: SignPainter;
    font-size: 120px;
    color: #707070;
    margin: 0;
    position: relative;
    top: 80px;
    left: 60px;
`

const Tag = styled.p`
    font-size: 40px;
    font-family: "Source Serif Pro"
`

const Body = styled.div`
    background-image: url("${background}");
    height: 100vh;
    width: 90vw;
    top: 0px;
    right: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    -webkit-clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);
    clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%);


`

class LandingPage extends Component {
    render() {
        return (
            <div>

            
                <Body>
                    

                    <Tag>Let's plan your next trip together.</Tag>

                    
                </Body>
                <Header>TripShare</Header>
                <Link to='/signup'><Button>Let's Go!</Button></Link>
                    
                
                
            </div>
        );
    }
}

export default LandingPage;