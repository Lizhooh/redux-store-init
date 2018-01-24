

### redux-store-init
redux-store-init is a function used to initialize store.

### install

```js
npm install --save redux react-redux redux-thunk
npm install --save redux-store-init
```

### use

```js
import { Provider } = require('react-redux');
import Store from 'redux-store-init';
import * as reducers from './reducers';
const store = Store({ reducers, devtool: true });

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
```
