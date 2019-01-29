import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Navigation = styled.ul`
    background: #D5FFFF;
    list-style-type: none;
    display: flex;

`
const Header = styled.h1`
    font-family: SignPainter;
    font-size: 40px
    color: #707070;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                
                <Navigation>
                    <Header>TripShare</Header>
                    <Link to="/trips"><li>Trips</li></Link>
                    <Link to='/groups'><li>Groups</li></Link>
                    <Link to='/users'><li>Travelers</li></Link>
                </Navigation>
            </div>
        );
    }
}

export default NavBar;