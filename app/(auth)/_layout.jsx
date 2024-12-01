import { View, Text, Button, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Stack } from 'expo-router';
const AuthLayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen name="sign-in" options={{headerShowb: false}}/>
        <Stack.Screen name='sign-up' options={{headerShowb: false}}/>
    </Stack>

    <StatusBar backgroundColor="white"/>
    </>
  )
}

export default AuthLayout