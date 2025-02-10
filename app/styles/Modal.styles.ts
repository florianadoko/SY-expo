import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "90%",
      maxHeight: "80%",
      backgroundColor: "white",
      borderRadius: 8,
      padding: 20,
    },
  });
  