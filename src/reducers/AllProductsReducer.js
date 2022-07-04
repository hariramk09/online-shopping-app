const AllProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_ALL_PRODUCTS":
      return [...action.payload];
    case "ADD_CART_PROP_TO_PRODUCT":
      return [...action.payload];
    case "REMOVE_CART_PROP_FROM_PRODUCT":
      return [...action.payload];
  }

  return state;
};

export default AllProductsReducer;
