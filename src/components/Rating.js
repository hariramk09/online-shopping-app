import React from "react";
import { Rating } from "semantic-ui-react";

const RatingStar = (props) => (
  <Rating icon="star" defaultRating={props.rating} maxRating={5} />
);

export default RatingStar;
