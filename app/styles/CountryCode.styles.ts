import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white", // Full-screen white background
    paddingTop: 70,
    paddingHorizontal: 10,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1D5DB",
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 45,
    flex: 1,
    borderWidth: 2,
  },
  searchFocused: {
    borderColor: "#0D71C9",
    borderWidth: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
    paddingVertical: 10,
    // color: "#021626",
  },
  searchIcon: {
    marginRight: 8,
    tintColor: "#9CA3AF",
  },
  closeButton: {
    marginLeft: 12,
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    color: "#666",
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,

  },
  countryItemPressed: {
    backgroundColor: "rgba(2, 22, 38, 0.04)", // Background color on press (or hover on web)
  },
  countryText: {
    fontSize: 16,
    color: "#021626",
  },
  flagContainer: {
    width: 40, // Increased width
    height: 40, // Increased height
    borderRadius: 20, // Half of width/height for a perfect circle
    overflow: "hidden",
    backgroundColor: "white",
    marginRight: 12,
    alignItems: "center", // Center the flag horizontally
    justifyContent: "center", // Center the flag vertically
  },
  flagText: {
    fontSize: 40, // Increased font size to better fill the container
  },
});
