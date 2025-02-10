import React from "react";
import { View, Text } from "react-native";
import { useFormStore } from "@/store/useFormStore";
import { stepIndicatorStyles } from "./../styles/StepIndicator.styles";

const StepIndicator = () => {
  const { step } = useFormStore();

  return (
    <View style={stepIndicatorStyles.container}>
      {/* Step 1 Indicator */}
      <View style={[stepIndicatorStyles.stepCircle, step === 1 ? stepIndicatorStyles.activeStep : stepIndicatorStyles.inactiveStep]}>
        <Text style={[stepIndicatorStyles.stepText, step === 1 ? stepIndicatorStyles.activeText : stepIndicatorStyles.inactiveText]}>1</Text>
      </View>

      {/* Divider */}
      <View style={stepIndicatorStyles.divider} />

      {/* Step 2 Indicator */}
      <View style={[stepIndicatorStyles.stepCircle, step === 2 ? stepIndicatorStyles.activeStep : stepIndicatorStyles.inactiveStep]}>
        <Text style={[stepIndicatorStyles.stepText, step === 2 ? stepIndicatorStyles.activeText : stepIndicatorStyles.inactiveText]}>2</Text>
      </View>
    </View>
  );
};

export default StepIndicator;
