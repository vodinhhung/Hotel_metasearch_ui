import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from "@screens/HomePageScreen/HomePageScreen";
import SearchPage from "@screens/SearchScreen/SearchScreen";
import HotelDetailPage from "@screens/HotelDetailScreen/HotelDetailScreen";
const HomePage = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="HotelDetailPage" component={HotelDetailPage} />
    </Stack.Navigator>
  );
};
export default HomePage;
