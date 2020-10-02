import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainAccount from "../components/Account/MainAccount";
const Stack = createStackNavigator();
const Account = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MainAccount"
    >
      <Stack.Screen name="MainAccount" component={MainAccount} />
    </Stack.Navigator>
  );
};

export default Account;
