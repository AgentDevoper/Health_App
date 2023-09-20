import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Draw from './src/component/Draw'
import { NavigationContainer } from '@react-navigation/native'
import Stk from './src/component/Stk'

const App = () => {
  return (
    <NavigationContainer>
      <Draw />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})