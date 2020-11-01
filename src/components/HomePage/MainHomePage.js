import { connect } from "react-redux";
import React, { Component, useState } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 80 : 93;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const image = {
  uri:
    "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

export class MainHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
    };
  }

  _renderGallery() {
    const gallery = [
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1506741485568-47c278a3e70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=864&q=80",
        },
        title: "Hanoi",
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
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1482982425600-04078062c865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Sapa",
        key: "5",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1585155683190-0e92394ac1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80",
        },
        title: "Phu Quoc",
        key: "6",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1569133362252-0b8d3efc964f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        title: "Thua Thien Hue",
        key: "7",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1579068225051-cb7f11a44cbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        },
        title: "Nha Trang",
        key: "8",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
        title: "Quang Ninh",
        key: "9",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1562852223-4876db657248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
        },
        title: "Long An",
        key: "10",
      },
    ];

    return gallery;
  }

  _renderHotel() {
    const hotel = [
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1596948209610-c566ee564ea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "MerPerle Hon Tam Resort",
        location: "Nha Trang",
        key: "1",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "2",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "3",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "4",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "5",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "6",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "7",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "8",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Resort And Spa",
        location: "Hanoi",
        key: "9",
      },
      {
        image: {
          uri:
            "https://images.unsplash.com/photo-1584954490709-3c000d2ec110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        },
        title: "Hyatt Regency Danang Resort And Spa",
        location: "Da Nang",
        key: "10",
      },
    ];
    return hotel;
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#358c63" }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this._renderGallery()}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity>
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
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this._renderHotel()}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity>
                    <Image
                      source={item.image}
                      style={{
                        width: 300,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageRecentOverlay}></View>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 0,
                        padding: 16,
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Feather
                          name="map-pin"
                          color="white"
                          size={16}
                          style={{
                            marginLeft: "2%",
                            position: "relative",
                            top: 4,
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 16,
                            color: "white",
                            fontWeight: "normal",
                            marginBottom: "2%",
                            marginHorizontal: "2%",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "white",
                          fontWeight: "normal",
                          marginBottom: 4,
                          opacity: 0.9,
                          marginLeft: 10,
                        }}
                      >
                        {item.location}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp",
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp",
    });

    const barScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 1],
      extrapolate: "clamp",
    });
    const barTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50, -120],
      extrapolate: "clamp",
    });

    const logoScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 0],
      extrapolate: "clamp",
    });

    const logoTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -150],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
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
            source={image}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.bar,
            {
              transform: [{ scale: barScale }, { translateY: barTranslate }],
            },
          ]}
        >
          <Image
            source={require("../../../assets/icons/tripi-logo.png")}
            style={styles.tripiIcon}
          />
          <Animated.View style={styles.searchContainer}>
            <Animated.Text
              style={[
                styles.userText,
                { transform: [{ translateY: logoTranslate }] },
              ]}
            >
              Where would you like to go today?
            </Animated.Text>
          </Animated.View>
          <TextInput
            style={styles.searchBox}
            // autoFocus={true}
            onFocus={() => this.props.navigation.navigate("SearchPage")}
            placeholder="Search Destination"
            placeholderTextColor="#358c63"
          ></TextInput>
          <Feather
            name="search"
            size={22}
            color="#666"
            style={{
              position: "absolute",
              top: 8,
              right: "16%",
              opacity: 0.6,
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

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
    backgroundColor: "#f2f2f2",
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
    flexDirection: "row",
    borderBottomRightRadius: 65,
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    top: 120,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
  // searchBox: {
  //   top: 10,
  //   height: 40,
  //   marginTop: "3%",
  //   marginBottom: "3%",
  //   backgroundColor: "#fff",
  //   paddingLeft: 24,
  //   padding: 12,
  //   borderTopRightRadius: 40,
  //   borderBottomRightRadius: 40,
  //   width: "90%",
  // },
  //tripi
  searchBox: {
    width: "90%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingLeft: 24,
    padding: 12,
    paddingRight: 48,
    marginStart: -36,
  },
  tripiIcon: {
    top: "-300%",
    left: "4%",
    tintColor: "white",
    resizeMode: "contain",
    position: "absolute",
    width: "30%",
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
    marginTop: "4%",
    fontSize: 14,
    left: "8%",
    bottom: "5%",
  },
  ImageRecentOverlay: {
    width: 300,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.3,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: "5%",
    fontSize: 14,
    left: "20%",
    bottom: "5%",
  },
  searchContainer: {
    top: "-40%",
    left: 10,
    position: "absolute",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
    marginTop: -30,
  },
});

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(MainHomePage);
