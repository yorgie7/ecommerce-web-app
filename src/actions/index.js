
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_LOADING = "SET_LOADING";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setProducts = (products) => ({
    type : SET_PRODUCTS,
    products,
});

export const setLoading = (status) => ({
    type : SET_LOADING,
    status,
});

export const addToCart = (product) => ({
    type : ADD_PRODUCT,
    product
});

export const removeFromCart = (id) => ({
    type : REMOVE_PRODUCT,
    id
});