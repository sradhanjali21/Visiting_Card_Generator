import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Developers() {
    return (
        <View style={{marginTop:100}}>
            <Text style={styles.text}>Developers</Text>
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