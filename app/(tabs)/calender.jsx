import { Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { useUser } from "../../context/UserContext";
import { Link, router, Redirect } from "expo-router";

const calender = () => {
  const user = useUser().user;

  const [selectedDate, setSelectedDate] = useState("");
  const onDayPress = (day) => {
    const date = day.dateString;
    if (selectedDate == date) {
      setSelectedDate("");
    } 
    console.log("Selected date: ", day.dateString); 
    setSelectedDate(day.dateString); 
  }

  const getSpendingData = (spendingsArr) => {
    let spendingsObj = {};

    for (let i = 0; i < spendingsArr.length; i++) {
      const spending = spendingsArr[i]
      if (selectedDate === spending.date) {
        spendingsObj[spending.date] = {selected: true, marked: true, selectedColor: 'blue', dotColor: 'white'}
      }
      spendingsObj[spending.date] = {marked: true, selectedColor: 'black'}
      console.log(spendingsObj)
    }
    return spendingsObj;
  }
  const markings = getSpendingData(user.spendings);
  console.log(markings)

  useEffect(() => {
    getSpendingData(user.spendings);
  }, [selectedDate])

  const getMonthName = (monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 
      'June', 'July', 'August', 'September', 'October', 
      'November', 'December'
    ];
    return months[monthIndex];
  };
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    let result = [];
    const findTransactions = (date, spendingsArr) => {
      for (let spending of spendingsArr) {
        if (spending.date === date) {
          result.push(spending)
        }
      }
    }
    findTransactions(selectedDate, user.spendings)
    setTransactions(result);
  }, [selectedDate])

  return (
    <>
      <Calendar style={{
          marginTop: 80,
          borderWidth: 1,
          borderColor: 'gray',
          justifyContent: 'center',
          padding: 7
        }}
        // expenseDates={expenseDates}
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true, 
            selectedColor: "blue", 
            selectedTextColor: "white", 
          },
          ...markings
        }}
        renderArrow={(direction) => {
          if (direction == "left") {
            return (
              <Image source={require("../../assets/icons/left.png")}></Image>
            );
          } else {
            return (
              <Image source={require("../../assets/icons/right.png")}></Image>
            );
          }
        }}
        renderHeader={(date) => {
          const monthIndex = date.getMonth();
          const monthName = getMonthName(monthIndex);
          const year = date.getFullYear();
          return (
            <View style={{header: {
              padding: 10,
              alignItems: 'center',}}}>
              <Text style={{headerText: {
                fontSize: 40,
                fontWeight: 'bold',
                color: '#333',
              },}}>{`${monthName} ${year}`}</Text>
            </View>
          );
        }}
        hideExtraDays={true}
        firstDay={1}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
      />
      {selectedDate && (
        <View style = {{
          flex: 1,
          alignItems: 'center',
        }}>
          <Text style = {{margin: 10, padding: 4, fontSize: 20}}>Transactions:</Text>
          {console.log(transactions)}
          {transactions.map((transaction, index) => (
            <View key={index}>
              <Text>Category: {transaction.category}, Date: {transaction.date}, Spending: ${transaction.spending}</Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
};



export default calender;