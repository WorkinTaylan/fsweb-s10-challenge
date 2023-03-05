import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {applyMiddleware ,createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import train from './reducers';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

 const store=createStore(train,applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
  <BrowserRouter>
    <>
      <App />
      <ToastContainer/>
    </>
  </BrowserRouter>
  </Provider>
);

//reportWebVitals 
