import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from "react-router-dom";
import logo from './logo.png';

class Navegation extends Component {
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

export default Navegation;