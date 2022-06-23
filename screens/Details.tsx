import { NavigationProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  Route,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../App";
import { RectButton } from "../components/Buttons";
import DetailsBid from "../components/DetailsBid";
import DetailsDesc from "../components/DetailsDesc";
import DetailsHeader from "../components/DetailsHeader";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { SubInfo } from "../components/SubInfo";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { IData } from "../constants/dummy";

const Details = ({
  route,
  navigation,
}: {
  route: Route & {
    params: {
      data: IData;
    };
  };
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView>
      <FocusedStatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={true}
      />
      {Platform.OS === "ios" && (
        <View
          style={{
            width: "100%",

            height: Dimensions.get("screen").height,
            backgroundColor: COLORS.white,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        ></View>
      )}
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                    fontWeight: "500",
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
