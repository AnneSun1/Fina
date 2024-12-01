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
  shownImages = false;
  useEffect(() => {
    setShowImage1(true);
    setShowImage2(false);
    
    const timer1 = setTimeout(() => {
      setShowImage1(false); 
      setShowImage2(true);
    }, 1500); 

    const timer2 = setTimeout(() => {
      setShowImage1(false);
    }, 1500);
    
    const timer3 = setTimeout(() => {
      setShowImage2(false);
      shownImages = true;
      router.push("/calender");
    }, 3500)

    return () => clearTimeout(timer3); 
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center h-full">

      {showImage1 && (
        <Image
          source={require("../assets/icons/start.png")}
        />
      )}
      {showImage2 && (
        <Image
          source={require("../assets/icons/welcome.png")}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});


