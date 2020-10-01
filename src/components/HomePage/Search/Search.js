import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  Image,
} from "react-native";

const images = {
  tripILogo: require("../../../../assets/icons/tripi-logo.png"),
};
const Search = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={images.tripILogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Search;
