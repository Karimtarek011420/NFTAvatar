import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function NTFAvater({ avaters }) {
  return (
    <View style={styles.container}>
      {avaters.map((avater) => (
        <Image source={avater.image} key={avater.id} style={styles.avatar} resizeMode="contain" />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingHorizontal: 5 },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: -5,
    borderRadius: 40,
  },
});
