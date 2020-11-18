import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Paragraph, useTheme, Chip } from "react-native-paper";
import { TouchableHighlight } from "react-native-gesture-handler";
import Accordion from "@dooboo-ui/native-accordion";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getSearchHotelByFilter } from "@redux/actions/hotelAction";
import DatePicker from "@components/Hotel/Filter/DatePicker";
import ModalDatePicker from "@components/Hotel/Filter/ModalDatePicker";
import PriceRange from "@components/Hotel/Filter/PriceRange";
import StarHotel from "@components/Hotel/Filter/StarHotel";
import Facilities from "@components/Hotel/Filter/Facilities";
const SearchFilter = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [value, setValue] = useState(0);
  const [star, setStar] = useState(0);
  const [service, setService] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <View>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <MaterialIcons
                name="arrow-back"
                size={25}
                style={styles.backIcon}
                color="#007BFF"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.headerTitle}></View>
      </SafeAreaView>
      <ScrollView style={styles.bodyWrapper}>
        <View style={{ paddingVertical: 5 }}>
          <Paragraph style={{ fontSize: 14, fontWeight: "bold" }}>
            BOOKING DATE
          </Paragraph>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <DatePicker setVisible={setVisible} />
          </View>
        </View>

        <View style={{ paddingVertical: 5 }}>
          <Paragraph style={{ fontSize: 14, fontWeight: "bold" }}>
            PRICE/DAY
          </Paragraph>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <PriceRange />
          </View>
        </View>

        {/* <View style={{ paddingVertical: 5 }}>
          <Paragraph style={{ fontSize: 14, fontWeight: "bold" }}>
            ĐÁNH GIÁ
          </Paragraph>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <PriceRange />
          </View>
        </View> */}

        <View style={{ paddingVertical: 5 }}>
          <Paragraph style={{ fontSize: 14, fontWeight: "bold" }}>
            HOTEL STAR
          </Paragraph>
          <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
            <StarHotel />
          </View>
        </View>

        <View style={{ paddingVertical: 5 }}>
          <Paragraph style={{ fontSize: 14, fontWeight: "bold" }}>
            FACILITIES
          </Paragraph>
        </View>
        <Facilities />
      </ScrollView>
      <ModalDatePicker visible={visible} setVisible={setVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 80,
    flexDirection: "row",
  },
  headerLeft: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  headerTitle: {
    flex: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  headerRight: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  backIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyWrapper: {
    marginHorizontal: 15,
  },
  titleFilter: {
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  priceOption: {
    marginTop: 10,
  },
  filterOption: {
    marginTop: 10,
  },
  textHead: {
    left: "2%",
    fontSize: 18,
    fontWeight: "bold",
  },
  textAmenities: {
    marginStart: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  imageAmenitiesIcon: {
    width: 30,
    height: 30,
    tintColor: "#00B388",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    marginStart: 10,
  },
  imageStarIcon: {
    width: 100,
    height: 20,
    tintColor: "#ffcc00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
    marginStart: 10,
  },
  checkbox: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    paddingEnd: 160,
  },
});

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
