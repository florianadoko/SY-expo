import { StyleSheet } from "react-native";

export const stepIndicatorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8, // Moved it slightly down
    marginBottom: 24, // Ensures enough spacing for next section
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  activeStep: {
    backgroundColor: "#0D71C9",
  },
  inactiveStep: {
    backgroundColor: "#F0F0F0",
  },
  stepText: {
    fontWeight: "600",
    fontSize: 14,
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "rgba(2, 22, 38, 0.12)", // Figma color for inactive step numbers
  },
  divider: {
    width: 4,
    height: 4,
    backgroundColor: "rgba(2, 22, 38, 0.12)",
    borderRadius: 2,
    marginHorizontal: 4,
  },
});
