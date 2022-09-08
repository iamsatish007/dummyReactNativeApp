import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.boldText}>This is HomeScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ff0',
    alignItems:'center'
  },
  boldText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})