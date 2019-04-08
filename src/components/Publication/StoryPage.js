import React from "react";
import { Grid } from 'semantic-ui-react'

const StoryPage = props => {
  console.log(props);
console.log(props.title);

  return (
    <div>
      <Grid
        style={{ padding: 50 }}
        direction="column"
      >
        <Grid>
          <div
            dangerouslySetInnerHTML={{ __html: '<span style="text-align: center; ">' + '<h1>' + props.title + '</h1>' + props.location.state.description + '<span>' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default StoryPage;
