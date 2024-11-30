import { ScrollView, Button, Text, StyleSheet, View } from "react-native";
import { Link, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import "../global.css"
import React, { useState } from 'react';


export default function Home() {
    
  return (
    <SafeAreaView className="flex-1 items-center">
        <ScrollView
        contentContainerStyle={{
          height: "80%",
        }}
      ></ScrollView>
      <Link href="/calender" style = {{color: 'blue'}}>Start</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});


// const App = () => {
//   return (
//     <Auth0Provider domain={"dev-5ctb4dnlwn8u51fd.us.auth0.com"} clientId={"h9AHq8ASTXZvJiORdnTj9qdAePgkD4j3"}>
//       <Text>hi</Text>
//     </Auth0Provider>
//   );
// };


