import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WalletScreen from "./src/screens/WalletScreen";
import { useState } from "react";
import SwapScreen from "./src/screens/SwapScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>("wallet");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safe}>
        {activeScreen === "wallet" ? <WalletScreen /> : <SwapScreen />}

        <View style={s.tabBar}>
          <TouchableOpacity
            style={s.tab}
            onPress={() => setActiveScreen("wallet")}
          >
            <Ionicons
              name={activeScreen === "wallet" ? "wallet" : "wallet-outline"}
              size={24}
              color={activeScreen === "wallet" ? "#14F195" : "#6B7280"}
            />
            <Text
              style={[s.tabLabel, activeScreen === "wallet" && s.activeTab]}
            >
              Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.tab}
            onPress={() => setActiveScreen("swap")}
          >
            <Ionicons
              name={
                activeScreen === "swap"
                  ? "swap-horizontal"
                  : "swap-horizontal-outline"
              }
              size={24}
              color={activeScreen === "swap" ? "#14F195" : "#6B7280"}
            />
            <Text style={[s.tabLabel, activeScreen === "swap" && s.activeTab]}>
              Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#16161D",
    borderTopWidth: 1,
    borderTopColor: "#2A2A35",
    paddingBottom: 8,
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  tabLabel: {
    color: "#6B7280",
    fontSize: 12,
  },
  activeTab: {
    color: "#14F195",
  },
});
