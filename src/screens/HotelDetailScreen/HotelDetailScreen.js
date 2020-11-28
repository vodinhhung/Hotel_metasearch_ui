import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Platform,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import HotelService from "@components/Hotel/HotelService";
import HTMLView from "react-native-htmlview";
import { useTheme } from "react-native-paper";
import HotelPlatform from "@components/Hotel/HotelPlatform";
import HotelGrid from "@components/Hotel/HotelGrid";
import { getHotelDetailAction } from "@redux/actions/hotelAction";
import { setHotelLike } from "@redux/actions/userAction";
import { convertCurrency, statusHotelLike } from "@lib/utils/hotel";
import StatusBar from "@components/Common/StatusBar";

const HEADER_MAX_HEIGHT = Dimensions.get("window").height;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 80 : 93;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const HotelDetailScreen = ({
  route,
  getHotelDetail,
  hotelLists = { items: null },
  hotelDetail = { assets: [{ url: "" }], facilities: [] },
  setHotelLike,
  hotelLikeList,
}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  useEffect(() => {
    getHotelDetail(route.params.hotel);
  }, []);
  const hotelLikeAction = () => {
    setHotelLike(hotelDetail.id);
  };

  const renderScrollViewContent = () => {
    return (
      <View style={styles.scrollViewContent}>
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
          {/* Domain */}

          <View style={{ flexDirection: "column", marginBottom: 22 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.headerBorder}>
                <Text style={styles.headerStyle}>Prices</Text>
              </View>
            </View>
            {hotelDetail.linking?.map((item, index) => {
              return (
                <ListItem key={index} bottomDivider>
                  <HotelPlatform
                    key={index}
                    type={item.type}
                    url={item.url}
                    price={hotelDetail.prices}
                  />
                </ListItem>
              );
            })}
          </View>

          <View
            style={{
              fontFamily: "OpenSans-Regular",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              marginBottom: 5,
            }}
          >
            <View style={styles.headerBorder}>
              <Text style={styles.headerStyle}>Location</Text>
            </View>
            {/* google map in here */}
            {hotelDetail.position ? (
              <MapView
                region={{
                  latitude: hotelDetail?.position?.lat,
                  longitude: hotelDetail?.position?.long,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.021,
                }}
                provider="google"
                style={styles.mapStyle}
              >
                <Marker
                  style={styles.mapStyle}
                  coordinate={{
                    // ...hotel,
                    latitude: hotelDetail?.position?.lat,
                    longitude: hotelDetail?.position?.long,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.021,
                  }}
                />
              </MapView>
            ) : null}
          </View>

          <View style={styles.headerBorder}>
            <Text style={styles.headerStyle}>About</Text>
          </View>
          <View
            style={{
              margin: 8,
              fontFamily: "OpenSans-Regular",
              opacity: 0.6,
            }}
          >
            <HTMLView
              value={
                hotelDetail.description != null
                  ? hotelDetail.description
                      .split("\\n")
                      .join("\\t")
                      .split("\\t")
                      .join("")
                  : "No Description"
              }
              stylesheet={stylesDes}
            />
            {/* {console.log(hotelDetail.description)} */}
          </View>

          <View style={{ flexDirection: "column", marginTop: 22 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.headerBorder}>
                <Text style={styles.headerStyle}>Reviews</Text>
              </View>
            </View>

            {hotelDetail?.review?.slice(0, 5)?.map((item, i) => {
              return (
                <ListItem key={i} bottomDivider>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ paddingRight: 10 }}>
                      <Avatar
                        rounded
                        source={require("@assets/icons/user.png")}
                      />
                    </View>
                    <ListItem.Content>
                      <ListItem.Title
                        style={{
                          // fontWeight: "bold",
                          fontFamily: "OpenSans-Regular",
                        }}
                      >
                        {item.title != null ? item.title : "Guest"}
                      </ListItem.Title>
                      <View style={styles.subtitleView}>
                        <Text style={styles.ratingText}>
                          {item.text != null ? item.text : "No comment"}
                        </Text>
                      </View>
                    </ListItem.Content>
                  </View>
                </ListItem>
              );
            })}
          </View>

          <View style={styles.footer}>
            <View style={styles.headerBorder}>
              <Text style={styles.headerStyle}>Related Hotel</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              data={hotelLists?.items}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{ paddingVertical: 20, paddingLeft: 16, width: 350 }}
                  >
                    <TouchableOpacity>
                      <View style={styles.cardWrapper}>
                        <HotelGrid hotel={item} />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  // const renderName = (hotelName) => {
  //   return hotelName.replace(/^(.{40}[^\s]*).*/, "$1");
  // };
  const [scrollYState, setScrollY] = useState(
    new Animated.Value(Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0)
  );
  const [widthListImage, setWidthListImage] = useState(0);

  const scrollY = Animated.add(
    scrollYState,
    Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
  );
  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0.95, 0.4, 0],
    extrapolate: "clamp",
  });
  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });
  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.6, 0],
    extrapolate: "clamp",
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50, -100],
    extrapolate: "clamp",
  });
  const logoTranslate = scrollY.interpolate({
    inputRange: [0, 0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -700],
    extrapolate: "clamp",
  });
  if (!hotelDetail) return <ActivityIndicator size="large" color="#0000ff" />;
  else
    return (
      <View style={styles.fill}>
        <SafeAreaView style={styles.headerWrapper}>
          <View style={styles.headerLeft}>
            <View>
              <TouchableOpacity
                underlayColor="#DDDDDD"
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  opacity: 1,
                  borderWidth: 1,
                  borderColor: "#EEE",
                  borderRadius: 15,
                  padding: 2,
                  backgroundColor: "#DDD",
                }}
              >
                <MaterialIcons name="arrow-back" size={25} color="#007BFF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerTitle}></View>
          <View style={styles.headerRight}>
            <AntDesign
              style={[{ paddingRight: 10 }, styles.IconColor]}
              name={
                statusHotelLike(hotelDetail, hotelLikeList) ? "heart" : "hearto"
              }
              size={25}
              color="red"
              onPress={() => {
                hotelLikeAction();
              }}
            />
          </View>
        </SafeAreaView>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYState } } }],
            { useNativeDriver: true }
          )}
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {renderScrollViewContent()}
        </Animated.ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={{
              uri:
                hotelDetail?.assets[0] ??
                "https://tripleplay.tv/wp-content/uploads/2020/09/Corporate-Icon.png",
            }}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Animated.View
            style={[
              {
                backgroundColor: "white",
                width: "90%",
                height: 240,
                top: HEADER_MAX_HEIGHT - 200,
                opacity: 0.8,
                position: "relative",
                marginHorizontal: 18,
                borderRadius: 20,
                flexDirection: "column",
                padding: 16,
              },
              { transform: [{ translateY: logoTranslate }] },
            ]}
          >
            <Animated.View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: "Baloo-Regular",
                  fontSize: 24,
                  fontWeight: "900",
                  color: "black",
                }}
              >
                {hotelDetail.name}
              </Text>
            </Animated.View>
            <Animated.View style={{ flexDirection: "column" }}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  height: 50,
                  marginTop: 16,
                  marginEnd: 7,
                }}
              >
                <Fontisto
                  style={[{ paddingRight: 10 }, styles.secondaryColor]}
                  name="map-marker-alt"
                  size={14}
                  color="#666"
                />
                <Animated.Text
                  style={{
                    fontFamily: "OpenSans-Regular",
                    color: colors.secondaryColor,
                    marginBottom: -10,
                  }}
                >
                  {hotelDetail.address}
                </Animated.Text>
              </Animated.View>
              <Animated.View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <Animated.View style={{ alignItems: "center", width: "50%" }}>
                  <Text
                    style={{
                      fontSize: 24,
                      // fontWeight: "bold",
                      color: colors.primary,
                    }}
                  >{`${convertCurrency(
                    Math.min(...hotelDetail.prices.map((price) => price?.value))
                  )}`}</Text>
                </Animated.View>
                <Animated.View
                  style={{
                    width: "60%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                ></Animated.View>
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>
    );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: "white",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    marginTop: -70,
    paddingHorizontal: 4,
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
    backgroundColor: "white",
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBar: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerWrapper: {
    alignItems: "center",
    zIndex: 1,
    height: 80,
    flexDirection: "row",
    // backgroundColor: colors.divider,
    opacity: 0.6,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  secondaryColor: {
    color: "#3b4044",
  },
  serviceWrapper: {
    width: 65,
    height: 65,
    padding: 0,
    margin: 1,
  },
  pricesWrapper: {
    width: "70%",
    height: 90,
    padding: 2,
    margin: 29,
  },

  servicesWrapper: {
    width: "100%",
    // flexGrow: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    minHeight: 200,
    borderRadius: 2,
  },
  headerLeft: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  headerTitle: {
    flex: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  headerRight: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  IconColor: {
    color: "red",
  },
  headerStyle: {
    fontSize: 20,
    // fontWeight: "700",

    fontFamily: "Baloo-Regular",
  },
  headerBorder: {
    backgroundColor: "#EEE",
    // opacity: 0.5,
    marginBottom: 8,
    width: "100%",
    padding: 4,
    borderRadius: 2,
    justifyContent: "space-around",
  },
  subtitleView: {
    flexDirection: "row",
    paddingTop: 5,
  },
  ratingText: {
    fontFamily: "OpenSans-Regular",
    color: "grey",
  },
  footer: {
    flexDirection: "column",
    marginBottom: "20%",
  },
});
const stylesDes = StyleSheet.create({
  p: {
    fontFamily: "OpenSans-Regular",
  },
  li: {
    fontFamily: "OpenSans-Regular",
  },
  ul: {
    fontFamily: "OpenSans-Regular",
  },
  li: {
    fontFamily: "OpenSans-Regular",
  },
});
function mapStateToProps(state) {
  return {
    hotelDetail: state.hotelDetail.hotelDetail,
    hotelLikeList: state?.hotelLike?.hotelLike?.items,
    hotelLists: state?.hotelSearchingByFilter?.searchHotels,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getHotelDetail: (hotelID) => dispatch(getHotelDetailAction(hotelID)),
    setHotelLike: (hotelID) => dispatch(setHotelLike(hotelID)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HotelDetailScreen);
