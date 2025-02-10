import { StyleSheet } from "react-native";

export const stepTwoStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "#021626",
    width: 345,
    textAlign: "left", // Align to the left
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: 345,
    marginBottom: 8,
  },
  countryButton: {
    width: 100,
    height: 56,
    borderRadius: 56,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderWidth: 2,
    borderColor: "#D1D5DB",
  },
  countryText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#021626",
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 56,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width: 345,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#0D71C9",
    paddingVertical: 15,
    borderRadius: 56,
    alignItems: "center",
    width: 345,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorBorder: {
    borderColor: "red",
  },
  termsText: {
    fontSize: 14,
    color: "#021626",
    textAlign: "left",
    width: 345,
    marginTop: 8,
  },
  linkText: {
    color: "#0D71C9",
    fontWeight: "bold",
  },
  modalContent: {
    fontSize: 14,
    // color: "#021626",
    textAlign: "left",
  },
});
