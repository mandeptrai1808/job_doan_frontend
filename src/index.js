import React from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/Types/ConfigStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

Kommunicate.init("1b19fd173c49044b02976c2ab48c14be3" ,{"popupWidget":true,"automaticChatOpenOnNavigation":true})
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
