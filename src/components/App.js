import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import "semantic-ui-css/semantic.min.css";
import MainPage from "./MainPage";
import { connect } from "react-redux";
import {
  storeAllProducts,
  fetchProducts,
  fetchCategories,
} from "../actions/index";

const App = (props) => {
  useEffect(() => {
    props.storeAllProducts();
    props.fetchProducts();
    props.fetchCategories();
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <React.Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<MainPage />}></Route>
              <Route path="cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  storeAllProducts,
  fetchProducts,
  fetchCategories,
})(App);
