import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';


class Footer extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">       
          <Grid container spacing={24}>
            <Grid item xs={8}>
              <Toolbar>
                <Button href="https://www.nearshorecode.com/"  variant="h5" color="inherit">
                  Nearshore Code Website
                </Button>
              </Toolbar>
            </Grid>

            <Grid item xs={4}>
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  CONTACTANOS
                </Typography>
              </Toolbar>
              <Typography color="inherit">
                Phone: 591-79328832 | 591-44025483
              </Typography>
              <Typography color="inherit">
                Email: hello@nearshorecode.com
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Toolbar>
              <Typography variant="subtitle2" color="inherit">
                Nearshore Academy © All rights reserved. 2019
              </Typography>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}
export default Footer;
