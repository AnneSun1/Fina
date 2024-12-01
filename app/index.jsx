import { ScrollView, Button, Text, StyleSheet, View } from "react-native";
import { Link, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from '../context/UserContext'
import "../global.css"
import React, { useState } from 'react';
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { useGlobalContext } from "../context/GlobalProvider";

export default function Home() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/calender" />;

    return (
        <SafeAreaView className="flex-1 items-center">
          <Loader isLoading={loading} />
            <ScrollView
            contentContainerStyle={{
            height: "80%",
            }}
        >

        <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />   
        </ScrollView>
        <Text className="">Welcome back!</Text>
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


