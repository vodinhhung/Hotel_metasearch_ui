import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import dateFormat from "dateformat";
import { connect } from "react-redux";
const DatePicker = ({ dateFrom, dateTo, setVisible }) => {
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
          <Text>Check-in date</Text>
          <Card
            onPress={() => {
              setVisible(true);
            }}
          >
            <Card.Content
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <AntDesign name="calendar" size={20} color="#19A2B8" />
              <Text>{" " + dateFormat(dateFrom, "fullDate")}</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 10 }}>
          <Text>Check-out date</Text>
          <Card
            onPress={() => {
              setVisible(true);
            }}
          >
            <Card.Content
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <AntDesign name="calendar" size={20} color="#19A2B8" />
              <Text>{" " + dateFormat(dateTo, "fullDate")}</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    dateTo: state.hotelSearchingByFilter.params.dateTo,
    dateFrom: state.hotelSearchingByFilter.params.dateFrom,
  };
}

export default connect(mapStateToProps, null)(DatePicker);
