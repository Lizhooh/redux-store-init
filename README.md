

### redux-store-init
redux-store-init is a function used to initialize store.


<a href="https://www.npmjs.com/package/redux-store-init"><img src="https://img.shields.io/npm/v/redux-store-init.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/redux-store-init"><img src="https://img.shields.io/npm/dm/redux-store-init.svg?style=flat-square"></a>


### install

```js
npm install --save redux-store-init
```

### use

```js
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import Store from 'redux-store-init';

import thunk from 'redux-thunk';
import logger from 'redux-diff-logger';

const store = Store({ reducers, devtool: true, applyMiddlewares: [thunk, logger] });
// or
// Store({ reducers, devtool: true }, [thunk, logger]);

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
- initState: Object
- applyMiddlewares: Array

