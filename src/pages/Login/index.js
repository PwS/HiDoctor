import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconLogo } from '../../assets';
import { Button, Gap, TextButton, TitleTextFormField } from '../../component/atoms';

export default function Login() {
    return (
        <View style={styles.page}>
            <IconLogo />
            <Text style={styles.title}>Masuk dan mulai Berkonsultasi</Text>
            <TitleTextFormField label='Email Address' />
            <Gap height={24} />
            <TitleTextFormField label='Password' />
            <Gap height={10} />
            <TextButton text='Forgot My Password' size={12} />
            <Gap height={40} />
            <Button title='Sign In' />
            <Gap height={30} />
            <TextButton text='Create New Account' size={16} textAlign='center' />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'white', flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})
