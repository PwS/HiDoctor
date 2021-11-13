import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconLogo } from '../../assets'

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000)
    }, [navigation])
    return (
        <View style={styles.page}>
            <IconLogo />
            <Text style={styles.title}>Hi Doctor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    title: {
        fontSize: 20, fontWeight: '600', color: '#112340', marginTop: 20
    }
})