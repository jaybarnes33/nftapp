import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";

import { COLORS, NFTData } from "../constants";
const Home = () => {
  const [nftData, setNFTData] = useState(NFTData);

  const handleSearch = (key: string) => {
    if (!key.length) return setNFTData(NFTData);

    const filtered = NFTData.filter((item) =>
      item.name.toLowerCase().includes(key.toLowerCase())
    );

    if (filtered.length) {
      setNFTData(filtered);
    } else {
      setNFTData(NFTData);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
