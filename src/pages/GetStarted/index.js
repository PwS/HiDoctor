import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { IconLogo, IlGetStarted } from '../../assets';
import { Button, Gap } from '../../component';


const GetStarted = ({ navigation }) => {
    return (
        <ImageBackground source={IlGetStarted} style={styles.page}>
            <View>
                <IconLogo />
                <Text style={styles.title}>Konsultasi dengan
                    dokter jadi lebih
                    mudah & fleksibel</Text>
            </View>
            <View>
                <Button title='Get Started' onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button type='secondary' title='Sign In' onPress={() => navigation.replace('Login')} />
            </View>

        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between', backgroundColor: 'white', flex: 1
    },
    title: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 28,
        color: 'white',
        marginTop: 91
    }
})
