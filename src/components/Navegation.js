import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const Navegation = () => {
    return (
        <div>
            <AppBar position='static' color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Nearshore Academy
                    </Typography>                    
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Navegation;