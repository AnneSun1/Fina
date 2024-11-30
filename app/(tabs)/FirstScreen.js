import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust icon library as needed

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Icon name="calendar-outline" size={30} color="#3A5BA0" />
        <Text style={styles.text}>Calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="stats-chart-outline" size={30} color="#3A5BA0" />
        <Text style={styles.text}>Insights</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="add-circle-outline" size={30} color="#3A5BA0" />
        <Text style={styles.text}>Add Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="person-outline" size={30} color="#3A5BA0" />
        <Text style={styles.text}>Budget</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Icon name="settings-outline" size={30} color="#3A5BA0" />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#3A5BA0',
    marginLeft: 15,
    fontWeight: '500',
  },
});

export default HomeScreen;
