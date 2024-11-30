import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import '../global.css';


// _layout.js is the top-level component in Expo Router that wraps all screens
// const Layout = () => {
//   const { user, isAuthenticated, login, logout } = useAuth0(); // Get auth state

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Conditional rendering for auth state */}
//       {isAuthenticated ? (
//         <View style={{ padding: 20 }}>
//           <Text>Welcome, {user?.name}</Text>
//           <Button title="Log out" onPress={logout} />
//         </View>
//       ) : (
//         <Button title="Log in with Auth0" onPress={login} />
//       )}

//     </View>
//   );
// };

// export default Layout;


const _layout = () => {
  return (
    <SafeAreaView className="flex-1">
      <Slot/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default _layout;
