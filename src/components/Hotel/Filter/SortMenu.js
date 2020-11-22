import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { convertCurrency } from "@lib/utils/hotel";
import { connect } from "react-redux";
import { setSearchParams } from "@redux/actions/hotelAction";
import { Button, Menu, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { renderSortName } from "@lib/utils/resolver";
const SortMenu = ({ setSearchParams, sort }) => {
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
              <Text>{renderSortName(sort)}</Text>
            </Button>
          }
        >
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ sort: null });
            }}
            title={<Text>Recommended</Text>}
          ></Menu.Item>
          <Divider />
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ sort: "asc" });
            }}
            title={<Text>Increase</Text>}
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              setSearchParams({ sort: "desc" });
            }}
            title={<Text>Decrease</Text>}
          />
        </Menu>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    sort: state.hotelSearchingByFilter.params.sort,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
