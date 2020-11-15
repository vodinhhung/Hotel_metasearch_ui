import React, { useState, useEffect } from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import { Input, Text, ListItem } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TripIconSmall from "@components/Common/TripIconSmall";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getSearchSuggestion } from "../../../redux/actions/hotelAction";
const SearchHeader = ({
  getDestinations,
  destinations = { province_items: [], hotel_items:[]},
}) => {
  useEffect(() => {
    getDestinations({ destination: "" });
  }, []);
  const navigation = useNavigation();
  const [textInput, setTextInput] = useState("");
  const [timeout, setTime] = useState(0);
  return (
    <ScrollView style={styles.headerWrapper}>
      <View style={styles.container}>
        <View style={styles.backIcon}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              style={styles.backIcon}
              color="#666"
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.input, { height: 40 }]}>
          <Input
            onChangeText={(text) => {
              setTextInput(text);
              setTimeout(() => {
                getDestinations({ destination: text });
              }, 1000);
            }}
            value={textInput}
            autoFocus={true}
          />
        </View>
        <View style={styles.logoIcon}>
          <Feather
            name="search"
            size={24}
            color="#666"
            onPress={() =>
              navigation.navigate("SearchPage", { destination: textInput })
            }
          />
        </View>
      </View>
      
      <View style={{ marginTop: 10 }}>
        {destinations?.province_items.map((item, index) => {
          return (
            <ListItem
              key={index}
              bottomDivider
              style={{ marginBottom: 10, height: 40 }}
              onPress={() => {
                setTextInput(item.name);
              }}
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </View>
      <View >
        {destinations?.hotel_items.map((item, index) => {
          return (
            <ListItem
              key={index}
              bottomDivider
              style={{ marginBottom: 10, height: 40 }}
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    // justifyContent: "flex-start",
    flex: 0.15,
    flexDirection: "column",
    marginTop: "10%",
  },
  container: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    height: "5%",
  },
  backIcon: {
    justifyContent: "center",
    // flexDirection: "row",
    alignItems: "center",
    flex: 3,
    height: 40,
  },
  input: {
    flex: 15,
    alignItems: "center",
  },
  logoIcon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
    right: 2,
  },
  titleFilter: {
    paddingLeft: 10,
    textDecorationColor: "#666",
    textDecorationLine: "underline",
  },
});
function mapStateToProps(state) {
  console.log(state.searchDestination.destinations);
  return {
    destinations: state.searchDestination.destinations,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getDestinations: (params) => dispatch(getSearchSuggestion(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
