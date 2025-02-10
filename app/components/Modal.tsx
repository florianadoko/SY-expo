import React, { FC, ReactNode } from "react";
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

interface ModalProps {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  showBackdrop?: boolean;
  hideCloseButton?: boolean;
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  fullScreen = false,
  showBackdrop = true,
  hideCloseButton = false,
}) => {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
    >
      {/* Wrap in a full-screen KeyboardAvoidingView */}
      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Overlay to cover the entire screen */}
        <View style={styles.overlay}>
          <View style={fullScreen ? styles.fullScreenModal : styles.modalContainer}>
            {/* Optional Close Button */}
            {!hideCloseButton && (
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            )}
            {/* Content container */}
            <View style={[styles.content, fullScreen && { flex: 1, maxHeight: "100%" }]}>
              {children}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreenModal: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: 20,
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
    zIndex: 1,
  },
  closeText: {
    fontSize: 24,
    color: "gray",
  },
  content: {
    marginTop: 10,
    maxHeight: 400,
  },
});
