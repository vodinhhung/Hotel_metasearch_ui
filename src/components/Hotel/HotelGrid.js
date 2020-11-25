import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Card,
  ListItem,
  Button,
  Icon,
  AirbnbRating,
} from "react-native-elements";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HotelService from "./HotelService";
import Rating from "../Common/TalkBubble";
import { convertCurrency } from "@lib/utils/hotel";
import Hearting from "@components/Common/Hearting";
import HotelDomain from "./HotelDomain";
import ReviewScore from "@components/Common/ReviewScore";

const HotelGrid = ({ hotel }) => {
  const navigation = useNavigation();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [item, setItem] = useState({
    image: {
      uri: hotel?.logo ?? "https://tripleplay.tv/wp-content/uploads/2020/09/Corporate-Icon.png",
    },
  });
  return (
    <View style={styles.cardWrapper}>
      <Card containerStyle={styles.cardStyle}>
        <TouchableHighlight
          onLayout={async (event) => {
            let { x, y, width } = event.nativeEvent.layout;
            let newImageSize = imageSize;
            const height = 200;
            newImageSize = { width, height };
            setImageSize(newImageSize);
          }}
          underlayColor="#ffffff00"
          onPress={() => {
            navigation.push("HotelDetailPage", { hotel: hotel });
          }}
        >
          <View style={styles.cardBody}>
            <View style={styles.heartingStyle}>
              <Hearting hotel={hotel} />
            </View>
            <View style={styles.ratingStyle}>
              <Rating rating={hotel.overall_score} />
            </View>
            {item.image.uri && (
              <Image
                style={{
                  width: imageSize.width,
                  height: imageSize.height,
                }}
                source={item.image}
              ></Image>
            )}
            <View style={styles.wrapperContent}>
              <Text
                style={{ fontSize: 20, fontWeight: "500" }}
                numberOfLines={1}
              >
                {hotel.name}
              </Text>
              <View>
                <View style={styles.cardContent}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      // justifyContent: "flex-between",
                    }}
                    pointerEvents="none"
                  >
                    <View>
                      <AirbnbRating
                        showRating={false}
                        count={5}
                        defaultRating={hotel.star}
                        size={15}
                        readonly={true}
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}
                    >
                      <ReviewScore rating={hotel.review_score} />
                      {hotel.num_review && hotel.num_review !== -1 && (
                        <Text numberOfLines={1} style={styles.secondaryColor}>
                          {" "}
                          {hotel.num_review} reviews
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.priceContent}>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.priceStyle}>
                        {convertCurrency(hotel.price.value)}
                      </Text>
                      <View>
                        <HotelDomain type={hotel.price.domain} />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    paddingRight: 30,
                  }}
                >
                  <Fontisto
                    style={[{ paddingRight: 10 }, styles.secondaryColor]}
                    name="map-marker-alt"
                    size={15}
                    color="#777"
                  />
                  <Text numberOfLines={1} style={styles.secondaryColor}>
                    {hotel.address}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 5,
                    paddingRight: 30,
                  }}
                >
                  <View></View>
                  {/* <Fontisto
                    style={[{ paddingRight: 10 }, styles.secondaryColor]}
                    name="map-marker-alt"
                    size={15}
                    color="#777"
                  /> */}
                </View>
                {/* <View style={styles.serviceContent}>
                {hotel.services.map((item, index) => {
                  return <HotelService key={index} type={item.name} />;
                })}
              </View> */}
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  heartingStyle: {
    top: 10,
    right: 10,
    zIndex: 1,
    position: "absolute",
  },
  ratingStyle: {
    top: 10,
    left: 10,
    zIndex: 1,
    position: "absolute",
  },
  cardWrapper: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  cardStyle: {
    elevation: 10,
    overflow: "hidden",
    position: "relative",
    flex: 1,
    flexDirection: "column",
    padding: 0,
    margin: 15,
    borderRadius: 20,
  },
  wrapperContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  priceStyle: { color: "#007BFF", fontWeight: "300", fontSize: 20 },
  cardContent: {
    flex: 1,
    flexDirection: "row",
  },
  priceContent: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingRight: 5,
  },
  secondaryColor: {
    color: "#555",
  },
});

export default HotelGrid;
