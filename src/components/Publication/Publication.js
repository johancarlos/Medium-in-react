import React from "react";
import { Card, Image } from 'semantic-ui-react';
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
        <Card style={{width:300, height:270}}>
          <Image src={thumbnail} style={{height:160}}/>
            <Card.Content>
              <Card.Header>
              <Link
                to={{
                  pathname: `/stories/${id}`,
                  state: { description }
                }}>
              {title}
              </Link>
            </Card.Header>
            <Card.Meta>
              <span className='date'>{author} - {date}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      ) : null}
    </div>
  );
};
export default Publication;
