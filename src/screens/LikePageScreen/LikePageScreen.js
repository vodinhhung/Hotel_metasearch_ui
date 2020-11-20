import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
import { connect } from "react-redux";
import HotelGrid from "@components/Hotel/HotelGrid";
import { logoutRequest, getHotelLike } from "@redux/actions/userAction";
const LikePageScreen = ({ userInfo, getHotelLike, hotelLikeList }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      getHotelLike();
    });
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.headerWrapper}>
        <StatusBar style="dark" />
        <View style={styles.headerTitle}>
          <Text style={[styles.bigTitle2, { alignSelf: "center" }]}>
            Hotel Like
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          {hotelLikeList?.items?.map((item, index) => {
            return (
              <View key={item.id} style={styles.cardWrapper}>
                <HotelGrid hotel={item} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    flexDirection: "row",
  },
  headerTitle: {
    flex: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  cardWrapper: { flexDirection: "row", padding: 0, marginBottom: 15 },
  container: {
    flex: 1,
    flexDirection: "column",
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
  bigTitle2: {
    fontSize: 20,
    fontWeight: "500",
  },
});

function mapStateToProps(state) {
  return {
    userInfo: state.user.userProfile,
    hotelLikeList: state?.hotelLike?.hotelLike,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getHotelLike: () => dispatch(getHotelLike()),
    logoutRequest: () => dispatch(logoutRequest()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LikePageScreen);
