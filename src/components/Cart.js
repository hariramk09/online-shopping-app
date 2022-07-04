import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
import AppBar from "./AppBar";
import ItemList from "./ItemList";

const Cart = (props) => {
  useEffect(() => {
    console.log("hi");
    return () => {
      console.log(`Hi, I'm unounting`);
    };
  }, []);

  console.log(props.CartItems);
  return (
    <React.Fragment>
      <AppBar />
      <Container style={{ marginTop: 90 }}>
        <Item.Group divided>
          {props.CartItems.length > 0 ? (
            props.CartItems.map((product) => {
              return <ItemList product={product} />;
            })
          ) : (
            <h5>Cart is Empty</h5>
          )}
          <Item style={{ padding: "30px" }}>
            <Item.Content>
              <Item.Header>
                <h2>Total</h2>
              </Item.Header>
              <Item.Header style={{ float: "right" }}>
                ₹
                {props.CartItems.reduce(
                  (prevValue, curValue) => prevValue + curValue.price,
                  0
                )}
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    CartItems: state.Cart,
  };
};

export default connect(mapStateToProps)(Cart);
