import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.nameAndImageContainer}>

        <View style={styles.nameContainer}>
          <Text>Hi Satish</Text>
          <Text>Lets Upgrade Your Skill.</Text>
        </View>

        <View style={styles.profileImageContainer}>
          <Image source={{ uri: 'https://picsum.photos/150' }} style={styles.profileImage}></Image>
        </View>

      </View>

      <View style={styles.scrollviewContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ height: 200, width: 300, marginLeft: 25 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300, marginLeft: 25 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300, marginLeft: 25 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300, marginLeft: 25 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
          <View style={{ height: 200, width: 300 }}>
            <Image source={{ uri: 'https://picsum.photos/250/250' }} style={{ height: 200, width: 300 }}></Image>
          </View>
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
    backgroundColor: '#ECF0F1'
  },
  nameAndImageContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    width: '40%'
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  scrollviewContainer: {
    height: 200
  },
})