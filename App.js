import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen"
import AppFollow from "./src/navigation/index";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {/* <Stack.Screen name="App" component={AppFollow} /> */}
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
