import React, { useState } from 'react';
import { Text } from 'react-native';
import { Slot } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './app/(tabs)/FirstScreen.js';
import Navigator from './app/(tabs)/Navigator.js'; // Assuming this is used for Auth or other screens
import Auth0 from 'react-native-auth0';

// Auth0 Configuration
const auth0 = new Auth0({
  domain: 'dev-5ctb4dnlwn8u51fd.us.auth0.com', // Replace with your Auth0 domain
  clientId: 'h9AHq8ASTXZvJiORdnTj9qdAePgkD4j3', // Replace with your Auth0 client ID
});

// Create Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        {/* Add FirstScreen as the initial screen */}
        <Stack.Screen 
          name="FirstScreen" 
          component={FirstScreen} 
          options={{ headerShown: false }} // Hide the header
        />
        {/* You can add more screens below if necessary */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function RootApp() {
  return (
    <>
      {/* Common Header */}
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Header</Text>

      {/* Main App */}
      <App />

      {/* Common Footer */}
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Footer</Text>
    </>
  );
}
