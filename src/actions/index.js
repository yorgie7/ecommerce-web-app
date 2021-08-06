
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_STARTED = "FETCH_PRODUCT_STARTED";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";




export const getProductListData = () => {
  return dispatch => {
    dispatch(fetchProductStarted());

    fetch("/json/productList.json")
      .then(response => response.json()).then(data => {
        console.log(data)
        dispatch(fetchProductSuccess(data));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
const fetchProductSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  products,
});

const fetchProductStarted = () => ({
  type: FETCH_PRODUCT_STARTED,
});

export const addToCart = (product) => ({
  type: ADD_PRODUCT,
  product
});

export const removeFromCart = (id) => ({
  type: REMOVE_PRODUCT,
  id
});