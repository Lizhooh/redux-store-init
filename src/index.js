import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import isEnv from 'is-env';

const hasReduxTool = isEnv('browser') && !!window.__REDUX_DEVTOOLS_EXTENSION__;

const devtool = (open) => (
    open && isEnv('browser') && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const middleware = (open, applyMiddlewares) => {
    return open && hasReduxTool ?
        [applyMiddleware(thunk), devtool(true), ...applyMiddlewares] :
        [applyMiddleware(thunk), ...applyMiddlewares];
};

export default (options) => {

    options = {
        devtool: true,
        reducers: {},
        compose: [],
        applyMiddlewares: [],
        ...options,
    };

    const _compose = [];
    const _middleware = [thunk, ...options.applyMiddlewares];

    _compose.push(applyMiddleware(..._middleware), options.compose);

    if (open && hasReduxTool) {
        _compose.push(devtool(true));
    }

    return createStore(
        combineReducers({
            ...options.reducers,
        }),
        compose(_compose),
    );
}
