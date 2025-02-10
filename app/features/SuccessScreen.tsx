import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import { successIconSvg } from "../utils/svgs";

// Define props properly
interface SuccessScreenProps {
  onRestart: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onRestart }) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      {/* Success Icon */}
      <SvgXml xml={successIconSvg} width={120} height={120} />

      {/* Success Message */}
      <Text style={styles.heading}>Congratulations</Text>
      <Text style={styles.subText}>Welcome to your very own 25</Text>

      {/* Restart Button */}
      <TouchableOpacity onPress={onRestart}>
        <Text style={styles.restartText}>Back to start</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "white",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 20, // ✅ Prevents too much spacing above
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center", 
    marginVertical: 10,
  },
  subText: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 10,
    textAlign: "center", 
  },
  restartText: {
    color: "#0D71C9",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
});

export default SuccessScreen;
