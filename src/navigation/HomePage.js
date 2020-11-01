import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainHomePage from "../components/HomePage/MainHomePage";
import SearchPage from "../components/SearchPage/SearchPage";
import SearchFilter from "../components/SearchByFilter/SearchFilter";
import HotelDetail from "../components/Hotel/HotelDetail";

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
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="HotelDetailPage" component={HotelDetail} />
    </Stack.Navigator>
  );
};

export default HomePage;
