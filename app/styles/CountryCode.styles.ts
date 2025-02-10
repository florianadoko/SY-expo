import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: "100%",
    height: "100%",
    position: "relative",
    paddingTop:60
  },
  fixedSearchBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingTop: 60,
    backgroundColor:"white",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#0D71C9",
    borderRadius: 25,
    paddingHorizontal: 12,
    height: 45,
    flex: 1,
    borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    backgroundColor: "rgba(2, 22, 38, 0.04)",
  },
  countryText: {
    fontSize: 16,
    color: "#021626",
  },
  flagContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  flagText: {
    fontSize: 40,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
});
