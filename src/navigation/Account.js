import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainAccount from "../screens/AccountPageScreen/AccountPageScreen";
const Account = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainAccount" component={MainAccount} />
    </Stack.Navigator>
  );
};

export default Account;
