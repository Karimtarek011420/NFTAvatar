import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import NTFImage from "../Component/NTFImage";
import AntDesign from "@expo/vector-icons/AntDesign";
import NTFAvater from "../Component/NTFAvater";
import NTFTitle from "../Component/NTFTitle";
import INfoInfo from "../Component/INfoInfo";

export default function Datilas({ route, navigation }) {
  const { NFTData } = route.params;
  const hendelCanacel = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image source={NFTData.image} style={styles.imageStyles} />
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={styles.buttonArrow}
          onPress={hendelCanacel}
        />
        <AntDesign
          name="heart"
          size={24}
          color="white"
          style={styles.buttonHeart}
        />
        <View style={{ marginVertical: -SIZES.large }}>
          <NTFAvater avaters={NFTData.avatars} />
        </View>
        <View style={{marginVertical:SIZES.xLarge,padding:10}}>
        <NTFTitle
          name={NFTData.name}
          creator={NFTData.creator}
          date={NFTData.date}
        />
        </View>
        <View style={{paddingHorizontal:5}}>
        <INfoInfo
          comments={NFTData.comments}
          price={NFTData.price}
          views={NFTData.views}
        />
        </View>
        <View style={{padding:10}}>
          <View style={styles.datails}> 
            <Text style={{color:COLORS.white}}>Address</Text>
            <Text style={{color:COLORS.white}}>{NFTData.address}</Text>
          </View>
          <View style={styles.datails}> 
            <Text style={{color:COLORS.white}}>tokenId</Text>
            <Text style={{color:COLORS.white}}>{NFTData.tokenId}</Text>
          </View>
          <View style={styles.datails}> 
            <Text style={{color:COLORS.white}}>tokenSt</Text>
            <Text style={{color:COLORS.white}}>{NFTData.tokenSt}</Text>
          </View>
          <View style={[styles.datails]}> 
            <Text style={{color:COLORS.white}}>blockchain</Text>
            <Text style={{color:COLORS.white}}>{NFTData.blockchain}</Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    position: "relative",
    paddingTop: StatusBar.currentHeight + 20,
  },
  datails:{
    flexDirection:'row' , justifyContent:'space-between' , paddingHorizontal:20,backgroundColor:COLORS.cardBg , paddingVertical:5,
    color: COLORS.white, marginVertical:5  },
  buttonArrow: {
    position: "absolute",
    left: 10,
    padding: 10,
    borderRadius: 40,
  },
  buttonHeart: {
    position: "absolute",
    right: 10,
    padding: 10,
    borderRadius: 40,
  },

  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
