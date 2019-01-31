import React, { Component } from 'react';
import NavBar from '../NavBar';
import UserSelector from './UserSelector';


class AddGroupForm extends Component {
    

    render() {
        return (
            <div>
                   <NavBar/>
                   <h2>Where are you going?</h2>
                   <form>
                       <input type="text" placeholder="Group Name"/><br/>
                       {/* <UserSelector/> */}
                   </form>

            </div>
        );
    }
}

export default AddGroupForm;