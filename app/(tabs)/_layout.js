import { Image, View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
// import HomeIcon from '@mui/icons-material/Home';
import { icons } from '../../constants/icons.js';

const TabIcon = ({icon, name, color, focused}) => {
  return (
    <View className ="items-center justify-center gap-2">
      <Image source = {icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor = {color}
        style={{width: 40, height: 40}}
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#3E5295',
            tabBarStyle: {
              backgroundColor: '#B9BDC7',
              borderTopWidth: 20,
              borderTopColor: '#B9BDC7',
              height: 60
            }
          }}
        >
            <Tabs.Screen name="calender"
            options={{
                title: 'Calender',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/home.png')} // hard coded in for now
                  // name="Calender"
                  color = "black"
                  focused={ focused }
                  />
                )
            }}/>
            <Tabs.Screen name="add" 
              options={{
                title: 'add',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/add.png')}
                  // name="Add"
                  color = "black"
                  focused={ focused }
                  />
                )
            }}/>
            <Tabs.Screen name="profile" 
              options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/profile.png')}
                  // name="Profile"
                  color = "black"
                  focused={ focused }
                  />
                )
            }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout