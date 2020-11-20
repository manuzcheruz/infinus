import * as actionTypes from './actionTypes';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = data => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        data: data
    }
}

export const fetchProductsFail = error => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}

export const initFetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart())
        const url = 'http://127.0.0.1:8000/rest-api/v1/products'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                dispatch(fetchProductsSuccess(responseData))
            })
            .catch(error => {
                dispatch(fetchProductsFail(error))
            })
    }
}

export const productSlug = slug => {
    return {
        type: actionTypes.PRODUCT_DETAIL_SLUG,
        slug: slug
    }
}

