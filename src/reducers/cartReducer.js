const initialState = { cartProducts: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // action.product
    case "ADD_PRODUCT":
      const keys = state.cartProducts.map(el => el.id);
      
        if(keys.includes(action.product.id)){
          const singleProductArr = state.cartProducts.filter((el)=> el.id === action.product.id);
   
          const singleProductObject = {...singleProductArr[0], quantity: singleProductArr[0].quantity + 1};
    
          const restProducts = state.cartProducts.filter((el)=> el.id !== action.product.id);
    
          return {...state,
            cartProducts: [ ...restProducts , singleProductObject]
          };
        }

        else return {...state,
          cartProducts: [...state.cartProducts, {...action.product, quantity: 1}]
        };
       

        case "REMOVE_PRODUCT":
         const arr = state.cartProducts.filter( el => el.id !== action.id);
          return {
            ...state,  cartProducts: arr
          };
         

    default:
      return state;
  }
};
