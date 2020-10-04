import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
const MainHomePage = ({ navigation }) => {
  const image = {
    uri:
      "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const recentImage = {
    uri:
      "https://images.unsplash.com/photo-1596948209610-c566ee564ea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  };

  const imageSource = {
    uri: require("../../../assets/icons/tripi-logo.png"),
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      title: "Ha long",
      key: "1",
    },
    {
      image: {
        uri:
          "https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1117&q=80",
      },
      title: "Ninh Binh",
      key: "2",
    },
    {
      image: {
        uri:
          "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
      },
      title: "Da Nang",
      key: "3",
    },
    {
      image: {
        uri:
          "https://images.unsplash.com/photo-1541079606130-1f46216e419d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      title: "Saigon",
      key: "4",
    },
  ]);

  const goToPost = () => {
    navigation.navigate("Post");
  };

  return (
    <View style={{ flexGrow: 1, height: "100%" }}>
      <StatusBar style="light" />
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 200 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 24, right: 60, opacity: 0.6 }}
            />
          </View>

          <Image
            source={require("../../../assets/icons/tripi-logo.png")}
            style={styles.imageAvatar}
          />
        </ImageBackground>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#358c63" }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#358c63" }}
            >
              Recently Viewed
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "grey" }}>
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "90%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="map-pin"
                color="white"
                size={20}
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}
              >
                MerPerle Hon Tam Resort
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Nha Trang, Vietnam
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 200,
    backgroundColor: "gray",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 80,
    paddingLeft: 16,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
  imageAvatar: {
    width: 110,
    tintColor: "white",
    height: 50,
    alignSelf: "center",
    top: 30,
    left: 20,
    position: "absolute",
  },
});

export default MainHomePage;
