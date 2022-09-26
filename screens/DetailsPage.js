import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function DetailsPage() {

  // States (It is used to store data)
  const [number, setNumber] = useState(1) // declaration of state

  const [movieDetails, setMovieDetails] = useState([
    {
      movieName: 'The Lord of the Rings',
      image: 'https://picsum.photos/220/220',
      rating: 5.8
    },
    {
      movieName: 'The Lord of the Rings2',
      image: 'https://picsum.photos/220/220',
      rating: 5.8
    },
    {
      movieName: 'The Lord of the Rings3',
      image: 'https://picsum.photos/220/220',
      rating: 5.8
    }
  ])


  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const decreaseNumber = () => {
    setNumber(number - 1)
  }


  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => { decreaseNumber() }}>
        <Text style={{ fontSize: 40 }}>-</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 25, margin: 20 }}>{number}</Text>

      <TouchableOpacity onPress={() => { increaseNumber() }}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </TouchableOpacity>
    </View>
  )
}