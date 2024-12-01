import { Image, View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const TabIcon = ({icon, name, color, focused}) => {
  return (
    <View className ="flex items-center justify-center pt-10 gap-2">
      <Image source = {icon}
        resizeMode="contain"
        className="w-6 h-6 border-solid border-black"
        tintColor = {color}
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
            tabBarInactiveTintColor: '#fff',
            tabBarStyle: {
              backgroundColor: '#B9BDC7',
              borderTopWidth: 1,
              borderTopColor: '#B9BDC7',
              height: 84
            }
          }}
        >
            <Tabs.Screen name="calender"
            options={{
                title: 'Calender',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/home.png')} // hard coded in for now
                  color = {color}
                  focused={ focused }
                  />
                )
            }}/>
            <Tabs.Screen name="add" 
              options={{
                title: 'add',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/add.png')}
                  color = {color}
                  focused={ focused }
                  />
                )
            }}/>
            {/* <Tabs.Screen name="profile" 
              options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon 
                  icon= {require('../../assets/icons/profile.png')}
                  color={color}
                  focused={ focused }
                  />
                )
            }}/> */}
        </Tabs>
    </>
  )
}

export default TabsLayout