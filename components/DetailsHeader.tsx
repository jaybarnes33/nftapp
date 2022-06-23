import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { CircleButton } from "./Buttons";
import { assets } from "../constants";
import { IData } from "../constants/dummy";
import { NavigationProp } from "@react-navigation/native";

import { RootStackParamList } from "../App";

const DetailsHeader = ({
  data,
  navigation,
}: {
  data: IData;
  navigation: NavigationProp<RootStackParamList>;
}) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight! + 10}
      />
    </View>
  );
};

export default DetailsHeader;
