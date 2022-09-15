import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TextStyles } from '../styles/textStyles'

export default function MovieCard() {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image source={{ uri: 'https://picsum.photos/220/220' }} style={{ height: 220, width: 220 }}></Image>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={[TextStyles.yellowText, TextStyles.fontSize20]}>* </Text>
                <Text style={[TextStyles.whiteText, TextStyles.fontSize20]}>6.9</Text>
            </View>
            <View>
                <Text style={[styles.movieNameText, TextStyles.whiteText]}>The Lord of the Rings: The Rings of Power</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 220,
        height: 400,
        backgroundColor: 'black',
        marginHorizontal:15
    },
    ratingContainer: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row'
    },
    nameContainer: {
        width: '100%',
        marginTop: 10
    },
    movieNameText: {
        fontSize: 22
    },
})