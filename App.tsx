import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/stores/store'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
   <Provider store={store}>
      <NavigationContainer>
        <Home/>
      </NavigationContainer>
   </Provider>
  )
}

export default App