import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import Account from "./Account";
import HotelLike from "./HotelLike";
const Tab = createBottomTabNavigator();
const screenOptionsRender = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case "Home":
        iconName = focused ? "home" : "home";
        break;
      case "Account":
        iconName = focused ? "user" : "user";
        break;
      case "Like":
        iconName = focused ? "heart" : "heart";
        break;
      default:
        iconName = "null";
    }
    return <Feather name={iconName} size={size} color={color} />;
  },
});

const AppFollow = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptionsRender}
      tabBarOptions={{
        activeTintColor: "#358c63",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Like" component={HotelLike} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default AppFollow;
