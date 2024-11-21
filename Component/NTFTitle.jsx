import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import Entypo from '@expo/vector-icons/Entypo';
export default function NTFTitle({ name, creator, date }) {
  return (
    <View>
      <View>
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View  style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SIZES.small,
          }}>
          <Text style={[styles.textCreator, {paddingLift:5}]  }>{creator}</Text>
          <Entypo name="star-outlined" size={18} color="yellow" />
          <Entypo name="star-outlined" size={18} color="yellow" />
        </View>
        <View>
          <Text style={styles.textDate}>{date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textName: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },
  textDate: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});
