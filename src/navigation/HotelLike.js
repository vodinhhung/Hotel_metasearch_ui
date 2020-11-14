import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LikePageScreen from "@screens/LikePageScreen/LikePageScreen";
const HotelLike = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HotelLikeScreen" component={LikePageScreen} />
    </Stack.Navigator>
  );
};
export default HotelLike;
