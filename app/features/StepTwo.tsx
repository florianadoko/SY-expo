import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import { SvgXml } from "react-native-svg";
import { useFormStore } from "@/store/useFormStore";
import CountryCodeModal from "../components/CountryCodeModal";
import LegalTextModal from "../components/LegalTextModal"; 
import { validatePhoneNumber } from "../utils/validation";
import { stepTwoStyles as styles } from "./../styles/StepTwo.styles";
import { warningIconSvg } from "../utils/svgs";
import { termsAndConditions, privacyPolicy } from "../utils/legalTexts";

const StepTwo: React.FC = () => {
  const { formData, setFormData, nextStep } = useFormStore();
  const [errors, setErrors] = useState<{ phoneNumber?: string }>({});
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"terms" | "privacy" | null>(null);

  // Handle form submission.
  const handleSubmit = () => {
    const newErrors = validatePhoneNumber(formData.phoneNumber);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Heading */}
        <Text style={styles.heading}>Let’s validate your number</Text>

        {/* Phone Number Input */}
        <View style={styles.inputWrapper}>
          <TouchableOpacity
            style={[styles.countryButton, errors.phoneNumber && styles.errorBorder]}
            onPress={() => setIsCountryModalOpen(true)}
          >
            <Text style={styles.countryText}>{formData.countryCode} ▼</Text>
            
          </TouchableOpacity>

          <TextInput
            style={[styles.input, errors.phoneNumber && styles.errorBorder]}
            placeholder="07890 123456"
            placeholderTextColor="#9CA3AF"
            value={formData.phoneNumber}
            onChangeText={(text) => setFormData({ phoneNumber: text })}
            keyboardType="numeric"
          />
        </View>

        {/* Error Message */}
        {errors.phoneNumber && (
          <View style={styles.errorContainer}>
            <SvgXml xml={warningIconSvg} width="14" height="14" />
            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
          </View>
        )}

        {/* Terms & Privacy */}
        <Text style={styles.termsText}>
          By clicking ‘Continue’ you confirm that you agree to our{" "}
          <Text style={styles.linkText} onPress={() => setLegalModalType("terms")}>
            terms and conditions
          </Text>{" "}
          and{" "}
          <Text style={styles.linkText} onPress={() => setLegalModalType("privacy")}>
            privacy policy
          </Text>
        </Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Country Code Modal */}
      {isCountryModalOpen && (
        <CountryCodeModal
          isOpen={isCountryModalOpen}
          onClose={() => setIsCountryModalOpen(false)}
          onSelect={(code) => {
            setFormData({ countryCode: code });
            setIsCountryModalOpen(false);
          }}
        />
      )}

      {/* Legal Text Modal */}
      {legalModalType && (
        <LegalTextModal
          isOpen={true}
          onClose={() => setLegalModalType(null)}
          title={legalModalType === "terms" ? "Terms and Conditions" : "Privacy Policy"}
          textArray={legalModalType === "terms" ? termsAndConditions : privacyPolicy}
        />
      )}
    </>
  );
};

export default StepTwo;
