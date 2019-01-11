import React from "react";
import Grid from "@material-ui/core/Grid";


const StoryPage = props => {
  console.log(props);

  //let title = props.location.search;

  return (
    <Grid
      style={{ paddingTop: 50 }}
      container
      spacing={24}
      direction="column"
      align="center"
    >
      <Grid item xs={8} sm={8} lg={8} xl={8}>
        {/* <h1 dangerouslySetInnerHTML={{ __html: title }} /> */}
        <div 
          dangerouslySetInnerHTML={{ __html: props.location.state.description }}
        />
      </Grid>
    </Grid>
  );
};
export default StoryPage;
