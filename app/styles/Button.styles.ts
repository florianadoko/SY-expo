import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    borderRadius: 56,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 16, // Adjust spacing between buttons
  },
  secondaryButton: {
    width: 345,
    height: 56,
    borderRadius: 56,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 8, // Add gap between primary & secondary button
  },
  touchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0D71C9",
  },
});
