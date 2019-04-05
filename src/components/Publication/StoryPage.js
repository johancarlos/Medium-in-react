import React from "react";
import { Grid } from 'semantic-ui-react'

const StoryPage = props => {
  console.log(props);
const name = props.title;

  return (
    <div>
      <Grid
        style={{ paddingTop: 50 }}
        container
        spacing={24}
        direction="column"
        align="center"
      >
        <Grid>
          <div
            dangerouslySetInnerHTML={{ __html: '<span style="text-align: center; ">' + '<h1>' + name + '</h1>' + props.location.state.description + '<span>' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default StoryPage;
