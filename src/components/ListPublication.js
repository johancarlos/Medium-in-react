import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
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
        const publications = this.state.publications
        // console.log(publications)
        return(
            <div>
                {this.state.publications?(
                    <div>
                        <h1 style={{padding:24}} 
                        margin='normal'>Nearshore Code - Medium Stories
                        </h1>
                        <Grid container spacing={24}style={{padding: 24}}>
                            {this.state.publications.map(currentPublication => (
                                <Grid item key={currentPublication.guid}  xs={12} sm={6} lg={4} xl={3}>
                                    <Publication publication={currentPublication}>
                                    </Publication>
                                </Grid>
                            ))}
                        </Grid>
                    </div> 
                ) : "No publications found" }              
            </div>
        );
    }  
}
export default ListPublication