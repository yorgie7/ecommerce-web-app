const initialState = { isLoading: false, products: [] };

export const products = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: [...action.products], isLoading: false
      };

    case "FETCH_PRODUCT_STARTED":
      return {
        ...state, isLoading: true,
      }

    default:
      return state;
  }
};
