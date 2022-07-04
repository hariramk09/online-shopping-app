import React from "react";
import { Item, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  addToCart,
  RemoveFromCart,
  AddCartPropertyToProduct,
  RemoveCartPropertyFromProduct,
  AddCartPropertyToCategory,
  RemoveCartPropertyFromToCategory,
} from "../actions";

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

const ItemList = (props) => {
  let btn = props.product.isCart;
  return (
    <Item>
      <img
        style={{ width: "180px", height: "120px" }}
        src={props.product.thumbnail}
      />
      <Item.Content style={{ marginLeft: 25 }}>
        <Item.Header as="a">{props.product.title}</Item.Header>
        <Item.Meta>
          <span className="cinema">{props.product.brand}</span>
        </Item.Meta>
        <Item.Extra style={{ textAlign: "right" }}>
          <Item.Meta>
            <h3>{"₹" + props.product.price}</h3>
          </Item.Meta>
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
        </Item.Extra>
      </Item.Content>
    </Item>
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
})(ItemList);
