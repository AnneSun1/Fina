import { Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import { Arrow } from '../../components';
const calender = () => {
  return (
    <>
        <Text>
            Calender
        </Text>
        <Calendar 
          onDayPress={day => {
            console.log('selected day', day);
          }}
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
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
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
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