import { ScrollView, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"; // MaterialIcons is the font family for Material Icons
import { useIsFocused } from "@react-navigation/native";

const add = () => {
  const scrollViewRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      console.log("Screen reset on focus");
    }
  }, [isFocused]);

  return (
    <View className="flex-1 mt-40 items-center">
      <Text className="text-4xl text-customBlue top-2 text-center w-[250px] pb-28">
        Select Category to Add Expense
      </Text>

      <ScrollView horizontal={true} ref={scrollViewRef}>
        <View className="items-center px-28">
          <Icon
            name="fastfood"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Food</Text>
        </View>
        <View className="items-center px-20">
          <Icon
            name="local-taxi"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Transport</Text>
        </View>
        <View className="items-center px-20">
          <Icon
            name="movie"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Entertainment</Text>
        </View>
        <View className="items-center px-20">
          <Icon
            name="shopping-bag"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Shopping</Text>
        </View>
        <View className="items-center px-20">
          <Icon
            name="health-and-safety"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Health</Text>
        </View>
        <View className="items-center px-20">
          <Icon
            name="school"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Education</Text>
        </View>
        <View className="items-center px-28">
          <Icon
            name="credit-card"
            size={200}
            color="navy"
            className="icon-customBlue"
          />
          <Text className="text-3xl text-customBlue">Bill Payment</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default add;
