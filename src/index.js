import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

const hasReduxTool = !!window.__REDUX_DEVTOOLS_EXTENSION__;

const devtool = (open) => (
    open && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const middleware = (open) => {
    return open && hasReduxTool ?
        compose(applyMiddleware(thunk), devtool(true)) :
        applyMiddleware(thunk);
};

export default (options) => {

    options = {
        devtool: true,
        reducers: {},
        ...options,
    };

    return createStore(
        combineReducers({
            ...options.reducers,
        }),
        middleware(options.devtool),
    );
}
