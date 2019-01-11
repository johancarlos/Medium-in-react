import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from "react-router-dom";

class Navegation extends Component {
    render() {
    return (
        <div>
            <AppBar position='static' color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    <Link to="/" >Nearshore Academy</Link>
                    </Typography>                    
                </Toolbar>
            </AppBar>
        </div>
    );
}
}

export default Navegation;