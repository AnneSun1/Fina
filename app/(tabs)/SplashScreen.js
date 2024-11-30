// SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Automatically navigate to the main screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("Home"); // Replace with the main screen route
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fina</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cfc8d5", // Lavender background
  },
  text: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "Cursive", // Ensure you have a cursive font or a custom font installed
  },
});

export default SplashScreen;
