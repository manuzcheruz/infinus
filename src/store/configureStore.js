import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import businessesReducer from './reducers/business';
import categoryReducer from './reducers/category';
import productReducer from './reducers/product';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    bizz: businessesReducer,
    category: categoryReducer,
    products: productReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)

