import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { countries } from "../utils/countryData";
import { styles } from "./../styles/CountryCode.styles";
import { searchIcon } from "@/images/SearchIcon";
import { SvgXml } from "react-native-svg";
import Modal from "./Modal";

interface CountryCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (code: string) => void;
}

const CountryCodeModal: React.FC<CountryCodeModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Filter country codes based on search input
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      fullScreen
      showBackdrop
      hideCloseButton
    >
      {/* Wrap modal content in a KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.modalContainer}>
          {/* 🔍 Search Bar Container */}
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
                keyboardType="numeric"
              />
              <SvgXml
                xml={searchIcon}
                width="35"
                height="35"
                style={styles.searchIcon}
              />
            </View>

            {/*  Close Button */}
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Country List */}
          <FlatList
            data={filteredCountries}
            keyExtractor={(item, index) => `${item.code}-${index}`}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
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
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CountryCodeModal;
