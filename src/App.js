import 'react-native-gesture-handler'
import React from 'react'
import Navigations from './navigation/Navigations'
import { Provider } from 'react-redux'
import { store } from './stores/index'

const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  )
}

export default App
