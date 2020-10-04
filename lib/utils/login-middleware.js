import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import Expo from "expo"
import { facebookLoginConfig, googleLoginConfig } from "../../config/loginConfig";

export const googleLoginResolver = async () => {
  try {
    const { type, accessToken, user } = await Google.logInAsync(
      googleLoginConfig
    );
    if (type === "success") {
      // Then you can use the Google REST API
      let userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return { status: true, userInfo: userInfoResponse };
    }
  } catch (e) {
    return { status: false };
  }
};

export const facebookLogInResolver = async () => {
  try {
    await Facebook.initializeAsync(facebookLoginConfig.appId);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const dataRes = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
      );
      return { status: true, userInfo: dataRes };
    } else {
      return { status: false };
    }
  } catch (e) {
    return { status: false };
  }
};
