import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import Reducer from './reducers/Reducer';

// write the below initialState in Reducer.js
// const initialState = {
//   name : "Ravi",
//   age : 20,
//   status : "Coder"
// }
const store = configureStore({
  reducer : Reducer,
  // preloadedState : initialState <- it will be set in Reducer.js
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
