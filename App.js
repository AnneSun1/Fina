import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

// App.js
import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-5ctb4dnlwn8u51fd.us.auth0.com', // replace with your Auth0 domain
  clientId: 'h9AHq8ASTXZvJiORdnTj9qdAePgkD4j3', // replace with your Auth0 client ID
});

export default function App() {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
      });
      const userInfo = await auth0.auth.userInfo({ token: credentials.accessToken });
      setUser(userInfo);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <View>
      {!user ? (
        <Button title="Log In" onPress={login} />
      ) : (
        <View>
          <Text>Welcome, {user.name}</Text>
          <Button title="Log Out" onPress={logout} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
