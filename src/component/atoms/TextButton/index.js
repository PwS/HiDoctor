import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

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
            fontSize: size, color: colors.text.secondary, fontFamily: fonts.primary[400], textDecorationLine: 'underline', textAlign: textAlign
        }
    )
})
