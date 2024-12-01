import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import '../global.css';
import GlobalProvider from "../context/GlobalProvider";
import { useEffect } from "react";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";

const _layout = () => {
  // useEffect(() => {
  //   if (error) throw error;

  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, error]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // if (!fontsLoaded && !error) {
  //   return null;
  // }
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
  )
}

export default _layout;
