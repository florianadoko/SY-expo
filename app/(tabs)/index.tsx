// 'use client';
// import "../styles/globals.css";
// import { interFont, ralewayFont } from "../styles/fonts.css";
// import MultiStepForm from "../pages";

// const Home = () => {
//   return <MultiStepForm />;
// };

// export default Home;
// App.tsx (or your root component)
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading"; // Shows a splash screen while fonts load
import * as Font from "expo-font";
import MultiStepForm from "../pages"; // Adjust the import as needed

const loadFonts = async () => {
  await Font.loadAsync({
    // Note: the keys here ("Inter", "Raleway") should match the names you want to use in your styles.
    Inter: require("./../../public/fonts/Inter-VariableFont_opsz,wght.ttf"),
    Raleway: require("./../../public/fonts/Raleway-VariableFont_wght.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load fonts when the component mounts
  useEffect(() => {
    (async () => {
      await loadFonts();
      setFontsLoaded(true);
    })();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* Your app now has access to the custom fonts on native devices */}
      <MultiStepForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
