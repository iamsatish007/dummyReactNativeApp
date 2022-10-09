import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import DetailsPage from './DetailsPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginDemo from './LoginDemo'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsPage} />
      <Stack.Screen name="LoginDemo" component={LoginDemo} />
    </Stack.Navigator>
  )
}