import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HotelDetailPage from "@screens/HotelDetailScreen/HotelDetailScreen";
import { PersistGate } from "redux-persist/integration/react";
import AppFollow from "@navigation/index";
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
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
