import { View, Text } from 'react-native'
import React from 'react'

const login = () => {
    const LoginButton = () => {
        const {authorize} = useAuth0();
    
        const onPress = async () => {
            try {
                await authorize();
            } catch (e) {
                console.log(e);
            }
        };
  return (
    <View>
      <Text>login</Text>
      <Button onPress={onPress} title="Log in" />
    </View>
  )
}
}
export default login;