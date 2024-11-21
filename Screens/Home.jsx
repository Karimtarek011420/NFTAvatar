import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { DATA } from "../constants/data";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import NFTCard from "../Component/NFTCard";
import HeaderHome from "../Component/HeaderHome";

export default function Home() {
  const [NtfsData, setNtfsData] = useState(DATA);
  const searchHandler = (value) => {
    if (value) {
      const filteredData = DATA.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setNtfsData(filteredData);
    } else {
      setNtfsData(DATA);
    }
  };
  const NotFounded = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>No NFTs found.</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome headersearch={searchHandler} />
      {!NtfsData.length ? (
        <NotFounded />
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={NtfsData}
            renderItem={({ item }) => <NFTCard NFTData={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 15,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
