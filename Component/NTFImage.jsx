import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function NTFImage({ image,style}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={image} style={style} />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
      },
})