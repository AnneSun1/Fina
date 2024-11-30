import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

const Stack = createStackNavigator();
const Login = ({ navigation }) => (
    <View>
      <Text>Login</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('./login')} />
    </View>
);

const Logout = ({ navigation }) => (
    <View>
      <Text>Login</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('./logout')} />
    </View>
);
const AuthLayout = () => {
  return (
<View>
    </View>
  )
}

export default AuthLayout