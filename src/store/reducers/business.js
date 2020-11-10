import * as actionTypes from '../actions/actionTypes';

const initialState = {
    businesses: [],
    fetchStart: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BUSINESSES_START:
            return {
                ...state,
                fetchStart: true
            }
        case actionTypes.FETCH_BUSINESSES_SUCCESS:
            return {
                ...state,
                businesses: action.data,
                fetchStart: false
            }
        case actionTypes.FETCH_BUSINESSES_FAIL:
            return {
                ...state,
                error: action.error,
                fetchStart: false
            }
        default:
            return state
    }
}

export default reducer;