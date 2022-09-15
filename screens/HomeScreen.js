import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard'

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.trendingViewContainer}>
        <Text style={styles.trendingTextStyle}>Trending Movies</Text>
      </View>

      <View style={styles.cardContainer}>
        <ScrollView horizontal>
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