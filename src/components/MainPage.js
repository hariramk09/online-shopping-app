import React, { useEffect } from "react";
import AppBar from "./AppBar";
import "../css/Layout.css";
import { connect } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
  storeAllProducts,
  AddCartPropertyToProduct,
} from "../actions/index";
import CardList from "./CardList";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <AppBar />
      <CardList products={props.products} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { products: state.ProductList };
};

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  storeAllProducts,
  AddCartPropertyToProduct,
})(MainPage);
