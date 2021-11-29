import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

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
            fontSize: size, color: colors.text.secondary, fontFamily: 'Nunito-Regular', textDecorationLine: 'underline', textAlign: textAlign
        }
    )
})
