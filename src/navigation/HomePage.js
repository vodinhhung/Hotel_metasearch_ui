import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainHomePage from "../components/HomePage/MainHomePage";
const Stack = createStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MainHomePage"
    >
      <Stack.Screen name="MainHomePage" component={MainHomePage} />
    </Stack.Navigator>
  );
};

export default HomePage;
