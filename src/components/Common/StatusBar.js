import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "react-native-paper";
import { colorStatusBar } from "@lib/utils/theme";
const StatusBarRender = () => {
  const { colors } = useTheme();
  return (
    <StatusBar
      barStyle={colorStatusBar(colors)}
      backgroundColor={colors.background}
    />
  );
};
export default StatusBarRender;
