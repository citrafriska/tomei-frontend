import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

// // to connect our app to store
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//registerServiceWorker();
