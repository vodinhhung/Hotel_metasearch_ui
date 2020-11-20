import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Paragraph,
  useTheme,
  Chip,
  Title,
  Button,
  Card,
} from "react-native-paper";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Accordion from "@dooboo-ui/native-accordion";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  getSearchHotelByFilter,
  setSearchParams,
} from "@redux/actions/hotelAction";
import DatePicker from "@components/Hotel/Filter/DatePicker";
import ModalDatePicker from "@components/Hotel/Filter/ModalDatePicker";
import PriceRange from "@components/Hotel/Filter/PriceRange";
import StarHotel from "@components/Hotel/Filter/StarHotel";
import Facilities from "@components/Hotel/Filter/Facilities";
import FilterSelected from "@components/Hotel/Filter/FilterSelected";
import moment from "moment";


const SearchFilter = ({ setSearchParams, getSearchHotelByFilter }) => {
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
            <TouchableOpacity
              underlayColor="#DDDDDD"
              onPress={() => {
                LayoutAnimation.easeInEaseOut();
                navigation.goBack();
              }}
            >
              <MaterialIcons
                name="arrow-back"
                size={25}
                style={styles.backIcon}
                color="#007BFF"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={[styles.bigTitle2, { alignSelf: "center" }]}>
            Filter
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            underlayColor="#DDDDDD"
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setSearchParams({
                star: null,
                priceFrom: null,
                priceTo: null,
                dateFrom: moment(),
                dateTo: moment().add(1, "days"),
                facility: null,
                page: 1,
              });
            }}
          >
            <MaterialCommunityIcons
              name="filter-remove-outline"
              size={26}
              style={styles.backIcon}
              color="#007BFF"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.bodyWrapper}>
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>BOOKING DATE</Text>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <DatePicker setVisible={setVisible} />
          </View>
        </View>

        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>PRICE /DAY</Text>
          <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
            <PriceRange />
          </View>
        </View>

        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>HOTEL STAR</Text>
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
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <FilterSelected />
            <Button
              style={{ backgroundColor: "#208838" }}
              mode="contained"
              onPress={() => {
                setSearchParams({ page: 1 });
                getSearchHotelByFilter();
                navigation.navigate("SearchPage", { scrollToTop: true });
              }}
            >
              <Paragraph style={{ color: "white" }}>
                <Text>Submit</Text>
              </Paragraph>
            </Button>
          </View>
        </Card.Content>
      </Card>

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
  bigTitle2: {
    fontSize: 20,
    fontWeight: "500",
  },
});

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    setSearchParams: (params) => dispatch(setSearchParams(params)),
    getSearchHotelByFilter: () => dispatch(getSearchHotelByFilter()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
