import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: rootReducer,
})
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
        <Toaster />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
