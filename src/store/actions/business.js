import * as actionTypes from './actionTypes';

export const fetchBusinessStart = () => {
    return {
        type: actionTypes.FETCH_BUSINESSES_START
    }
}

export const fetchBusinessSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BUSINESSES_SUCCESS,
        data: data
    }
}

export const fetchBusinessFail = error => {
    return {
        type: actionTypes.FETCH_BUSINESSES_FAIL,
        error: error
    }
}

export const initFetchBusiness = () => {
    return dispatch => {
        dispatch(fetchBusinessStart())
        const url = 'http://127.0.0.1:8000/rest-api/v1/business'
        fetch(url)
            .then(repsonse => {
                return repsonse.json()
            })
            .then(responseData => {
                dispatch(fetchBusinessSuccess(responseData))
            })
            .catch(error => {
                dispatch(fetchBusinessFail(error))
            })
    }
}

export const businessDetailSlug = slug => {
    return {
        type: actionTypes.BUSINESS_DETAIL_SLUG,
        slug: slug
    }
}