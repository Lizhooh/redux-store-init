import isEnv from 'is-env';
import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

const hasReduxTool = isEnv('browser') && !!window.__REDUX_DEVTOOLS_EXTENSION__;

const devtool = (open) => (
    open && isEnv('browser') && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default (options) => {

    options = {
        devtool: true,
        reducers: {},
        compose: [],
        applyMiddlewares: [],
        ...options,
    };

    const _middleware = [...options.applyMiddlewares];

    if (open && hasReduxTool) {
        options.compose.push(devtool(true));
    }

    return createStore(
        combineReducers({
            ...options.reducers,
        }),
        compose(applyMiddleware(..._middleware), ...options.compose),
    );
}
