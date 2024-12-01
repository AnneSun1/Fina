import { Text, Image } from 'react-native'
import React, { useState } from 'react';
import { Tabs, Redirect } from 'expo-router';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import { useUser } from "../../context/UserContext";

const calender = () => {
  // const user = useUser();
  // const [selectedDate, setSelectedDate] = useState(null);
  // const clickedDate = (selectedDate) => {
  //   dotMarks[selectedDate] = {selected: true, marked: true}
  // }
  
  // const getDotMarks = (spendingsArr, budget) => {
  //   if (!Array.isArray(spendingsArr) || spendingsArr.length <= 0) {
  //     return {
  //       '2024-11-16': {selected: true, marked: true, selectedColor: 'blue'},
  //       '2024-11-17': {marked: true},
  //       '2024-11-18': {marked: true, dotColor: 'red', activeOpacity: 0}
  //     }
  //   }
  //   let dotMarks ={};
  //   for (spending in spendingsArr) {
  //     const dateKey = spending.date;
  //     if (spending.spending > budget/30) {
  //       dotMarks[dateKey] = {marked: true, selectedColor: 'black'} //maybe add the index as well
  //     } else {
  //       dotMarks[dateKey] = {marked: true, selectedColor: 'red'};
  //     }
  //   }
  //   return dotMarks;
  // }
  // const dotMarks = getDotMarks(user.spendings, 400);
 

  return (
    <>
        <Calendar 
          // onDayPress={day => {
          //   setSelectedDate(day.dateString)
          //   clickedDate(selectedDate);
          // }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => {
              if (direction == 'left') {
                return <Image source={require('../../assets/icons/left.png')}></Image>
              } else {
                  return <Image source ={require('../../assets/icons/right.png')}></Image>
              }
            }
          }
          markedDates={{
                  '2024-11-16': {selected: true, marked: true, selectedColor: 'blue'},
                  '2024-11-17': {marked: true},
                  '2024-11-18': {marked: true, dotColor: 'red', activeOpacity: 0}
                }}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          renderHeader={date => {
          }}
          enableSwipeMonths={true}
        />
    </>
  )
}

export default calender