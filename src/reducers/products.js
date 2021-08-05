const initialState = { isLoading: false , products: []};

export const products = (state = initialState, action) => {
  switch (action.type) {
    
    case "SET_PRODUCTS":
        
        return {
          ...state,
          products: [...action.products],
        };

        case "SET_LOADING":
        
          return {
            ...state,
            isLoading: action.status,
          };

    default:
      return state;
  }
};
