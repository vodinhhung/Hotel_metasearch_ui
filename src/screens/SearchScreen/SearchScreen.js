import React, { useState } from "react";
import Constants from 'expo-constants';
import { StyleSheet, View, TextInput } from "react-native";
import SearchHeader from "@components/Search/SearchHeader/SearchHeader";
import SearchBody from "@components/Search/SearchBody/SearchBody";
import { StatusBar } from "expo-status-bar";
const SearchPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.searchHeader}>
        <SearchHeader />
      </View>
      <View style={styles.searchBody}>
        <SearchBody />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
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
