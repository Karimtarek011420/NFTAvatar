import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function INfoInfo({ views, comments, price, love }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
      <Feather name="eye" size={20} color={COLORS.white} />
        <Text style={styles.text}>Views: {views}</Text>
      </View>
      <View style={styles.wrapper}>
      <MaterialCommunityIcons
          name="comment-text-outline"
          size={17}
          color={COLORS.white}
        />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white" />
        <Text style={styles.text}>{price}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.second,
      width:100,
      borderRadius: SIZES.xLarge,
      paddingVertical: 3,
      gap: 4,
    },
    text: {
      fontFamily: FONTS.medium,
      fontSize: SIZES.medium,
      color: COLORS.white,
    },
    buttonHeart: {
      backgroundColor: COLORS.bg,
      padding: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: COLORS.second,
    },
  });
