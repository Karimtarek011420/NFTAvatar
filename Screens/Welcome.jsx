import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useAnimatedValue,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { DATA } from "../constants/data";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  const Handelpress = () => {
    navigation.navigate("Home");
  };
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 150, y: 150 })
  ).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const TextAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    imagesAnimationHandler(), TextAnimationHandler();
  }, [imagesAnimationHandler, TextAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image
            style={styles.image}
            source={require("../assets/images/nft06.jpg")}
          />
        </View>
        <View style={[styles.imageCard, { top: SIZES.large + 20 }]}>
          <Image
            style={styles.image}
            source={require("../assets/images/nft08.jpg")}
          />
        </View>
        <View style={styles.imageCard}>
          <Image
            style={styles.image}
            source={require("../assets/images/nft04.jpg")}
          />
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.textContainer, { opacity: fadeTextAnimation }]}
      >
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <View style={{ borderRadius: 60, fontFamily: FONTS.regular , cursor:"pointer" }}>
        <Button
          onPress={Handelpress}
          title="Get Started"
          color={COLORS.second}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    top: -SIZES.medium,
    flexDirection: "row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    margin: SIZES.large,
    padding: SIZES.large,
    marginVertical: SIZES.xLarge + 12,
  },
  mainText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subText: {
    fontFamily: FONTS.medium,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  },
});
