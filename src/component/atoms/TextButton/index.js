import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TextButton({ text, size, textAlign }) {
    return (
        <View>
            <Text style={styles.text(size, textAlign)}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: (size, textAlign) => (
        {
            fontSize: size, color: '#7D8797', fontFamily: 'Nunito-Regular', textDecorationLine: 'underline', textAlign: textAlign
        }
    )
})
