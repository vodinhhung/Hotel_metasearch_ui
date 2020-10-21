import React, { useState } from "react";

import { StyleSheet, View } from "react-native";
import { Input, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TripIconSmall from "../../Common/TripIconSmall";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const SearchHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <View style={styles.backIcon}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="arrow-back" size={24} color="#666" />
          </TouchableHighlight>
        </View>
        <View style={[styles.input, { height: 40 }]}>
          <Input
            onChangeText={(text) => {}}
            // value={value}
          />
        </View>
        <View style={styles.logoIcon}>
          <TripIconSmall />
        </View>
      </View>
      <View style={[styles.container, styles.filterContainer]}>
        <Feather name="filter" size={24} color="#666" />
        <Text style={styles.titleFilter}>Some more filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 4,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // height: 20
  },
  backIcon: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
  input: {
    flex: 15,
    alignItems: "center",
  },
  logoIcon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
  },
  titleFilter: {
    paddingLeft: 10,
    textDecorationColor: "#666",
    textDecorationLine: "underline",
  },
  filterContainer: {
    marginHorizontal: 20
  }
});

export default SearchHeader;
