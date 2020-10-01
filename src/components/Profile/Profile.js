import React, { useState } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const images = [
  {
    name: "Olivia",
    updateAt: "4h",
    avatar: require("../../../images/avatars/avatar1.jpg"),
    image: require("../../../images/girls/girl1.jpg"),
  },
  {
    name: "Emma",
    updateAt: "4h",
    avatar: require("../../../images/avatars/avatar2.jpg"),
    image: require("../../../images/girls/girl2.jpg"),
  },
  {
    name: "Ava",
    updateAt: "4h",

    avatar: require("../../../images/avatars/avatar3.jpg"),
    image: require("../../../images/girls/girl3.jpg"),
  },
  {
    name: "Sophia",
    updateAt: "4h",

    avatar: require("../../../images/avatars/avatar4.jpg"),
    image: require("../../../images/girls/girl4.jpg"),
  },
  {
    name: "Isabella",
    updateAt: "4h",

    avatar: require("../../../images/avatars/avatar5.jpg"),
    image: require("../../../images/girls/girl5.jpg"),
  },
  {
    name: "Mia",
    updateAt: "4h",

    avatar: require("../../../images/avatars/avatar6.jpg"),
    image: require("../../../images/girls/girl6.jpg"),
  },
  {
    name: "Harper",
    updateAt: "4h",

    avatar: require("../../../images/avatars/avatar7.jpg"),
    image: require("../../../images/girls/girl7.jpg"),
  },
];

const Profile = ({ navigation }) => {
  const [widthListImage, setWidthListImage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
        <AntDesign name="bars" size={24} color="black" />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopLeft}>
            <Image
              resizeMode="cover"
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={{
                uri:
                  "https://kenh14cdn.com/thumb_w/620/2020/6/5/006mrmprly1gdx6exf3lyj30u01rcasm-15913263980501789002707-crop-15913264120321997228444.jpg",
              }}
            ></Image>
          </View>
          <View style={styles.bodyTopRight}>
            <Text style={styles.headerText}>Uyên Nhi</Text>
            <Text style={styles.titleText}>Nhi đáng iêu</Text>
            <View style={styles.headerAction}>
              <TouchableHighlight
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 25,
                  marginHorizontal: 5,
                  backgroundColor: "#3B73FF",
                  borderRadius: 30,
                }}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert("Pressed!")}
              >
                <Text style={{ color: "white" }}>Follow</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  paddingVertical: 2,
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  backgroundColor: "#56D8FF",
                  borderRadius: 30,
                }}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert("Pressed!")}
              >
                <MaterialIcons name="send" size={24} color="white" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.wrapInfoNumber}>
          <View>
            <Text style={[styles.headerText, { textAlign: "center" }]}>
              210
            </Text>
            <Text style={styles.titleText}>Photos</Text>
          </View>
          <View>
            <Text style={[styles.headerText, { textAlign: "center" }]}>
              24k
            </Text>
            <Text style={styles.titleText}>Followers</Text>
          </View>
          <View>
            <Text style={[styles.headerText, { textAlign: "center" }]}>
              230
            </Text>
            <Text style={styles.titleText}>Following</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={styles.imagesWrapper}
          onLayout={(event) => {
            let { width } = event.nativeEvent.layout;
            setWidthListImage(width);
          }}
        >
          {images.map((item, index) => (
            <TouchableHighlight
              underlayColor="#ffffff00"
              key={index}
              onPress={() => {
                navigation.navigate("Detail", { image: item.image });
              }}
            >
              <Image
                style={{
                  borderRadius: 10,
                  margin: 5,
                  width: widthListImage / 2 - 10,
                  height:
                    (widthListImage /
                      2 /
                      Image.resolveAssetSource(item.image).width) *
                    Image.resolveAssetSource(item.image).height,
                }}
                source={item.image}
              ></Image>
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
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
    fontSize: 20,
    fontWeight: "600",
  },
  titleText: {
    color: "#666",
  },

  wrapInfoNumber: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  headerBar: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  imagesWrapper: {
    alignContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Profile;
