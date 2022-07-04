const ProductListReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return [...action.payload];
    }
    case "FETCH_PRODUCT_BY_CATEGORY":
      return [...action.payload];
    case "ADD_CART_PROP_TO_CATEGORY":
      return [...action.payload];
    case "REMOVE_CART_PROP_FROM_CATEGORY":
      return [...action.payload];
    default:
      return state;
  }
};

export default ProductListReducer;
