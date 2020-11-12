import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import DefaultAvatar from "@components/Common/DefaultAvatar";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { logoutRequest } from "@redux/actions/userAction";
// import {  } from "react-native-gesture-handler";
const LikePageScreen = ({ userInfo, logoutRequest }) => {
  const navigation = useNavigation();
  const renderUserAction = () => {
    if (userInfo) {
      return (
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => {
            logoutRequest();
            navigation.navigate("Login");
          }}
        >
          <Text>Logout</Text>
        </TouchableHighlight>
      );
    }
    return (
      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Login</Text>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}></View>
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  headerRight: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
  },
  bodyContainer: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "column",
  },
  segment: {
    flex: 1,
    flexDirection: "column",
  },
  segmentTitle: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
  },
  segmentBody: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: "column",
  },
  segmentContainer: {
    marginVertical: 5,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingRight: 10,
  },
});

function mapStateToProps(state) {
  return { userInfo: state.user.userProfile };
}
function mapDispatchToProps(dispatch) {
  return {
    logoutRequest: () => dispatch(logoutRequest())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LikePageScreen);
