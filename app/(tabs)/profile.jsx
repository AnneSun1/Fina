import { Text, View } from 'react-native'
import { useAuth0 } from 'react-native-auth0';
import React from 'react'

const Profile = () => {
  const {user, error} = useAuth0();

  return (
      <>
          {user && <Text>Logged in as </Text>}
          {!user && <Text>Not logged in</Text>}
          {error && <Text>{error.message}</Text>}
      </>
  )
}

export default Profile;