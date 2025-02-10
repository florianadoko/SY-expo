import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import { BlurView } from "expo-blur";
import { countries, Country } from "../utils/countryData";
import { styles } from "./../styles/CountryCode.styles";
import { searchIcon } from "@/images/SearchIcon";
import { SvgXml } from "react-native-svg";
import Modal from "./Modal";

interface CountryCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (code: string) => void;
}

// Define a union type for a country or a separator.
type CountryOrSeparator = Country | { separator: true };

const CountryCodeModal: React.FC<CountryCodeModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  // Filter the countries based on the search query.
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );

  // If no search query is entered, show prioritized countries (in a fixed order)
  // then a separator, then the rest sorted alphabetically.
  let sortedCountries: CountryOrSeparator[];
  if (searchQuery.trim() === "") {
    const prioritizedOrder = [
      "United Kingdom",
      "Ireland",
      "United States",
      "Australia", 
    ];
    const prioritized = filteredCountries
      .filter((c) => prioritizedOrder.includes(c.name))
      .sort(
        (a, b) =>
          prioritizedOrder.indexOf(a.name) - prioritizedOrder.indexOf(b.name)
      );
    const others = filteredCountries
      .filter((c) => !prioritizedOrder.includes(c.name))
      .sort((a, b) => a.name.localeCompare(b.name));

    sortedCountries =
      prioritized.length && others.length
        ? [...prioritized, { separator: true }, ...others]
        : [...prioritized, ...others];
  } else {
    // When searching, simply sort alphabetically.
    sortedCountries = filteredCountries.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      showBackdrop
      hideCloseButton
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.modalContainer}>
          {/* Fixed Search Bar with a Blur Background */}
          <BlurView intensity={50} tint="light" style={styles.fixedSearchBar}>
            <View style={styles.searchRow}>
              <View
                style={[
                  styles.searchContainer,
                  isFocused && styles.searchFocused,
                ]}
              >
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholderTextColor="#9CA3AF"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  keyboardType="default"
                />
                <SvgXml
                  xml={searchIcon}
                  width="35"
                  height="35"
                  style={styles.searchIcon}
                />
              </View>

              {/* Close Button */}
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

          {/* Country List */}
          <Animated.FlatList
            data={sortedCountries}
            keyExtractor={(item, index) =>
              "separator" in item ? `separator-${index}` : `${item.code}-${index}`
            }
            // Optional: For web, you can add a custom scroll event if needed.
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
            )}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingTop: 80 }} // Leave space for the fixed search bar
            renderItem={({ item }) => {
              // Render a separator if the item is a separator.
              if ("separator" in item) {
                return <View style={styles.separator} />;
              }
              // Otherwise, render the country.
              return (
                <Pressable
                  style={({ pressed }) => [
                    styles.countryItem,
                    pressed && styles.countryItemPressed,
                  ]}
                  onPress={() => onSelect(item.code)}
                >
                  <View style={styles.flagContainer}>
                    <Text style={styles.flagText}>{item.flag}</Text>
                  </View>
                  <Text style={styles.countryText}>{`${item.code} ${item.name}`}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CountryCodeModal;
