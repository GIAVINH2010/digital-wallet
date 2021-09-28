import React from 'react';
import store from 'store/store'
import { Provider } from 'react-redux'
import AppRouter from 'router'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App;
