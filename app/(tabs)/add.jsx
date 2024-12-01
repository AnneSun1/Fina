import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useIsFocused } from "@react-navigation/native";

const add = () => {
  const scrollViewRef = useRef(null);
  const isFocused = useIsFocused();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const [showText, setShowText] = useState(false);

  const handlePress = (category) => {
    setSelectedCategory(category);
    console.log("category: ", category);
    setShowInput(true);
  };

  const handleSubmit = () => {
    setShowText(true);
    console.log(inputValue);
    setTimeout(() => {
      setShowText(false);
      setShowInput(false);
      setInputValue("");
    }, 2500);
  };

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

      <ScrollView horizontal={true} ref={scrollViewRef} className="h-48">
        <View className="px-28">
          <TouchableOpacity className="items-center">
            <Icon
              name="fastfood"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Food")}
            />
            <Text className="text-3xl text-customBlue">Food</Text>
          </TouchableOpacity>
        </View>
        <View className="px-20">
          <TouchableOpacity className="items-center">
            <Icon
              name="local-taxi"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Transport")}
            />
            <Text className="text-3xl text-customBlue">Transport</Text>
          </TouchableOpacity>
        </View>
        <View className="px-20">
          <TouchableOpacity className="items-center">
            <Icon
              name="movie"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Entertainment")}
            />
            <Text className="text-3xl text-customBlue">Entertainment</Text>
          </TouchableOpacity>
        </View>
        <View className="px-20">
          <TouchableOpacity className="items-center">
            <Icon
              name="shopping-bag"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Shopping")}
            />
            <Text className="text-3xl text-customBlue">Shopping</Text>
          </TouchableOpacity>
        </View>
        <View className="px-20">
          <TouchableOpacity className="items-center">
            <Icon
              name="health-and-safety"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Health")}
            />
            <Text className="text-3xl text-customBlue">Health</Text>
          </TouchableOpacity>
        </View>
        <View className="px-20">
          <TouchableOpacity className="items-center">
            <Icon
              name="school"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Education")}
            />
            <Text className="text-3xl text-customBlue">Education</Text>
          </TouchableOpacity>
        </View>
        <View className="px-28">
          <TouchableOpacity className="items-center">
            <Icon
              name="credit-card"
              size={200}
              color="navy"
              className="icon-customBlue"
              onPress={() => handlePress("Bill Payment")}
            />
            <Text className="text-3xl text-customBlue">Bill Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {showInput && (
        <View>
          <View className="flex-row align-center bg-slate-300 ">
            <Text className="py-3 pl-3 font-bold text-xl">$</Text>
            <TextInput
              placeholder="Input Amount"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </View>
          <TouchableOpacity onPress={handleSubmit} className="items-center p-7">
            <Text className="bg-customPurple p-2">Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      {showText && <Text>{selectedCategory} Expense Submitted</Text>}
    </View>
  );
};

export default add;
