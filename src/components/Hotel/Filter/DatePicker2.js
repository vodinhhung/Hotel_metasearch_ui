import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { Button } from "react-native-paper";
import moment from "moment";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: this.props.dateFrom,
      selectedEndDate: this.props.dateTo,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    const { selectedEndDate, selectedStartDate } = this.state;
    if (type === "END_DATE") {
      if (selectedStartDate?.toString() === date?.toString()) {
        let today = moment(date);
        let tomorrow = moment(today).add(1, "days");
        this.setState({
          selectedEndDate: tomorrow,
        });
      } else {
        this.setState({
          selectedEndDate: date,
        });
      }
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(new Date()); // Today
    const maxDate = new Date(2030, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const endDate = selectedEndDate ? selectedEndDate.toString() : "";

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#66D313"
          selectedDayColor="#208838"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
        />

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <View>
            <Button
            style={{backgroundColor: "#208838"}}
              disabled={!(selectedStartDate && selectedEndDate)}
              mode="contained"
              onPress={() => {
                this.props.setDate(selectedStartDate, selectedEndDate);
              }}
            >
              OK
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
});
