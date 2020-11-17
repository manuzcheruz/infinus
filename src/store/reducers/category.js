import * as actionTypes from '../actions/actionTypes';

const initialState = {
    fetchBizzStart: false,
    businesses: [],
    error: null,
    categoryName: '',
    businessSlug: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BUSINESSES_IN_CATEGORY_START:
            return {
                ...state,
                fetchBizzStart: true
            }
        case actionTypes.FETCH_BUSINESSES_IN_CATEGORY_SUCCESS:
            return {
                ...state,
                businesses: action.data,
                fetchBizzStart: false
            }
        case actionTypes.FETCH_BUSINESSES_IN_CATEGORY_FAIL:
            return {
                ...state,
                error: action.error,
                fetchBizzStart: false
            }
        case actionTypes.CATEGORY_NAME:
            return {
                ...state,
                categoryName: action.name
            }
        case actionTypes.BUSINESS_DETAIL_SLUG:
            return {
                ...state,
                businessSlug: action.slug
            }
        default:
            return state
    }
}

export default reducer;