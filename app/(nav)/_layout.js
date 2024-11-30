import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';

const NavLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen name="calender"/>
            <Tabs.Screen name="add" />
            <Tabs.Screen name="profile" />
        </Tabs>
    </>
  )
}

export default NavLayout