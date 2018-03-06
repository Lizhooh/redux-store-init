

### redux-store-init
redux-store-init is a function used to initialize store.

### install

```js
npm install --save redux react-redux redux-thunk
npm install --save redux-store-init
```

### use

```js
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } = require('react-redux');
import * as reducers from './reducers';
import Store from 'redux-store-init';

const store = Store({ reducers, devtool: true });

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



