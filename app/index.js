import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Link href="/calender" style = {{color: 'blue'}}>Gjhgjhgjhgo to calender</Link>
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
