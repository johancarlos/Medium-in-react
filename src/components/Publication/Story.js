import React from "react";
import { Image } from 'semantic-ui-react';


const Story = props => {
        const {
          thumbnail,
          title,
          author,
          description
        } = props.story;

        return(
            <div style={{textAlign:"centeded"}} >
              {props.story?(
                <div style={{padding: 50}} >
                  <h1>{title}</h1>
                  <h4>{author}</h4>
                  <Image src={thumbnail} style={{height:160}}/>
                  <span spacing={24}>{description}</span>
                </div>
              ) : null}
            </div>
        );
}
export default Story;
