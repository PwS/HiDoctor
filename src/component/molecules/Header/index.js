import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton, Gap } from '../..'
import { colors } from '../../../utils'

const Header = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <CustomButton type='icon-only' icon='back-dark' onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    text: {
        flex: 1, textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-SemiBold', color: colors.text.primary
    }
})
