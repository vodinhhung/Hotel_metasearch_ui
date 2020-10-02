import "react-native-gesture-handler";
import React from "react";
import HomePage from "./src/navigation/HomePage";
import LoginFollow from "./src/navigation/Login";
import Account from "./src/navigation/Account";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function AppFollow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginFollow} />
          <Stack.Screen name="App" component={AppFollow} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
