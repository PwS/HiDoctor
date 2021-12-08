import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconButtonAdd } from '../../assets/icon'
import { IlPhotoUser } from '../../assets/illustration'
import { CustomButton, Header, TextButton, Gap } from '../../component'
import { colors, fonts } from '../../utils'


const UploadPhoto = () => {
    return (
        <View style={styles.page}>
            <Header title='Upload Photo' />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={IlPhotoUser} style={styles.avatar} />
                        <IconButtonAdd style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Nama User</Text>
                    <Text style={styles.profession}>Job Role</Text>
                </View>
                <View>
                    <CustomButton title='Upload and Continue' />
                    <Gap height={30} />
                    <TextButton text='Skip For This' size={16} textAlign='center' />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8, right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary.normal,
        textAlign: 'center'
    }
})
