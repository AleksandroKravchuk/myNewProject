import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Input } from "./Screens/RegistrationScreen";
import React, { useState } from "react";
import { AppLoading } from "expo";

const loadFonts = async () => {
  await Font.AppLoading({
    "Roboto-Regular": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });
};
export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
        <Input />
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
