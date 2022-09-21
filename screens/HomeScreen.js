import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()

  // This is a function. (ES6 Definition)
  const testFunction = () => {
    // Alert.alert('This is test alert.')
    navigation.navigate('Details')
  }

  // This is also a function.
  function testFunction2() {

  }



  return (
    <View style={styles.mainContainer}>

      <View style={styles.trendingViewContainer}>
        <Text style={styles.trendingTextStyle}>Trending Movies</Text>
      </View>

      <View style={styles.cardContainer}>
        <ScrollView horizontal>
          <TouchableOpacity onPress={() => { testFunction() }}>
            <MovieCard></MovieCard>
          </TouchableOpacity>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </ScrollView>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    padding: '5%',
    backgroundColor: 'black'
  },
  trendingViewContainer: {
    width: '90%',
    padding: 20
  },
  trendingTextStyle: {
    color: 'yellow',
    fontSize: 35,
  },
  cardContainer: {
    width: '95%',
  },
})