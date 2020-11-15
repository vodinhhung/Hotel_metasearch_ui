import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from "@screens/HomePageScreen/HomePageScreen";
import SearchPage from "@screens/SearchScreen/SearchScreen";
import SearchHeader from "@components/Search/SearchHeader/SearchHeader";
import HotelDetailPage from "@screens/HotelDetailScreen/HotelDetailScreen";
import SearchFilterScreen from "@screens/SearchFilterScreen/SearchFilterScreen";
const HomePage = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePageScreen} />
      <Stack.Screen name="SearchHeader" component={SearchHeader} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="SearchFilterScreen" component={SearchFilterScreen} />
      <Stack.Screen name="HotelDetailPage" component={HotelDetailPage} />
    </Stack.Navigator>
  );
};
export default HomePage;
