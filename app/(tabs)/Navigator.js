// Navigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from './app/(tabs)/FirstScreen.js';
import Navigator from './app/(tabs)/Navigator.js';
import SplashScreen from "./src/components/SplashScreen";


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
