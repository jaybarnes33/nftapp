import { View, Text } from "react-native";
import React, { useState } from "react";
import { IData } from "../constants/dummy";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsDesc = ({ data }: { data: IData }) => {
  const [text, setText] = useState<IData["description"]>(
    data.description.slice(0, 100)
  );
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            fontWeight: "500",
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
              } else {
                setText(data.description.slice(0, 100));
              }
              setReadMore(!readMore);
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: SIZES.small,
                color: COLORS.primary,
              }}
            >
              {readMore ? "Show less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
