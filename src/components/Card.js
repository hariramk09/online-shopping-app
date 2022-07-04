import React from "react";
import _ from "lodash";
import { Card, Image, Icon } from "semantic-ui-react";
import RatingStar from "./Rating";
import {
  addToCart,
  RemoveFromCart,
  AddCartPropertyToProduct,
  RemoveCartPropertyFromProduct,
  AddCartPropertyToCategory,
  RemoveCartPropertyFromToCategory,
} from "../actions";
import { connect } from "react-redux";

const cartBtnStyle = {
  cursor: "pointer",
  border: "solid 1px white",
  borderRadius: "none",
  color: "white",
  padding: 5,
};

const AddTocartOnClick = (product, props) => {
  props.addToCart(product);
  props.AddCartPropertyToProduct(product.id);
  props.AddCartPropertyToCategory(product.id);
};

const RemoveTocartOnClick = (product, props) => {
  props.RemoveFromCart(product);
  props.RemoveCartPropertyFromProduct(product.id);
  props.RemoveCartPropertyFromToCategory(product.id);
};

const CardComponent = (props) => {
  let btn = props.product.isCart;
  return (
    <Card style={{ width: 350 }}>
      <img
        style={{ alignSelf: "center", width: 300, height: 300 }}
        src={props.product.thumbnail}
      />
      <Card.Content>
        <Card.Header>{props.product.title}</Card.Header>
        <Card.Meta>Brand: {props.product.brand}</Card.Meta>
        {props.product.rating ? (
          <Card.Meta>
            <RatingStar rating={props.product.rating} />
          </Card.Meta>
        ) : undefined}
        <h4>Price : {props.product.price}</h4>
      </Card.Content>
      <Card.Content
        style={{
          alignSelf: "center",
        }}
        extra
      >
        {!btn ? (
          <button
            type="button"
            style={cartBtnStyle}
            onClick={() => AddTocartOnClick(props.product, props)}
            className={"addToCart"}
          >
            <Icon name="cart" /> {"Add to Cart"}
          </button>
        ) : (
          <button
            type="button"
            style={cartBtnStyle}
            onClick={() => RemoveTocartOnClick(props.product, props)}
            className={"RemoveFromCart"}
          >
            <Icon name="close" /> {"Remove from Cart"}
          </button>
        )}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  addToCart,
  RemoveFromCart,
  AddCartPropertyToProduct,
  RemoveCartPropertyFromProduct,
  RemoveCartPropertyFromToCategory,
  AddCartPropertyToCategory,
})(CardComponent);
