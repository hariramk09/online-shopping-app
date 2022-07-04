import React from "react";
import { Grid, Image } from "semantic-ui-react";
import CardComponent from "./Card";
import LazyLoad from "react-lazyload";

const CardList = (props) => {
  return (
    <React.Fragment>
      <Grid container columns={3}>
        <Grid.Row>
          {props.products.map((e) => {
            return (
              <Grid.Column style={{ padding: 20 }}>
                <LazyLoad height={250} once>
                  <CardComponent product={e} />
                </LazyLoad>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default CardList;
