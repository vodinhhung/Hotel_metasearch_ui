import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainHomePage from "../components/HomePage/MainHomePage";
import SearchPage from "../components/SearchPage/SearchPage";
const Stack = createStackNavigator();

const HomePage = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchPage"
    >
      <Stack.Screen name="MainHomePage" component={MainHomePage} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  );
};

export default HomePage;
