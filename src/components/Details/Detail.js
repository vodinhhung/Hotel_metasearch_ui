import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
const images = [
  {
    name: "Olivia",
    updateAt: "4h",
    avatar: require("../../../images/avatars/avatar1.jpg"),
    image: require("../../../images/girls/girl1.jpg"),
  },
];

const Detail = ({ navigation, route }) => {
  const [widthListImage, setWidthListImage] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={styles.imagesWrapper}
        onLayout={(event) => {
          let { width } = event.nativeEvent.layout;
          setWidthListImage(width);
        }}
      >
        <ImageBackground
          source={route.params.image}
          style={{
            width: widthListImage,
            height: Dimensions.get("screen").height / 2,
          }}
        >
          <View style={styles.container}>
            <View style={styles.headerBar}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ffffff00"
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <MaterialIcons name="arrow-back" size={24} color="#666" />
              </TouchableHighlight>
              <AntDesign name="bars" size={24} color="#666" />
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 20,
          }}
        >
          <View style={styles.titleLeft}>
            <View>
              <Text style={{ fontSize: 40, fontWeight: "700" }}>
                Eiffel tower
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto
                  style={[{ paddingRight: 10 }, styles.secondaryColor]}
                  name="map-marker-alt"
                  size={24}
                  color="#666"
                />
                <Text style={styles.secondaryColor}>Paris, Franch</Text>
              </View>
            </View>
          </View>
          <View style={styles.titleRight}>
            <TouchableHighlight
              style={{
                paddingVertical: 15,
                paddingHorizontal: 15,
                marginHorizontal: 5,
                backgroundColor: "#3B73FF",
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20,
                borderTopEndRadius: 25,
                borderTopStartRadius: 10,
              }}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => alert("Pressed!")}
            >
              <Fontisto name="cloud-down" size={24} color="white" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ height: 100, paddingVertical: 20 }}>
          <Text>
            Lorem ipsum dolor sit amet, corsectetur adjpisicing elit. Porin
            subpit
          </Text>
        </View>
        <View style={styles.hashTagWrapper}>
          <Text style={styles.hashTag}>#photograhpy</Text>
          <Text style={styles.hashTag}>#sea</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <AntDesign
              style={[{ paddingRight: 10 }, styles.IconColor]}
              name="heart"
              size={30}
              color="#666"
            />
            <MaterialCommunityIcons
              style={[{ paddingRight: 10 }, styles.IconColor]}
              name="comment"
              size={30}
              color="black"
            />
          </View>
          <View style={styles.footerRight}>
            <MaterialCommunityIcons
              style={[{ paddingRight: 10 }, styles.IconColor]}
              name="bookmark"
              size={30}
              color="black"
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          height: 50,
          paddingVertical: 9,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <AntDesign name="swap" size={24} color="black" />
        <Ionicons name="ios-add-circle-outline" size={24} color="blue" />
        <Feather name="users" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
  },
  bodyTop: {
    marginBottom: 5,
    flexDirection: "row",
  },
  bodyTopLeft: {
    flex: 2,
  },
  bodyTopRight: {
    flexDirection: "column",
    flex: 3,
  },
  headerAction: {
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "600",
  },
  titleText: {
    color: "#666",
  },

  headerBar: {
    height: 40,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  imagesWrapper: {
    borderBottomEndRadius: 100,
    borderBottomStartRadius: 100,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    height: 100,
  },
  footerLeft: {
    flexDirection: "row",
  },
  IconColor: {
    color: "#9EA6D1",
  },
  whiteColor: {
    color: "white",
  },
  secondaryColor: {
    color: "#6c757d",
  },

  // hash tag
  hashTagWrapper: {
    flexDirection: "row",
  },
  hashTag: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#E6E8F3",
    color: "#B4B8DF",
    padding: 5,
    margin: 5,
  },
});

export default Detail;
