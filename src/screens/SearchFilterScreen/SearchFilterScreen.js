import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Text,
  Image,
  ListItem,
  CheckBox,
  Slider,
  Icon,
  Button,
} from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import Accordion from "@dooboo-ui/native-accordion";
import { connect } from "react-redux";
import Constants from "expo-constants";

import { getSearchHotelByFilter } from "../../redux/actions/hotelAction";

export class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          checkedId: -1,
          checkedAmen: -1,
          icon: "hotel",
          title: "Hotel Class",
          subtitle: [
            {
              id: 1,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_one_star_rating-26-512.png",
              },
              description: "1 Star",
              isChecked: false,
            },
            {
              id: 2,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_two_star_rating-24-512.png",
              },
              description: "2 Stars",
              isChecked: false,
            },
            {
              id: 3,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_three_star_rating-23-512.png",
              },
              description: "3 Stars",
              isChecked: false,
            },
            {
              id: 4,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_four_star_rating-22-512.png",
              },
              description: "4 Stars",
              isChecked: false,
            },
            {
              id: 5,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_five_star_rating-21-512.png",
              },
              description: "5 Stars",
              isChecked: false,
            },
          ],
        },
        {
          checkedId: -1,
          checkedAmen: -1,
          icon: "sofa",
          title: "Amenities",
          subtitle: [
            {
              id: 10,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn.iconscout.com/icon/free/png-512/wifi-446-474996.png",
              },
              description: "Free Wifi",
              isChecked: false,
            },
            {
              id: 11,
              item: "Amenities",
              image: {
                uri: "https://static.thenounproject.com/png/545131-200.png",
              },
              description: "Car Park",
              isChecked: false,
            },
            {
              id: 12,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn0.iconfinder.com/data/icons/hotel-service-7/64/airport-shuttle-car-transportation-512.png",
              },
              description: "Airport Transport",
              isChecked: false,
            },
            {
              id: 13,
              item: "Amenities",
              image: {
                uri: "https://image.flaticon.com/icons/png/512/84/84364.png",
              },
              description: "Restaurant",
              isChecked: false,
            },
            {
              id: 14,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn1.iconfinder.com/data/icons/care-and-support/120/child-care-1-512.png",
              },
              description: "Baby Service",
              isChecked: false,
            },
            {
              id: 15,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn.iconscout.com/icon/free/png-256/bar-606-1106181.png",
              },
              description: "Bar",
              isChecked: false,
            },
            {
              id: 16,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn.iconscout.com/icon/premium/png-256-thumb/laundry-39-501673.png",
              },
              description: "Laundry",
              isChecked: false,
            },
            {
              id: 17,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn0.iconfinder.com/data/icons/miscellaneous-51-line/128/tourism_touring_ramble_excursion_travel-512.png",
              },
              description: "Tour",
              isChecked: false,
            },
            {
              id: 18,
              item: "Amenities",
              image: {
                uri:
                  "https://image.flaticon.com/icons/png/128/3057/3057304.png",
              },
              description: "Spa",
              isChecked: false,
            },
            {
              id: 19,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn1.iconfinder.com/data/icons/real-estate-94/200/810-512.png",
              },
              description: "Pool",
              isChecked: false,
            },
          ],
        },
      ],
      value: 0,
      star: 0,
      service: [],
    };
  }

  handleCheckAmenities = (number) => {
    this.setState(
      this.state.contents.map((param) => {
        param.subtitle.map((num) => {
          {
            if (num.item.match("Amenities") && num.id == number) {
              {
                num.isChecked = !num.isChecked;
                if (num.isChecked == true) {
                  this.state.service.push(num.id);
                }
              }
            }
          }
        });
      })
    );
  };

  handleCheckHotelClass = (num) => {
    this.setState(
      this.state.contents.map((number) => {
        this.state.star = num;
        number.checkedId = num;
      })
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerWrapper}>
          <View style={styles.backIcon}>
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <MaterialIcons name="arrow-back" size={30} color="white" />
            </TouchableHighlight>
          </View>
          <View style={[styles.titleFilter]}>
            <Text
              style={{ fontSize: 24, color: "white", fontWeight: "normal" }}
            >
              Filter
            </Text>
          </View>
          <View
            style={{ justifyContent: "center", alignItems: "center" }}
          ></View>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.priceOption}>
              <View>
                <Text style={styles.textHead}>Price Options</Text>
              </View>
              <View style={{ height: 100, marginTop: 10, marginLeft: 0 }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <Slider
                    value={this.state.value}
                    step={10.0}
                    minimumValue={100.0}
                    maximumValue={15000000}
                    onValueChange={(value) => this.setState({ value })}
                    backgroundColor="#FFF"
                  />
                  <Text>Value: {this.state.value}</Text>
                </View>
              </View>
            </View>
            <View style={styles.filterOption}>
              <View>
                <Text style={styles.textHead}>Filter Options</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                {this.state.contents
                  ? this.state.contents.map((param, i) => {
                      return (
                        <Accordion
                          key={i}
                          style={styles.Accordion}
                          contentVisible={false}
                          header={
                            <View style={{ marginTop: 10 }}>
                              <ListItem key={i} bottomDivider>
                                <MaterialCommunityIcons
                                  name={param.icon}
                                  size={24}
                                  color="black"
                                />
                                <ListItem.Content>
                                  <ListItem.Title style={{ marginTop: 20 }}>
                                    {param.title}
                                  </ListItem.Title>
                                  <ListItem.Subtitle>
                                    {param.subtitle[0][1]}
                                  </ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                              </ListItem>
                            </View>
                          }
                        >
                          {param.subtitle.map((sub, j) => {
                            return (
                              <View style={{ flexDirection: "row" }} key={j}>
                                <CheckBox
                                  key={j}
                                  containerStyle={styles.checkbox}
                                  title={
                                    sub.item.match("Amenities") ? (
                                      <View
                                        style={{
                                          flexDirection: "row",
                                          width: 120,
                                          height: 30,
                                        }}
                                      >
                                        <Text style={styles.textAmenities}>
                                          {sub.description}
                                        </Text>
                                        <Image
                                          source={sub.image}
                                          style={styles.imageAmenitiesIcon}
                                        />
                                      </View>
                                    ) : (
                                      <Image
                                        source={sub.image}
                                        style={styles.imageStarIcon}
                                      />
                                    )
                                  }
                                  checked={
                                    sub.item.match("Amenities")
                                      ? sub.isChecked
                                      : sub.id == param.checkedId
                                  }
                                  onPress={
                                    sub.item.match("Amenities")
                                      ? () => this.handleCheckAmenities(sub.id)
                                      : () => this.handleCheckHotelClass(sub.id)
                                  }
                                />
                              </View>
                            );
                          })}
                        </Accordion>
                      );
                    })
                  : null}
                <View style={{ height: 96 }} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <Button
            title="Submit"
            type="outline"
            titleStyle={{ color: "white" }}
            buttonStyle={{ borderRadius: 5, backgroundColor: "#00B388" }}
            onPress={() => {
              // this.props.onFetchHotels({
              //   value: this.state.value,
              //   star: this.state.star,
              //   services: this.state.service,
              // });

              this.props.onFetchHotels({
                value: this.state.value,
                star: this.state.star,
                services: this.state.service,
              });
              this.props.navigation.navigate("SearchPage");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    top: "7%",
    marginBottom: 34,
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#00B388",
    width: "99%",
  },
  backIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleFilter: {
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    marginTop: "5%",
    width: "98%",
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
  console.log(state.hotelSearchingByFilter[1]);
  console.log("===========================================================");
  return {
    hotels: state.hotelSearchingByFilter[1],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onFetchHotels: (params) => {
      dispatch(getSearchHotelByFilter(params));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
