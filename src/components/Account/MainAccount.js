import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const MainAccount = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello main account</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default MainAccount;
