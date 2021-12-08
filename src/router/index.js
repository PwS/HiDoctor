import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Splash, Register, Login, UploadPhoto } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
        </Stack.Navigator>
    )
}

export default Router;