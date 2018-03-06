

### redux-store-init
redux-store-init is a function used to initialize store.

### install

```js
npm install --save redux-store-init
```

### use

```js
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } = require('react-redux');
import * as reducers from './reducers';
import Store from 'redux-store-init';
import thunk from 'redux-thunk';
import logger from 'redux-diff-logger';

const store = Store({ reducers, devtool: true, applyMiddlewares: [thunk, logger] });

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
```

### options

- devtool: Boolean
- reducers: Object
- compose: Array
- applyMiddlewares: Array

