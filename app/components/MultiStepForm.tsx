import React, { useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useFormStore } from "@/store/useFormStore";
import StepOne from "../features/StepOne";
import StepTwo from "../features/StepTwo";
import SuccessScreen from "../features/SuccessScreen";
import Layout from "../components/Layout";
import "nativewind";

/**
 * MultiStepForm Component (React Native)
 */
const MultiStepForm = () => {
  const { step, restartForm } = useFormStore();

  // ✅ Define missing state variables
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);   // ✅ Add this
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // ✅ Add this
  console.log("Current step:", step);

  return (
    <Layout isModalOpen={isCountryModalOpen} hideHeader={step === 3}>
      <View style={styles.container}>
        {/* Step One */}
        {step === 1 && (
          <Animated.View style={[styles.step, step === 1 && styles.activeStep]}>
            <StepOne />
          </Animated.View>
        )}

        {/* Step Two */}
        {step === 2 && (
          <Animated.View style={[styles.step, step === 2 && styles.activeStep]}>
            <StepTwo 
              isModalOpen={isCountryModalOpen}
              setIsModalOpen={setIsCountryModalOpen}
              isTermsOpen={isTermsOpen}  // ✅ Pass the correct state
              setIsTermsOpen={setIsTermsOpen} // ✅ Pass the correct setter function
              isPrivacyOpen={isPrivacyOpen}  // ✅ Pass the correct state
              setIsPrivacyOpen={setIsPrivacyOpen} // ✅ Pass the correct setter function
            />
          </Animated.View>
        )}

        {/* Success Screen */}
        {step === 3 && (
          <Animated.View style={[styles.step, step === 3 && styles.activeStep]}>
            <SuccessScreen onRestart={restartForm} />
          </Animated.View>
        )}
      </View>
    </Layout>
    
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  step: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    transform: [{ translateX: 500 }],
  },
  activeStep: {
    opacity: 1,
    transform: [{ translateX: 0 }],
  },
});

export default MultiStepForm;
