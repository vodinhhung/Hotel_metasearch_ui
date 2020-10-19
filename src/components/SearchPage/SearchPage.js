import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./Search";
import { StyleSheet, View, TextInput } from "react-native";
import SearchHeader from "./SearchHeader/SearchHeader";
import SearchBody from "./SearchBody/SearchBody";
const SearchPage = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeader}>
        <SearchHeader />
      </View>
      <View style={styles.searchBody}>
        <SearchBody />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    flex: 1,
    flexDirection: "column",
  },
  searchHeader: {
    height: 100,
  },
  searchBody: {
    flex: 1,
    flexDirection: "row",
  },
});

export default SearchPage;
