import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, View, TextInput } from "react-native";
import SearchHeader from "@components/Search/SearchHeader/SearchHeader";
import SearchBody from "@components/Search/SearchBody/SearchBody";
import { StatusBar } from "expo-status-bar";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Input, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TripIconSmall from "@components/Common/TripIconSmall";
import { useNavigation } from "@react-navigation/native";
const SearchPage = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerAll}>
      <StatusBar style="dark" />
      <View style={styles.searchHeader}>
        <View style={styles.headerWrapper}>
          <View style={styles.backIcon}>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
              navigation.goBack();
            }}
            >
              <MaterialIcons name="arrow-back" size={30} color="white" />
            </TouchableHighlight>
          </View>
          <View style={[styles.titleDes]}>
            <Text
              style={{ fontSize: 24, color: "white", fontWeight: "normal" }}
            >
              {route.params.destination}
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Feather name="filter" size={24} color="#fff" 
           onPress={() => navigation.navigate("SearchFilterScreen",{destination: `${route.params.destination}`})}/>
          </View>
        </View>
      </View>
      <View style={styles.searchBody}>
        <SearchBody />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    top: "4%",
    left: 0,
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#00B388",
  },
  backIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleDes: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerAll: {
    marginHorizontal: 4,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
  searchHeader: {
    height: 80,
  },
  searchBody: {
    flex: 1,
    flexDirection: "row",
  },
});

export default SearchPage;
