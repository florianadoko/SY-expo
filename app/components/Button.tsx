import React, { useState } from "react";
import { TouchableOpacity, Text, Animated, View } from "react-native";
import { buttonStyles } from "../styles/Button.styles";

interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: "primary" | "secondary"; 
}

const Button: React.FC<ButtonProps> = ({ text, onPress, type = "primary" }) => {
  const [animatedValue] = useState(new Animated.Value(0));
  const handlePressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: type === "primary" ? ["#0D71C9", "#094B88"] : ["transparent", "#F6FAFE"],
  });
  
  return (
    <View style={type === "primary" ? buttonStyles.button : buttonStyles.secondaryButton}>
      <Animated.View style={{ backgroundColor, borderRadius: 56, width: "100%", height: "100%" }}>
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => {
            try {
              onPress && onPress();
            } catch (error) {
              console.error("Error on button press:", error);
            }
          }}
          activeOpacity={1}
          style={buttonStyles.touchable}
        >
          <Text style={type === "primary" ? buttonStyles.buttonText : buttonStyles.secondaryButtonText}>
            {text}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Button;
