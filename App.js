import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen.jsx";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

// const loadFonts = async () => {
//   await Font.AppLoading({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/PhotoBG.jpg")}
        style={styles.image}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
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
