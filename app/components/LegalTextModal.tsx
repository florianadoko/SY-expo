import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Modal from "./Modal";

interface LegalTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  textArray: string[];
}

const LegalTextModal: React.FC<LegalTextModalProps> = ({
  isOpen,
  onClose,
  title,
  textArray,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} fullScreen showBackdrop hideCloseButton>
      <View style={styles.modalContainer}>
        {/* Header with Title and Close Button */}
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.content}>
          {textArray.map((para, index) => (
            <Text key={index} style={styles.paragraph}>
              {para}
            </Text>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#021626",
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 18,
    color: "#666",
  },
  content: {
    paddingBottom: 20,
  },
  paragraph: {
    marginBottom: 10,
    fontSize: 14,
    color: "#021626",
    textAlign: "left",
  },
});

export default LegalTextModal;
