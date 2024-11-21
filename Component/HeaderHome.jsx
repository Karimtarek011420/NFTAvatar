import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants/theme";
import avatar from "../assets/images/avatars/avatar03.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function HeaderHome({headersearch}) {
  return (
    <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <View>
            <Image source={avatar} style={{width:40,height:40, borderRadius:30}} resizeMode='contain'  />
          </View>
          <View style={{flexDirection:'row', gap:3 ,alignItems:'center'}}>
          <Text style={styles.userText}>Welcome, Karim Tarek</Text>
          <MaterialCommunityIcons
              name="check-decagram"
              size={24}
              color="white"
            />  
          </View>
      </View>
      <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color={COLORS.white} />
          <TextInput
            placeholder="Search by NFT name"
            placeholderTextColor={COLORS.white}
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={headersearch}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
  },
  userText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
});