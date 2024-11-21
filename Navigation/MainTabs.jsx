import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../Screens/Welcome";
import Home from "../Screens/Home";
import Datilas from "../Screens/Datilas";

export default function MainTabs() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Datilas" component={Datilas} />
      </Navigator>
    </>
  );
}
