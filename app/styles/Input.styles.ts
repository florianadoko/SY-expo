import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#021626",
    marginBottom: 4,
  },
  input: {
    width: "100%",
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 56,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    fontSize: 16,
    color: "#021626",
  },
  inputFocused: {
    borderColor: "#0D71C9", 
  },
  inputError: {
    borderColor: "#F23148", 
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    color: "#F23148",
    marginLeft: 6, 
  },
});
