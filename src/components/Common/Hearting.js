import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  LayoutAnimation,
  UIManager,
} from "react-native";
import { statusHotelLike } from "@lib/utils/hotel";
import { connect } from "react-redux";
import { setHotelLike } from "@redux/actions/userAction";
import { ActivityIndicator } from "react-native-paper";
const Hearting = ({ hotel, hotelLikeList, setHotelLike, isPending, faded }) => {
  LayoutAnimation.easeInEaseOut();
  const hotelLikeAction = () => {
    setHotelLike(hotel.id);
  };

  const [pending, setPending] = useState(isPending);
  if (isPending !== pending) {
    setPending(isPending);
  }
  if (pending) {
    return (
      <View style={styles.talkBubble}>
        <View style={styles.talkBubbleSquare}>
          <ActivityIndicator size="small" />
        </View>
      </View>
    );
  }
  if (statusHotelLike(hotel, hotelLikeList)) {
    return (
      <View style={styles.talkBubble}>
        <View style={styles.talkBubbleSquareWhite}>
          <AntDesign
            name="heart"
            onPress={() => {
              setPending(!isPending);
              hotelLikeAction();
            }}
            size={20}
            color="#DC3645"
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare}>
        <AntDesign
          onPress={() => {
            setPending(!isPending);
            hotelLikeAction();
          }}
          name="hearto"
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: "transparent",
  },
  talkBubbleSquare: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#6665",
    borderRadius: 17,
  },
  talkBubbleSquareWhite: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "#fff8",
    borderRadius: 20,
    borderColor: "#6665",
    borderWidth: 1,
  },
});
function mapStateToProps(state) {
  return {
    hotelLikeList: state?.hotelLike?.hotelLike?.items ?? [],
    isPending: state?.hotelLike?.isPending ?? false,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setHotelLike: (hotelID) => dispatch(setHotelLike(hotelID)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Hearting);
