import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomButton, Gap, Header, TitleTextFormField } from '../../component'
import { colors } from '../../utils'

export default function Register({ navigation }) {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title='Daftar Akun' />

            <View style={styles.content}>
                <TitleTextFormField label='Full Name' />
                <Gap height={24} />
                <TitleTextFormField label='Pekerjaan' />
                <Gap height={24} />
                <TitleTextFormField label='Email' />
                <Gap height={24} />
                <TitleTextFormField label='Password' />
                <Gap height={40} />
                <CustomButton title='Continue' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
