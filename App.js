import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./src/navigation/HomePage";
import Account from "./src/navigation/Account";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
