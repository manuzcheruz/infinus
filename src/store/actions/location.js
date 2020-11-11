import * as actionTypes from './actionTypes';

export const findLocation = location => {
    return {
        type: actionTypes.FETCH_USER_LOCATION_SUCCESS,
        location: location
    }
}

export const findLocationFail = error => {
    return {
        type: actionTypes.FETCH_USER_LOCATION_FAIL,
        error: error
    }
}