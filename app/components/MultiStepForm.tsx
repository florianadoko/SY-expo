import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useFormStore } from "@/store/useFormStore";
import StepOne from "../features/StepOne";
import StepTwo from "../features/StepTwo";
import SuccessScreen from "../features/SuccessScreen";
import Layout from "./Layout";

const MultiStepForm = () => {
  const { step, reset } = useFormStore();
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // If moving to step 3, show it without animation
    if (step === 3) {
      animationValue.setValue(1);
    } else {
      animationValue.setValue(0);
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [step, animationValue]);

  let content;
  if (step === 1) {
    content = <StepOne />;
  } else if (step === 2) {
    content = <StepTwo />;
  } else {
    content = <SuccessScreen onRestart={reset} />;
  }

  const animatedStyle = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0], // Slide in from 50px to the right
        }),
      },
    ],
    opacity: animationValue, // Fade in effect
  };

  return (
    // Pass hideHeader as true when step is 3 to hide logo and step indicators
    <Layout hideHeader={step === 3}>
      <View style={styles.container}>
        <Animated.View style={[styles.animatedContainer, animatedStyle]}>
          {content}
        </Animated.View>
      </View>
    </Layout>
  );
};

export default MultiStepForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedContainer: {
    flex: 1,
  },
});
