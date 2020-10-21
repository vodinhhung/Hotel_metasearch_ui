import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  Platform,
  FlatList,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import HotelService from "../Hotel/HotelService";

import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import HotelPlatform from "./HotelPlatform";
import HotelGrid from "./HotelGrid";
const HotelDetail = ({ route }) => {
  const navigation = useNavigation();
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
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.wrapper}>
          <View style={styles.headerBar}>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#ffffff00"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" size={24} color="#666" />
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.container}>
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
          ></ImageBackground>
        </View>
        <View style={styles.wrapper}>
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
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }}>
            <View style={styles.servicesWrapper}>
              <View style={styles.serviceWrapper}>
                <HotelService type="wifi" />
              </View>
              <View style={styles.serviceWrapper}>
                <HotelService type="wifi" />
              </View>
              <View style={styles.serviceWrapper}>
                <HotelService type="wifi" />
              </View>
              <View style={styles.serviceWrapper}>
                <HotelService type="wifi" />
              </View>
            </View>
            <View style={styles.descriptionStyle}>
              <Text>
                Lorem ipsum dolor sit amet, corsectetur adjpisicing elit. Porin
                subpit
              </Text>
            </View>
            <View style={styles.rowWrapper}>
              <View style={{ flex: 1 }}>
                <HotelPlatform type="agoda" />
                <HotelPlatform type="luxstay" />
                <HotelPlatform type="booking" />
                <HotelPlatform type="traveloka" />
              </View>
              <View style={{ flex: 1 }}>{/* google map in here */}</View>
            </View>
          </View>
          <View style={styles.hashTagWrapper}>
            <Text style={styles.hashTag}>#photograhpy</Text>
            <Text style={styles.hashTag}>#sea</Text>
          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Khách sạn được gợi ý cho bạn
            </Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={[{},{},{},{}]}
              renderItem={({ item }) => {
                return (
                  <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                    <TouchableOpacity>
                      <View style={styles.cardWrapper}>
                        <HotelGrid />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowWrapper: {
    flex: 1,
    flexDirection: "row",
  },
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
  headerWrapper: {
    top: 0,
    position: "absolute",
    zIndex: 2,
  },
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  imagesWrapper: {
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "column",
    marginVertical: 20,
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
  servicesWrapper: {
    marginBottom: 4,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceWrapper: {
    padding: 4,
  },
  descriptionStyle: {
    marginVertical: 20,
  },
});

export default HotelDetail;
