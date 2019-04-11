import React from "react";
import { Grid } from 'semantic-ui-react'


const StoryPage = props => {
  console.log(props.title);
    return (
      <div>
        <Grid
          style={{ paddingTop: 50 }}
          direction="column"
          align="center"
        >
          <Grid style={{ margin: 20 }}>
            <div
              dangerouslySetInnerHTML={{ __html: '<span style="text-align: center; ">' + props.location.state.description + '<span>' }}
            />
          </Grid>
        </Grid>
      </div>
    );
};
  export default StoryPage;
