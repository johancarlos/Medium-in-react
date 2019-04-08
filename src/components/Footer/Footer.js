import React, { Component } from "react";
import './Fotter.css';
import { Image, Grid, Segment, Menu , Button } from 'semantic-ui-react';


class Footer extends Component {
  render() {
    return (
      <div style={{paddingTop:25}}>
        <Grid columns={2} divided >
            <Grid.Row stretched color={"black"}>
              <Grid.Column width={12} >
                <Segment inverted>
                <Button href="https://www.nearshorecode.com/" secondary >
                  NEARSHORECODE WEBSITE
                </Button>
                </Segment>
                <Segment inverted >
                  <p>Nearshore Code is a software development company located in South America, that delivers high quality solutions. We operate without any restriction of time, distance, culture or language. </p>
                  <p>We have the expertise and commitment to meet our customer’s needs, no matter the complexity of the challenge or technology required. </p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} style={{paddingTop:24}} >
                <h3>CONTACTANOS</h3>
                  <span>Phone: 591-79328832 | 591-44025483</span>
                  <span>Email: hello@nearshorecode.com</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid class="grid-footer">
            <Grid.Row color='black' textAlign='center'>
              <Grid.Column>
                <Segment inverted>
                  <span class="span-footer">Nearshore Academy © All rights reserved. 2019 </span>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}
export default Footer;
