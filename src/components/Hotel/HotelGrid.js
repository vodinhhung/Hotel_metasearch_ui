import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HotelService from "./HotelService";
import Rating from "../Common/TalkBubble";
import { convertCurrency } from "../../lib/utils/hotel";

const HotelGrid = ({ hotel }) => {
  const [widthListImage, setWidthListImage] = useState(0);
  const navigation = useNavigation();
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [item, setItem] = useState({
    image: {
      uri: hotel.logo,
    },
    // title: "Ha long",
    // key: "1",
  });
  return (
    <Card containerStyle={styles.cardStyle}>
      {/* <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider /> */}
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
          navigation.navigate("HotelDetailPage", { hotel: hotel });
        }}
      >
        <View style={styles.cardBody}>
          <View style={styles.ratingStyle}>
            <Rating rating={hotel.overall_score} />
          </View>
          <Image
            style={{
              width: imageSize.width,
              height: imageSize.height,
            }}
            source={item.image}
          ></Image>
          <View style={styles.wrapperContent}>
            <Text style={styles.cardTitle}>{hotel.name}</Text>
            <View style={styles.cardContent}>
              <View style={styles.priceContent}>
                <Ionicons
                  style={styles.iconStyle}
                  name="md-pricetags"
                  size={24}
                  color="#DDD"
                />
                <Text>{`${convertCurrency(hotel.price.value)} / 1 Đêm`}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto
                  style={[{ paddingRight: 10 }, styles.secondaryColor]}
                  name="map-marker-alt"
                  size={24}
                  color="#DDD"
                />
                <Text style={styles.secondaryColor}>{hotel.address}</Text>
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  ratingStyle: {
    right: 0,
    zIndex: 1,
    position: "absolute",
  },
  cardStyle: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    padding: 0,
    margin: 4,
    borderRadius: 6,
  },
  wrapperContent: {
    padding: 10,
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

export default HotelGrid;
