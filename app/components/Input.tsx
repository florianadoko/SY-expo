import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { inputStyles } from "../styles/Input.styles";
import WarningIcon from "@/images/WarningIcon";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      <Text style={inputStyles.label}>{label}</Text>

      {/* Input Field */}
      <TextInput
        style={[
          inputStyles.input,
          isFocused && !error ? inputStyles.inputFocused : {},
          error ? inputStyles.inputError : {},
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#9CA3AF"
      />

      {/* Error message with Warning Icon */}
      {error && (
        <View style={inputStyles.errorContainer}>
         <WarningIcon />
          <Text style={inputStyles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
