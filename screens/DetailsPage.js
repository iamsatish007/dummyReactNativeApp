import { View, Text, TouchableOpacity, TextInput } from 'react-native'
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
  const [name, setName] = useState('')



  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const decreaseNumber = () => {
    setNumber(number - 1)
  }


  return (
    <View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => { decreaseNumber() }}>
          <Text style={{ fontSize: 40 }}>-</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, margin: 20 }}>{number}</Text>

        <TouchableOpacity onPress={() => { increaseNumber() }}>
          <Text style={{ fontSize: 40 }}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Enter Name:</Text>
        <TextInput value={name} onChangeText={(val) => { setName(val) }} style={{ height: 50, width: 200, borderWidth: 1, borderColor: '#ff0000' }} placeholder='This is placeholder'></TextInput>
      </View>

    </View>
  )
}