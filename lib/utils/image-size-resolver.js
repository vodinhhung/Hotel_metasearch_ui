import { Image } from "react-native";

/**
 * used to convert scale image
 * @param {*} source your source image
 * @param {*} widthP pass width or height
 * @param {*} heightP pass width or height
 */
export function getScaleSizeOfImage(source, widthP, heightP) {
  try {
    let scale = 0;
    const width = Image.resolveAssetSource(source).width;
    const height = Image.resolveAssetSource(source).height;
    if (!!widthP) {
      scale = widthP / width;
    } else if (!!heightP) {
      scale = heightP / height;
    }
    return { width: width * scale, height: height * scale };
  } catch (e) {
    console.log("cannot get size of image");
    console.log(e);
    return {
      width: 0,
      height: 0,
    };
  }
}
