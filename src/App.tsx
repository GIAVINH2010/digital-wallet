import React from 'react';
import store from 'store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import AppRouter from 'router'

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  )
}

export default App;
