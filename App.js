import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HotelDetailPage from "@screens/HotelDetailScreen/HotelDetailScreen";
import SearchFilterScreen from "@screens/SearchFilterScreen/SearchFilterScreen";
import { PersistGate } from "redux-persist/integration/react";
import AppFollow from "@navigation/index";
import { useFonts } from "expo-font";

import { setCustomText } from "react-native-global-props";
import { customTextProps } from "@config/appConfig";



const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    primary: "#3498db",
    accent: "#f1c40f",
  },
};
export default function App() {
  let [fontsLoaded] = useFonts({
    "Baloo-Regular": require("./assets/fonts/Baloo-Regular.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  setCustomText(customTextProps);
  console.log("hi")
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator headerMode="none">
                <Stack.Screen name="App" component={AppFollow} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen
                  name="SearchFilterScreen"
                  component={SearchFilterScreen}
                />
                <Stack.Screen
                  name="HotelDetailPage"
                  component={HotelDetailPage}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}
