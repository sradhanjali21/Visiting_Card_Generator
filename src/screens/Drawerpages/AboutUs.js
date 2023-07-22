import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AboutUs() {
    return (
        <View style={{ marginTop: 100 }}>
            <Text style={styles.text}>AboutUs</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {

        color: 'black',
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    }
})