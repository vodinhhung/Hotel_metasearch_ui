import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  LayoutAnimation,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import StatusBar from "@components/Common/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  getSearchSuggestion,
  setSearchParams,
} from "@redux/actions/hotelAction";
import { useTheme, Searchbar, Avatar } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
const SearchDesScreen = ({
  getDestinations,
  setSearchParams,
  destinations = { province_items: [], hotel_items: [] },
  userInfo,
}) => {
  const [textInput, setTextInput] = useState("");
  const [time, setTime] = useState(0);
  const { colors } = useTheme();
  const [switchEffect, setSwitchEffect] = useState(true);
  useEffect(() => {
    getDestinations({ destination: "" });
  }, []);
  const navigation = useNavigation();

  const onChangeSearch = (query) => {
    getDestinations({ destination: query });
  };
  const focusSearchInput = (status = true) => {
    LayoutAnimation.easeInEaseOut();
    if (status) {
      setSwitchEffect(false);
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar colors={colors} />
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons
                name="arrow-back"
                size={25}
                style={styles.backIcon}
                color="#007BFF"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={[styles.bigTitle2, { alignSelf: "center" }]}>
            Search
          </Text>
        </View>
        <View style={styles.headerRight}>
          {userInfo ? (
            <Avatar.Image
              size={35}
              source={{ uri: userInfo.picture.data.url }}
            />
          ) : null}
        </View>
      </SafeAreaView>
      <View>
        {switchEffect && (
          <Animated.View style={[styles.bodyWrapper, { height: 120 }]}>
            <Text style={styles.bigTitle}>
              Hello, {userInfo?.name ? `${userInfo?.name}.` : null}
            </Text>
            <Text style={styles.bigTitle}>What would you like to search ?</Text>
          </Animated.View>
        )}
        <View style={[styles.bodyWrapper, { height: 60 }]}>
          <Searchbar
            placeholder="Find you want."
            onFocus={() => {
              focusSearchInput();
            }}
            onChangeText={onChangeSearch}
          />
        </View>
        <ScrollView style={[styles.bodyWrapper, { height: "100%" }]}>
          {destinations?.province_items?.slice(0, 3).map((province, index) => {
            return (
              <ListItem
                key={index}
                bottomDivider
                onPress={async () => {
                  await setSearchParams({ destination: province.name });
                  navigation.navigate("SearchPage", {
                    destination: province.name,
                  });
                  // setTextInput(province.name);
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>
                    <FontAwesome5
                      name="map-marker-alt"
                      size={15}
                      color="#208838"
                    />
                    {" " + province.name}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            );
          })}
          {destinations?.hotel_items?.slice(0, 3)?.map((hotel, index) => {
            return (
              <ListItem
                key={index}
                bottomDivider
                onPress={() => {
                  navigation.navigate("HotelDetailPage", { hotel });
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>
                    <FontAwesome5 name="hotel" size={15} color="#208838" />
                    {" " + hotel.name}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    flexDirection: "row",
  },
  bodyWrapper: {
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    flexDirection: "column",
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
  input: {
    flex: 15,
    alignItems: "center",
  },
  logoIcon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 3,
    right: 2,
  },
  titleFilter: {
    paddingLeft: 10,
    textDecorationColor: "#666",
    textDecorationLine: "underline",
  },
  bigTitle: {
    fontSize: 25,
    fontWeight: "500",
  },
  bigTitle2: {
    fontSize: 20,
    fontWeight: "500",
  },
});
function mapStateToProps(state) {
  return {
    destinations: state.searchDestination.destinations,
    userInfo: state.user.userProfile,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getDestinations: (params) => dispatch(getSearchSuggestion(params)),
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchDesScreen);
