import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  facebookLogInResolver,
  googleLoginResolver,
} from "../../lib/utils/login-middleware";
import TripIcon from "../../components/Common/TripIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { loginRequest, loginScreen } from "../../redux/actions/userAction";

const Login = ({
  loginRequest,
  userLogged,
  loginScreen,
  loginScreenAction,
}) => {
  const navigation = useNavigation();

  const handleLoginSuccess = (type, userInfo) => {
    loginScreenAction(true);
    navigation.goBack();
  };
  if (userLogged && !loginScreen) {
    handleLoginSuccess();
  }
  const googleLoginAction = async () => {
    try {
      const { accessToken } = await googleLoginResolver();
      loginRequest({ type: "google", token: accessToken });
    } catch (e) {
      Alert("Login error");
    }
  };
  const facebookLoginAction = async () => {
    try {
      const { accessToken } = await facebookLogInResolver();
      loginRequest({ type: "facebook", token: accessToken });
    } catch (e) {
      Alert("Login error");
    }
  };
  const skipAction = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/travel/image-travel-2.jpg")}
        style={[styles.backgroundImage, { opacity: 0.7 }]}
      />
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <TripIcon color="white" />
        <View style={styles.bigTitle}>
          <Text style={styles.primary}>Cùng đi khắp thế gian,</Text>
          <Text style={styles.primary}>Biết rằng không hề dễ dàng</Text>
          <Text style={styles.primary}>Rồi mọi chuyện sẽ ổn thôi</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          style={styles.loginFacebookBtn}
          onPress={facebookLoginAction}
        >
          <FontAwesome
            style={styles.iconSpace}
            name="facebook"
            size={24}
            color="white"
          />
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginGoogleBtn}
          onPress={googleLoginAction}
        >
          <AntDesign
            style={styles.iconSpace}
            name="google"
            size={20}
            color="white"
          />
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={skipAction}>
          <Text style={{ color: "#eee", fontWeight: "700" }}>
            Skip to continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconSpace: {
    paddingRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "column",
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginFacebookBtn: {
    minWidth: 240,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#1877F2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginGoogleBtn: {
    minWidth: 240,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#E2402B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutBtn: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover",
    width: null,
    height: null,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bigTitle: {
    paddingHorizontal: 20,
    paddingTop: "8%",
  },
  primary: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
function mapStateToProps(state) {
  return {
    userLogged: state.user.isLogin,
    loginScreen: state.user.loginScreen,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginRequest: (params) => dispatch(loginRequest(params)),
    loginScreenAction: (params) => dispatch(loginScreen(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
