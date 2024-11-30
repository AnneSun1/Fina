import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import { Slot } from 'expo-router';
// App.js
import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-5ctb4dnlwn8u51fd.us.auth0.com', // replace with your Auth0 domain
  clientId: 'h9AHq8ASTXZvJiORdnTj9qdAePgkD4j3', // replace with your Auth0 client ID
});

export default function App() {
  const [user, setUser] = useState(null);

  return ( 
    <>
    <Text>Header</Text>
      <Slot/>
    <Text>Footer</Text>
    </>
  );
}

