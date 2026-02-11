import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SwapScreen = () => {
  return <ScrollView style={s.scroll}></ScrollView>;
};

export default SwapScreen;

const s = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
});
