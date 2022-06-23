import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({
  imgUrl,
  handlePress,
  top,
  right,
  left,
}: {
  imgUrl: ImageSourcePropType;
  handlePress?: () => void;

  top?: number;
  right?: number;
  left?: number;
}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        top,
        right,
        left,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
}: {
  minWidth: number;
  fontSize: number;
  handlePress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,

        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text
        style={{ color: COLORS.white, textAlign: "center", fontSize: fontSize }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
