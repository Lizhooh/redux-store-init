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

export default (options, applyMiddlewares = []) => {

    options = {
        devtool: true,
        reducers: {},
        compose: [],
        initState: {},
        applyMiddlewares: [],
        ...options,
    };

    const _middleware = [...options.applyMiddlewares, ...applyMiddlewares];

    if (options.devtool && hasReduxTool) {
        options.compose.push(devtool(true));
    }

    return createStore(
        combineReducers({
            ...options.reducers,
        }),
        options.initState,
        compose(applyMiddleware(..._middleware), ...options.compose),
    );
}

export function createReducer(name, initState) {
    return (state = initState, action) => {
        if (action.newState && typeof action.newState !== 'function') {
            console.warn(`[${name}] action.newState is not a function`);
            return state;
        }
        if (action.type === name) {
            return action.newState(state, initState) || state;
        }
        return state;
    };
}