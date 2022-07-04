import { dummyJSON } from "../api/dummyjson";
import _ from "lodash";

export const fetchProducts = () => {
  return async (dispatch) => {
    let res = await dummyJSON.get("Products?limit=100");
    res = await res.data;
    dispatch({ type: "FETCH_PRODUCTS", payload: res.products });
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    let res = await dummyJSON.get("products/categories");
    res = await res.data;
    dispatch({ type: "FETCH_CATEGORIES", payload: res });
  };
};

export const fetchProductsByCategory = (category) => {
  return (dispatch, getState) => {
    console.log(category);
    let state = getState();
    let res = category
      ? state.AllProducts.filter((product) => {
          if (product.category === category) return product;
        })
      : state.AllProducts;
    dispatch({ type: "FETCH_PRODUCT_BY_CATEGORY", payload: res });
  };
};

export const storeAllProducts = () => {
  return async (dispatch) => {
    let res = await dummyJSON.get("Products?limit=100");
    res = await res.data;
    dispatch({ type: "STORE_ALL_PRODUCTS", payload: res.products });
  };
};

export const addToCart = (product) => {
  let prod = _.cloneDeep(product);
  prod.isCart = true;
  return {
    type: "ADD_TO_CART",
    payload: prod,
  };
};

export const RemoveFromCart = (product) => {
  let prod = _.cloneDeep(product);
  prod.isCart = false;
  return {
    type: "REMOVE_FROM_CART",
    payload: prod,
  };
};

export const AddCartPropertyToProduct = (id) => {
  return (dispatch, getState) => {
    let state = getState();
    let Products = state.AllProducts.map((product) => {
      let prod = _.cloneDeep(product);
      if (id === prod.id) {
        prod.isCart = true;
        return prod;
      }
      return prod;
    });

    dispatch({ type: "ADD_CART_PROP_TO_PRODUCT", payload: Products });
  };
};

export const RemoveCartPropertyFromProduct = (id) => {
  return (dispatch, getState) => {
    let state = getState();
    let Products = state.AllProducts.map((product) => {
      let prod = _.cloneDeep(product);
      if (id === product.id) {
        prod.isCart = false;
        return prod;
      }
      return prod;
    });
    dispatch({ type: "REMOVE_CART_PROP_FROM_PRODUCT", payload: Products });
  };
};

export const AddCartPropertyToCategory = (id) => {
  return (dispatch, getState) => {
    let state = getState();
    let Products = state.ProductList.map((product) => {
      let prod = _.cloneDeep(product);
      if (id === prod.id) {
        prod.isCart = true;
        return prod;
      }
      return prod;
    });

    dispatch({ type: "ADD_CART_PROP_TO_CATEGORY", payload: Products });
  };
};

export const RemoveCartPropertyFromToCategory = (id) => {
  return (dispatch, getState) => {
    let state = getState();
    let Products = state.ProductList.map((product) => {
      let prod = _.cloneDeep(product);
      if (id === product.id) {
        prod.isCart = false;
        return prod;
      }
      return prod;
    });
    dispatch({ type: "REMOVE_CART_PROP_FROM_CATEGORY", payload: Products });
  };
};
