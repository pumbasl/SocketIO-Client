import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'emoji-mart/css/emoji-mart.css';
import { App } from './App';

import { Provider } from 'react-redux';
import { store } from './store/store';

const GlobalStyles = createGlobalStyle`
  .card-header {
    padding: 0.25em 0.5em;
  }
  .card-body {
    padding: 0.25em 0.5em;
  }
  .card-text {
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);