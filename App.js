import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTabs from "./Navigation/MainTabs";

export default function App() {
  const [fontsLoaded] = useFonts({
    Responsible: require("./assets/fonts/Responsible.otf"),
    RobotoCondensed: require("./assets/fonts/RobotoCondensed-ExtraBold.ttf"),
    SourGummy: require("./assets/fonts/SourGummy-VariableFont_wdth,wght.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
   <NavigationContainer>
    <StatusBar style="light" animated={true} />
    <MainTabs/>
   </NavigationContainer>
  );
}


