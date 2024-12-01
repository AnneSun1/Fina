import React from 'react';
import '../global.css';
import { UserProvider } from "../context/UserContext";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";

const _layout = () => {

  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  )
}

export default _layout;
