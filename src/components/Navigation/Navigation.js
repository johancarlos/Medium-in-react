import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from "react-router-dom";
import logo from '../../Images/nearshorelogo.png';

class Navigation extends Component {
    render() {
    return (
        <div>
            <AppBar position='static' color="primary">
                <Toolbar>
                <Link to="/" ><img src={logo} width={250} alt="My logo" /></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
}

export default Navigation;
