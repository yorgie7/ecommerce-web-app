export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export const removeProductFromCart = (productId) => {
  return dispatch => {
    dispatch(removeFromCart(productId))
  }
}

const removeFromCart = (id) => ({
  type: REMOVE_PRODUCT,
  id
});