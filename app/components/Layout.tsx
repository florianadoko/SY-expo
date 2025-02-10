import React from "react";
import { View, TouchableOpacity } from "react-native";
import StepIndicator from "./StepIndicator";
import { useFormStore } from "@/store/useFormStore";
import { SvgXml } from "react-native-svg";
import { backIconSvg, logoSvg } from "../utils/svgs";
import { layoutStyles } from "../styles/layout.styles";

/**
 * Layout Component
 * ----------------
 * Provides a common layout with an optional header.
 */
const Layout: React.FC<{ children: React.ReactNode; isModalOpen?: boolean; hideHeader?: boolean }> = ({
  children,
  isModalOpen = false,
  hideHeader = false,
}) => {
  const { step, prevStep } = useFormStore();

  return (
    <View style={layoutStyles.container}>
      {!hideHeader && !isModalOpen && (
        <View style={layoutStyles.headerContainer}>
          {/* Back Button */}
          {step > 1 && (
            <TouchableOpacity onPress={prevStep} style={layoutStyles.backButton}>
              <SvgXml xml={backIconSvg} width="14" height="14" />
            </TouchableOpacity>
          )}

          {/* Logo */}
          <View style={layoutStyles.logoContainer}>
            <SvgXml xml={logoSvg} width="56" height="56" />
          </View>
        </View>
      )}

      {/* Step Indicator */}
      {!hideHeader && !isModalOpen && <StepIndicator />}

      {/* Page Content */}
      {children}
    </View>
  );
};

export default Layout;
