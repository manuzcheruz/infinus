import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fetchProductStart: false,
    products: [],
    error: null,
    productSlug: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                fetchProductStart: true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.data,
                fetchProductStart: false
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.error,
                fetchProductStart: false
            }
        case actionTypes.PRODUCT_DETAIL_SLUG:
            return {
                ...state,
                productSlug: action.slug
            }
        default:
            return state
    }
}

export default reducer;