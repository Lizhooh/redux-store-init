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

const middleware = (open) => {
    return open && hasReduxTool ?
        [applyMiddleware(thunk), devtool(true)] :
        [applyMiddleware(thunk)];
};

export default (options) => {

    options = {
        devtool: true,
        reducers: {},
        compose: [],
        ...options,
    };

    return createStore(
        combineReducers({
            ...options.reducers,
        }),
        compose(...middleware(options.devtool), ...compose),
    );
}
