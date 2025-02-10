import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useFormStore } from "@/store/useFormStore";
import { validateStepOne } from "../utils/validation";
import { stepOneStyles } from "../styles/StepOne.styles";

const StepOne = () => {
  const { formData, setFormData, nextStep } = useFormStore();
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); 
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSubmit = () => {
    const validationErrors = validateStepOne(formData.firstName, formData.lastName);
    setErrors(validationErrors || {});

    if (Object.keys(validationErrors || {}).length === 0) {
      nextStep();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            isKeyboardVisible ? styles.scrollWithKeyboard : styles.scrollWithoutKeyboard,
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={stepOneStyles.title}>Some introductions</Text>

          <Input
            label="First name"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={(text) => setFormData({ firstName: text })}
            error={errors.firstName ? String(errors.firstName) : undefined}
          />

          <Input
            label="Last name"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={(text) => setFormData({ lastName: text })}
            error={errors.lastName}
          />

          <Button text="Continue" onPress={handleSubmit} />

          <Button
            text="Already have an account?"
            onPress={() => console.log("Navigate to login")}
            type="secondary"
          />

          <Text style={stepOneStyles.versionText}>Version 0.1</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  scrollWithoutKeyboard: {
    // justifyContent: "center", 
  },
  scrollWithKeyboard: {
    justifyContent: "flex-start", 
  },
});
