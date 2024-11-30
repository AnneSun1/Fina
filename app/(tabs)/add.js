import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons"; // MaterialIcons is the font family for Material Icons
import { ScrollView } from "react-native";

const add = () => {
  return (
    <View className="flex-1 mt-40 items-center">
      <Text className="text-4xl text-customBlue top-2 text-center w-[250px] pb-28">
        Select Category to Add Expense
      </Text>

      <ScrollView horizontal={true}>
        <View className="items-center">
          <Icon
            name="fastfood"
            size={150}
            color="navy"
            className="icon-customBlue p-7"
          />
          <Text className="text-3xl text-customBlue">Food/Grocery</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default add;
