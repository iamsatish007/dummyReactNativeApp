import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function LoginDemo() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://picsum.photos/80/80' }} style={{ height: 80, width: 80, borderRadius: 80 }}></Image>
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={styles.textStyle}> Any Name Here </Text>
            </View>
            <View>
                <Text> YX76543w </Text>
            </View>

            <TouchableOpacity>
                <View style={styles.button}>

                    <View>
                        <MaterialIcons name="fingerprint" color="white" size={20} />
                    </View>

                    <View>
                        <Text style={{ color: 'white' }}>Login With Biometric </Text>
                    </View>

                </View>
            </TouchableOpacity>

            <View style={{ marginVertical: 10 }}>
                <Text>OR </Text>
            </View>

            <View style={styles.pinContainer}>

                <View>
                    <TextInput style={{ width: 100, height: 30 }} placeholder={'PIN'} />
                </View>
                <View>
                    <MaterialIcons name="arrow-forward" color="blue" size={20} />
                </View>

            </View>

            <View style={{ width: 220, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <Text style={{ color: 'blue' }}>Forgot? </Text>
                <Text style={{ color: 'blue' }}>Logout </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    imageContainer: {
        height: 80,
        width: 80,
        borderRadius: 80,
        marginVertical: 10
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        width: 220,
        height: 50,
        backgroundColor: 'blue',
        marginVertical: 20,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    pinContainer: {
        width: 220,
        height: 45,
        backgroundColor: '#EFEFEF',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
})