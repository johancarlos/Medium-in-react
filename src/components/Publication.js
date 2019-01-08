import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardAction from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const Publication = (props) => {
    return (
        <div>
            { props.publication ? (
                <Card>                    
                    <CardMedia style={{height:0, paddingTop:'56.25%' }}
                        image = {props.publication.thumbnail}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='headline' component='h2'>
                        {props.publication.title}
                        </Typography>

                        <Typography component='p'>
                            {props.publication.author} - {props.publication.pubDate}
                        </Typography>

                    </CardContent>
                    <CardAction>
                        <button size='small' color='primary' href={props.publication.link} target='_blank'>
                            See more
                        </button>
                    </CardAction>                    
                </Card>
            ): null }
        </div>
    )
}
export default Publication 