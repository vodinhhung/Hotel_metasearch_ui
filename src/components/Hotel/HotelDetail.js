import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  Platform,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import HotelService from "../Hotel/HotelService";
import HTMLView from "react-native-htmlview";

import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import HotelPlatform from "./HotelPlatform";
import HotelGrid from "./HotelGrid";
import { getHotelDetailAction } from "@redux/actions/hotelAction";
import { convertCurrency } from "@lib/utils/hotel";
const HotelDetail = ({
  route,
  getHotelDetail,
  hotelDetail = { assets: [{ url: "" }] },
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    getHotelDetail(route.params.hotel);
  }, []);

  const [widthListImage, setWidthListImage] = useState(0);
  if (!hotelDetail) return <ActivityIndicator size="large" color="#0000ff" />;
  else
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
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
              source={{ uri: hotelDetail?.assets[0] }}
              style={{
                width: widthListImage,
                height: Dimensions.get("screen").height / 3,
              }}
            ></ImageBackground>
          </View>
          <View style={styles.wrapper}>
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "700", paddingVertical: 20 }}
              >
                {hotelDetail.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.titleLeft}>
                <View>
                  <View style={styles.priceContent}>
                    <Ionicons
                      style={styles.iconStyle}
                      name="md-pricetags"
                      size={24}
                      color="#222"
                    />
                    <Text
                      style={{ fontSize: 15, fontWeight: "600", color: "#111" }}
                    >{`${convertCurrency(
                      Math.min(
                        ...hotelDetail.prices.map((price) => price.value)
                      )
                    )} / 1 Đêm`}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Fontisto
                      style={[{ paddingRight: 10 }, styles.secondaryColor]}
                      name="map-marker-alt"
                      size={24}
                      color="#666"
                    />
                    <Text style={styles.secondaryColor}>
                      {hotelDetail.address}
                    </Text>
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
                {hotelDetail.services?.map((item, index) => {
                  return (
                    <View key={index} style={styles.serviceWrapper}>
                      <HotelService type={item.name} />
                    </View>
                  );
                })}
              </View>
              <View style={styles.descriptionStyle}>
                <HTMLView value={hotelDetail.description} stylesheet={styles} />
              </View>
              <View style={styles.rowWrapper}>
                <View style={{ flex: 1 }}>
                  {hotelDetail.linking?.map((item, index) => {
                    return (
                      <HotelPlatform
                        key={index}
                        type={item.type}
                        url={item.url}
                      />
                    );
                  })}
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* google map in here */}
                  <MapView provider="google" style={styles.mapStyle} />
                </View>
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
              {/* <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                data={hotelDetail.hotelRecommended.items}
                renderItem={({ item }) => {
                  return (
                    <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                      <TouchableOpacity>
                        <View style={styles.cardWrapper}>
                          <HotelGrid hotel={item} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              /> */}
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
    alignSelf: "flex-end",
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
  mapStyle: {
    width: "70%",
    minHeight: 150,
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  priceContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingRight: 5,
  },
});

function mapStateToProps(state) {
  return {
    hotelDetail: state.hotelDetail.hotelDetail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getHotelDetail: (hotelID) => dispatch(getHotelDetailAction(hotelID)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetail);
