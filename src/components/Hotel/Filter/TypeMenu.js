import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { convertCurrency } from "@lib/utils/hotel";
import { connect } from "react-redux";
import { setSearchParams } from "@redux/actions/hotelAction";
import { Button, Menu, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { renderTypeName } from "@lib/utils/resolver";
const TypeMenu = ({ setSearchParams, type }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              //   style={{ flexDirection: "row", alignItems: "center", backgroundColor: "yellow" }}
              onPress={openMenu}
            >
              <MaterialCommunityIcons name="sort" size={20} color="black" />
              <Text>{renderTypeName(type)}</Text>
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ type: null });
            }}
            title={<Text>Hotel</Text>}
          ></Menu.Item>
          <Divider />
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ type: "homestay" });
            }}
            title={<Text>Homestay</Text>}
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ type: "hostel" });
            }}
            title={<Text>Hostel</Text>}
          />
        </Menu>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    type: state.hotelSearchingByFilter.params.type,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TypeMenu);
