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
import DefaultAvatar from "../Commom/DefaultAvatar";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import {  } from "react-native-gesture-handler";
const MainAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarWrapper}>
            <DefaultAvatar />
          </View>
        </View>
        <View style={styles.headerRight}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight
                // style={styles.loginFacebookBtn}
                underlayColor="#DDDDDD"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text>Đăng nhập</Text>
              </TouchableHighlight>
              <Text>/</Text>
              <TouchableHighlight
                // style={styles.loginFacebookBtn}
                underlayColor="#DDDDDD"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text>Đăng ký</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.segment}>
            <View style={styles.segmentTitle}>
              <Text>Tài khoản của tôi</Text>
            </View>
            <View style={styles.segmentBody}>
              <View style={styles.segmentContainer}>
                <AntDesign
                  name="gift"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Khuyến mãi</Text>
              </View>
              <View style={styles.segmentContainer}>
                <EvilIcons
                  name="trophy"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Phiếu giảm giá và Ưu đãi</Text>
              </View>
            </View>
          </View>
          <View style={styles.segment}>
            <View style={styles.segmentTitle}>
              <Text>Cài đặt</Text>
            </View>
            <View style={styles.segmentBody}>
              <View style={styles.segmentContainer}>
                <MaterialIcons
                  name="language"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Ngôn ngữ</Text>
              </View>
              <View style={styles.segmentContainer}>
                <EvilIcons
                  name="bell"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Thông báo</Text>
              </View>
            </View>
          </View>
          <View style={styles.segment}>
            <View style={styles.segmentTitle}>
              <Text>Thông tin</Text>
            </View>
            <View style={styles.segmentBody}>
              <View style={styles.segmentContainer}>
                <MaterialCommunityIcons
                  name="account-question-outline"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Trung tâm trợ giúp</Text>
              </View>
              <View style={styles.segmentContainer}>
                <SimpleLineIcons
                  name="info"
                  style={styles.iconStyle}
                  size={24}
                  color="grey"
                />
                <Text>Về chúng tôi</Text>
              </View>
            </View>
          </View>
        </View>
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

export default MainAccount;
