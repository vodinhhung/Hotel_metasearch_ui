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
import { SafeAreaView } from "react-native-safe-area-context";

import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

const HotelDetail = ({ navigation, route }) => {
  const [item, setItem] = useState({
    image: {
      uri:
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    title: "Ha long",
    key: "1",
  });

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
            height: Dimensions.get("screen").height / 3,
          }}
        >
          <SafeAreaView>
            <View style={styles.container}>
              <View style={styles.headerBar}>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#ffffff00"
                  onPress={() => {
                    navigation.navigate("SearchPage");
                  }}
                >
                  <MaterialIcons name="arrow-back" size={24} color="#666" />
                </TouchableHighlight>
              </View>
            </View>
          </SafeAreaView>
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
              <Text style={{ fontSize: 20, fontWeight: "700" }}>
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
            <View style={styles.footerRight}>
              <AntDesign
                style={[{ paddingRight: 10 }, styles.IconColor]}
                name="heart"
                size={25}
                color="#666"
              />
              <MaterialCommunityIcons
                style={[{ paddingRight: 10 }, styles.IconColor]}
                name="bookmark"
                size={30}
                color="black"
              />
            </View>
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
        <View style={styles.footer}></View>
      </ScrollView>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 20,
  },
  imagesWrapper: {
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
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
  footerRight: {
    flexDirection: "row",
    alignItems: "center",
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

export default HotelDetail;
