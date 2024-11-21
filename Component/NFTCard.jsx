import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import NTFImage from "./NTFImage";
import NTFAvater from "./NTFAvater";
import NTFTitle from "./NTFTitle";
import INfoInfo from "./INfoInfo";
import { useNavigation } from "@react-navigation/native";

export default function NFTCard({ NFTData }) {
  const navigation = useNavigation();
  const heandeldatils = () => {
    navigation.navigate("Datilas", { NFTData });
  };
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={heandeldatils}>
          <NTFImage image={NFTData.image} style={styles.imageStyles} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NTFAvater avaters={NFTData.avatars} />
        </View>
        <View style={styles.cardBottom}>
          <NTFTitle
            name={NFTData.name}
            creator={NFTData.creator}
            date={NFTData.date}
          />
        </View>
        <View style={{ marginTop: SIZES.small + 3 }}>
          <INfoInfo
            comments={NFTData.comments}
            price={NFTData.price}
            views={NFTData.views}
            love
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: { width: "100%", padding: SIZES.medium },
  imageStyles: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
});
