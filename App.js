import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HotelDetailPage from "@screens/HotelDetailScreen/HotelDetailScreen";
import { PersistGate } from "redux-persist/integration/react";
import AppFollow from "./src/navigation/index";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
