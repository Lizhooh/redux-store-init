'use strict';var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a},_isEnv=require('is-env'),_isEnv2=_interopRequireDefault(_isEnv),_redux=require('redux');Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var hasReduxTool=(0,_isEnv2.default)('browser')&&!!window.__REDUX_DEVTOOLS_EXTENSION__,devtool=function(a){return a&&(0,_isEnv2.default)('browser')&&window.__REDUX_DEVTOOLS_EXTENSION__()};exports.default=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];a=_extends({devtool:!0,reducers:{},compose:[],initState:{},applyMiddlewares:[]},a);var c=[].concat(_toConsumableArray(a.applyMiddlewares),_toConsumableArray(b));return a.devtool&&hasReduxTool&&a.compose.push(devtool(!0)),(0,_redux.createStore)((0,_redux.combineReducers)(_extends({},a.reducers)),a.initState,_redux.compose.apply(void 0,[_redux.applyMiddleware.apply(void 0,_toConsumableArray(c))].concat(_toConsumableArray(a.compose))))};