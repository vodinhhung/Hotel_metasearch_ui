import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import HotelService from "./HotelService";
import TalkBubble from "../Common/TalkBubble";

const HotelGrid = ({ navigation, route }) => {
  const [widthListImage, setWidthListImage] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [item, setItem] = useState({
    image: {
      uri:
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    title: "Ha long",
    key: "1",
  });

  console.log(imageSize);
  return (
    <Card containerStyle={styles.cardStyle}>
      {/* <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider /> */}
      <TouchableHighlight
        onLayout={async (event) => {
          let { x, y, width } = event.nativeEvent.layout;
          let newImageSize = imageSize;
          const height = 150;
          console.log("height", height);
          newImageSize = { width, height };
          setImageSize(newImageSize);
        }}
        underlayColor="#ffffff00"
        onPress={() => {
          // navigation.navigate("Detail", { image: item.image });
        }}
      >
        <View style={styles.cardBody}>
          <View style={styles.ratingStyle}>
            <TalkBubble />
          </View>
          <Image
            style={{
              width: imageSize.width,
              height: imageSize.height,
            }}
            source={item.image}
          ></Image>
          <View style={styles.wrapperContent}>
            <Text style={styles.cardTitle}>Media hotel Khanh Vy</Text>
            <View style={styles.cardContent}>
              <View style={styles.priceContent}>
                <Ionicons
                  style={styles.iconStyle}
                  name="md-pricetags"
                  size={24}
                  color="#DDD"
                />
                <Text>300.000VND / 1 Đêm</Text>
              </View>
              <View style={styles.serviceContent}>
                <HotelService type="wifi" />
                <HotelService type="break-fast" />
              </View>
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
