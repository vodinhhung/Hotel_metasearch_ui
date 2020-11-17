import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import dateFormat from 'dateformat';
const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState("date");
  const [show2, setShow2] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(!show);
    setShow2(false);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow2(Platform.OS === "ios");
    setDate2(currentDate);
  };

  const showMode2 = (currentMode) => {
    setShow2(!show2);
    setShow(false);
    setMode2(currentMode);
  };

  const showDatepicker2 = () => {
    showMode2("date");
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 10 }}>
          <Paragraph>Check-in date</Paragraph>
          <Card
            onPress={() => {
              showDatepicker();
            }}
          >
            <Card.Content style={{flexDirection: "row", alignItems: "center"}}>
              <AntDesign name="calendar" size={20} color="#19A2B8" />
              <Paragraph>{" " + dateFormat(date, "fullDate")}</Paragraph>
            </Card.Content>
          </Card>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 10 }}>
          <Paragraph>Check-out date</Paragraph>
          <Card
            onPress={() => {
              showDatepicker2();
            }}
          >
            <Card.Content style={{flexDirection: "row", alignItems: "center"}}>
              <AntDesign name="calendar" size={20} color="#19A2B8" />
              <Paragraph>{" "+ dateFormat(date2, "fullDate")}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode={mode2}
          is24Hour={true}
          display="default"
          onChange={onChange2}
        />
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DatePicker;
