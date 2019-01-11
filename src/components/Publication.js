import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Publication = props => {
  const {
    thumbnail,
    guid,
    title,
    author,
    pubDate,
    description
  } = props.publication;

  const arrayID = guid.split("/");
  const id = arrayID[arrayID.length - 1];

  const arrayDate = pubDate.split(" ");
  const date = arrayDate[0];

  return (
    <div>
      {props.publication ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <Link
                to={{
                  pathname: `/stories/${id}`,
                  state: { description }
                }}
              >
                {title}
              </Link>
            </Typography>
            <Typography component="p">
              {author} - {date}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};
export default Publication;