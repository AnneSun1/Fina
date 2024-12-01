import {
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useIsFocused } from "@react-navigation/native";
import { useUser } from "../../context/UserContext";

const add = () => {
  const { user, updateSpending } = useUser();
  const updateUserSpending = useUser();
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
    const spending = {
      date: getFormattedDate(),
      category: selectedCategory,
      spending: inputValue,
    };
    updateSpending(user.id, spending);
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

  const getFormattedDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <View className="flex-1 mt-40 items-center">
      <Text className="text-4xl text-customBlue top-2 text-center w-[250px] pb-28 font-imprima">
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
            <Text className="text-3xl text-customBlue font-imprima">Food</Text>
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
            <Text className="text-3xl text-customBlue font-imprima">
              Transport
            </Text>
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
            <Text className="text-3xl text-customBlue font-imprima">
              Entertainment
            </Text>
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
            <Text className="text-3xl text-customBlue font-imprima">
              Shopping
            </Text>
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
            <Text className="text-3xl text-customBlue font-imprima">
              Health
            </Text>
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
          <Icon
            name="credit-card"
            size={200}
            color="navy"
            className="icon-customBlue"
            onPress={() => handlePress("Bill Payment")}
          />
          <Text className="text-3xl text-customBlue">Bill Payment</Text>
        </View>
      </ScrollView>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          paddingVertical: 7,
          width: "100%",
        }}
      >
        <TextInput
          style={{
            width: "70%",
            height: 40,
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            borderColor: "#3E5295",
          }}
          inputMode="decimal"
          placeholder="Add spendings"
          placeholderTextColor="#cbcacf"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity
          style={{
            width: "30%",
            height: 40,
            padding: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#3E5295",
            margin: 20,
            justifyContent: "center", // Centering the text
            alignItems: "center",
          }}
          title="Submit"
          onPress={handleSubmit}
        >
          <Text style={{ color: "#3E5295", fontWeight: 500 }}>Submit</Text>
        </TouchableOpacity>
      </View>
      {showText && <Text>{selectedCategory} Expense Submitted</Text>}
    </View>
  );
};

export default add;
