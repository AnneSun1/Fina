import { Image, View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        gap: 2,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
      <Text
        style={{
          fontSize: 12,
          color: color,
          fontWeight: focused ? "600" : "400",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3E5295",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#B9BDC7",
            borderTopWidth: 1,
            borderTopColor: "#B9BDC7",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="calender"
          options={{
            title: "Calender",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/home.png")} // hard coded in for now
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            title: "add",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/add.png")}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/profile.png")}
                color={color}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Insights"
          options={{
            title: "Insights",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/profile.png")}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
