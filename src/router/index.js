import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, Splash, Register, Login } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Router;