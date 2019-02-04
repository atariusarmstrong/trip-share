import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'



const Navigation = styled.div`
    background: #D5FFFF;
    display: flex;
    justify-content: space-between;
`

const LinkList = styled.ul`
    font-family: Avenir;
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    
    a {
        text-decoration: none;
        color: #707070;
        &:hover{
            color: #00e6e6;
        }
    }
    li{
        margin: 10px;
        float: right;
    }
`
const Header = styled.h1`
    font-family: SignPainter;
    font-size: 40px
    color: #707070;
    margin-left: 10px;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                
                <Navigation>
                    <Header>TripShare</Header>
                    <LinkList>
                        <Link to="/trips"><li>Trips</li></Link>
                        <Link to='/groups'><li>Groups</li></Link>
                        <Link to='/users'><li>Travelers</li></Link>
                    </LinkList>
                    
                </Navigation>
            </div>
        );
    }
}

export default NavBar;