import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Responsive } from  'semantic-ui-react'
import Publication from './Publication.js'

const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/nearshore-code`

class ListPublication extends Component{
    state = {
        publications: []
    }
    constructor(){
        super()
        this.getPublication()
    }
    getPublication = () => {
        axios.get(url).then((response) => {
            const publications = response.data.items
            this.setState({ publications: publications})
        });
    }
    render (){
        return(
            <div>
                {this.state.publications?(
                    <div>
                        <h1 style={{padding:24}}>Nearshore Code - Medium Stories
                        </h1>
                        <Responsive as={Grid} columns={5} minWidth={200}  relaxed='very'style={{margin:0}}>
                            {this.state.publications.map(currentPublication => (
                              <Grid.Column>
                                  <Grid style={{margin:0}}>
                                    <Publication publication={currentPublication} >
                                    </Publication>
                                    </Grid>
                              </Grid.Column>
                            ))}
                        </Responsive>
                    </div>
                ) : "No publications found" }
            </div>
        );
    }
}
export default ListPublication
