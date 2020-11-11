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
      if (route.name === "Home") {
        iconName = focused ? "home" : "home";
      } else if (route.name === "Account") {
        iconName = focused ? "user" : "user";
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
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
export default AppFollow;
