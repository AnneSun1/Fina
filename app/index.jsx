import {
  ScrollView,
  Button,
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Link, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import "../global.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    setShowImage1(true);
    setShowImage2(false);
    
    const timer1 = setTimeout(() => {
      setShowImage1(false); // Hide the image after 3 seconds
      setShowImage2(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    const timer2 = setTimeout(() => {
      setShowImage1(false); // Hide the image after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
    
    const timer3 = setTimeout(() => {
      setShowImage2(false);
    }, 5000)

    return () => clearTimeout(timer3); // Clean up the timer
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center h-full">
      {/* <ScrollView
        contentContainerStyle={{
          height: "80%",
        }}
      ></ScrollView> */}

      {/* <Link href="/calender" style={{ color: "blue" }}>
        Start
      </Link> */}

      {showImage1 && (
        <Image
          source={require("../assets/icons/start.png")}
          // className="w-[100] h-[100]"
        />
      )}
      {showImage2 && (
        <Image
          source={require("../assets/icons/welcome.png")}
          // className="w-[100] h-[100]"
        />
      )}
      <Link href="/(tabs)/calendar" className="justify-center">Calender</Link>
      <Link href="/(auth)/sign-in" className="justify-center">Calender</Link>
{/*       
      <Button onPress={}><Text>Start</Text></Button> */}
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


