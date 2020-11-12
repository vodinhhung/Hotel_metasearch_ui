import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HotelLikePageScreen from "@screens/LikePageScreen/LikePageScreen";
const HotelLike = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainAccount" component={HotelLikePageScreen} />
    </Stack.Navigator>
  );
};
export default HotelLike;
