import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import background from '../photos/background.jpg'
import {fadeInRight, fadeInLeft} from 'react-animations'

const faderight = keyframes`${fadeInRight}`
const fadeleft = keyframes`${fadeInLeft}`

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
    animation: ${faderight} 4s;
    &:hover {
        background: #00e6e6;
    } 
`

const Header = styled.h1`
    font-family: SignPainter;
    font-size: 120px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    margin: 0;
    position: relative;
    top: 80px;
    left: 60px;
    animation: ${fadeleft} 3s;
`

const Tag = styled.div`
    font-size: 40px;
    font-family: "Source Serif Pro";
    color: #D5FFFF;
    text-shadow: 2px 2px 4px #000000;
    animation: ${fadeleft} 3.5s;
    position: relative;
    top: 90px;
    left: 70px;
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
    animation: ${faderight} 2s;

`

class LandingPage extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#D5FFFF", height: "100vh"}}>

            
                <Body>   
                </Body>
                <Header>TripShare</Header>
                <Tag>Let's plan your next trip together.</Tag>
                <Link to='/signup'><Button>Let's Go!</Button></Link>
                    
                
                
            </div>
        );
    }
}

export default LandingPage;