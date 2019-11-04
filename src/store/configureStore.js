import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

/**
|--------------------------------------------------
| 开启redux store,方便查看store中的state信息
|--------------------------------------------------
*/
let composeEnhancer = compose;
if (__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
/**
|--------------------------------------------------
| 注释结束
|--------------------------------------------------
*/
export default function configureStore(initialState) {
    const middleware = [thunk];
    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middleware))
    );
    return store;
}
