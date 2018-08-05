import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './store/';
import '../public/styles/main.scss';

console.log('app begins', store);

const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);