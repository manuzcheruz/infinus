import * as actionTypes from './actionTypes';

export const categoryName = cat => {
    return {
        type: actionTypes.CATEGORY_NAME,
        name: cat
    }
}

export const fetchBusinessesInCategoryStart = () => {
    return {
        type: actionTypes.FETCH_BUSINESSES_IN_CATEGORY_START
    }
}

export const fetchBusinessesInCategorySuccess = data => {
    return {
        type: actionTypes.FETCH_BUSINESSES_IN_CATEGORY_SUCCESS,
        data: data
    }
}

export const fetchBusinessesInCategoryFail = error => {
    return {
        type: actionTypes.FETCH_BUSINESSES_IN_CATEGORY_FAIL,
        error: error
    }
}

export const initFetchBusinessesInCategory = (name) => {
    return dispatch => {
        dispatch(fetchBusinessesInCategoryStart())
        const url = 'http://127.0.0.1:8000/rest-api/v1/business'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                dispatch(fetchBusinessesInCategorySuccess(responseData))
            })
            .catch(error => {
                dispatch(fetchBusinessesInCategoryFail(error))
            })
    }
}

