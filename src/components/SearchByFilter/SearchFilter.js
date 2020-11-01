import React, { Component, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  Text,
  Image,
  ListItem,
  CheckBox,
  Slider,
  Icon,
} from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import Accordion from "@dooboo-ui/native-accordion";

export default class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          icon: "hotel",
          title: "Hotel Class",
          body: "Hi. I love this component. What do you think?",
          subtitle: [
            {
              id: 1,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_one_star_rating-26-512.png",
              },
              isChecked: false,
            },
            {
              id: 2,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_two_star_rating-24-512.png",
              },
              isChecked: false,
            },
            {
              id: 3,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_three_star_rating-23-512.png",
              },
              isChecked: false,
            },
            {
              id: 4,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_four_star_rating-22-512.png",
              },
              isChecked: false,
            },
            {
              id: 5,
              item: "Hotel Class",
              image: {
                uri:
                  "https://cdn4.iconfinder.com/data/icons/badges-and-votes-1/128/Badges_Votes_five_star_rating-21-512.png",
              },
              isChecked: false,
            },
          ],
        },
        {
          icon: "sofa",
          title: "Amenities",
          body: "Yes. You can have more items.",
          subtitle: [
            {
              id: 1,
              item: "Amenities",
              image: {
                uri:
                  "https://cdn.iconscout.com/icon/free/png-512/wifi-446-474996.png",
              },
              isChecked: false,
            },
            {
              id: 2,
              item: "Amenities",
              image: {
                uri: "https://image.flaticon.com/icons/png/512/62/62768.png",
              },
              isChecked: false,
            },
            {
              id: 3,
              item: "Amenities",
              image: {
                uri: "https://image.flaticon.com/icons/png/512/84/84364.png",
              },
              isChecked: false,
            },
          ],
        },
      ],
      checked: false,
      value: 0,
    };
  }

  renderImage(source) {
    const image = {
      uri: source,
    };
    return image;
  }

  render() {
    // const navigation = useNavigation();
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Feather name="filter" size={24} color="white" />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.priceOption}>
              <View>
                <Text style={styles.textHead}>Price per night</Text>
              </View>
              <View style={{ height: 120, marginTop: 10 }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "stretch",
                    justifyContent: "center",
                  }}
                >
                  <Slider
                    value={this.state.value}
                    step={10000}
                    minimumValue={0}
                    maximumValue={500000}
                    onValueChange={(value) => this.setState({ value })}
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
                                  <ListItem.Title>{param.title}</ListItem.Title>
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
                              <View style={{ flexDirection: "row" }}>
                                <CheckBox
                                  key={j}
                                  containerStyle={{
                                    marginHorizontal: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: 320,
                                    paddingEnd: 160,
                                  }}
                                  title={
                                    sub.item.match("Amenities") ? (
                                      <Image
                                        source={sub.image}
                                        style={{
                                          width: 40,
                                          height: 40,
                                          tintColor: "#00B388",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginBottom: 4,
                                          marginStart: 10,
                                        }}
                                      />
                                    ) : (
                                      <Image
                                        source={sub.image}
                                        style={{
                                          width: 100,
                                          height: 20,
                                          tintColor: "#ffcc00",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginBottom: 4,
                                          marginStart: 10,
                                        }}
                                      />
                                    )
                                  }
                                  checked={this.state.checked}
                                  checkedIcon="dot-circle-o"
                                  uncheckedIcon="circle-o"
                                  // onPress={() =>
                                  //   this.setState({
                                  //     checked: !this.state.checked,
                                  //   })
                                  // }
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    top: "7%",
    left: 0,
    padding: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    backgroundColor: "#00B388",
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
    marginTop: "10%",
    width: "100%",
    flex: 1,
  },
  priceOption: {
    marginHorizontal: 12,
  },
  filterOption: {
    marginTop: 10,
  },
  textHead: {
    left: "2%",
    fontSize: 18,
  },
});
