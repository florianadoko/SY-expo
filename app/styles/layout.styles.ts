import { StyleSheet } from "react-native";

export const layoutStyles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "column", // Stack items vertically
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40, // Lower the whole section
  },
  backButton: {
    position: "absolute",
    left: 7,
    top: 20, // Adjust position to align correctly
    width: 14,
    height: 14,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10, // Adds spacing between logo and step indicator
  },
  stepIndicatorContainer: {
    marginTop: 10, // Lower the step indicator
  },
});
