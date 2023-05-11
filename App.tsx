import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from './src/stores/store'
import Navigation from './src/navigation'

const App = () => {
  return (
   <Provider store={store}>
        <Navigation/>
   </Provider>
  )
}

export default App