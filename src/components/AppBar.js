import React, { useState } from "react";
import { Input, Menu, Dropdown, Label } from "semantic-ui-react";
import logo from "../images/Logo.png";
import { connect } from "react-redux";
import { fetchProductsByCategory, storeAllProducts } from "../actions/index";
import { Link } from "react-router-dom";

const MenuExampleSecondary = (props) => {
  let [activeItem, setActiveItem] = useState("All Products");

  const menuStyle = {
    padding: 12,
    maxWidth: 150,
    maxHeight: 100,
    marginRight: 30,
  };

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if (name == "All Products") props.fetchProductsByCategory("");
  };

  const handleCategoryClick = (category) => {
    props.fetchProductsByCategory(category);
  };

  return (
    <Menu
      className={"fixed"}
      stackable
      secondary
      style={{ backgroundColor: "rgb(59 110 201)" }}
    >
      <div>
        <img alt={"Logo"} style={menuStyle} src={logo} />
      </div>
      <Menu.Item
        name="All Products"
        active={activeItem === "All Products"}
        onClick={handleItemClick}
      >
        <Link style={{ color: "white" }} to="/">
          All Products
        </Link>
      </Menu.Item>

      <Dropdown text="Categories" name="categories" onClick={handleItemClick}>
        <Dropdown.Menu>
          {props.Categories.length > 0
            ? props.Categories.map((category) => {
                return (
                  <Dropdown.Item
                    text={<Link to="/">{category}</Link>}
                    onClick={() => handleCategoryClick(category)}
                  />
                );
              })
            : undefined}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input style={{ width: 400 }} icon="search" placeholder="Search" />
        </Menu.Item>
        <Menu.Item
          name="cart"
          active={activeItem === "cart"}
          onClick={handleItemClick}
        >
          <Link style={{ color: "white" }} to="cart">
            Cart
            <Label color="red" floating>
              {props.cart.length}
            </Label>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    Categories: state.Categories,
    Products: state.AllProducts,
    cart: state.Cart,
  };
};

export default connect(mapStateToProps, {
  fetchProductsByCategory,
  storeAllProducts,
})(MenuExampleSecondary);
