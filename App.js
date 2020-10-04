import "react-native-gesture-handler";
import React from "react";
import HomePage from "./src/navigation/HomePage";
import LoginFollow from "./src/navigation/Login";
import Account from "./src/navigation/Account";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
const Stack = createStackNavigator();

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

function AppFollow() {
  return (
    <Tab.Navigator
      screenOptions={screenOptionsRender}
      tabBarOptions={{
        activeTintColor: "#358c63",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      {/* <Tab.Screen name="Like" component={Like} /> */}
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="App" component={AppFollow} />
          <Stack.Screen name="Login" component={LoginFollow} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
