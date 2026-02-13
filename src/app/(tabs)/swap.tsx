import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const SwapScreen = () => {
  const [fromAmount, setFromAmount] = useState("100");
  const [toAmount, setToAmount] = useState("0.28014");
  const [fromToken, setFromToken] = useState("USDC");
  const [toToken, setToToken] = useState("SOL");

  const swapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleSwap = () => {
    if (!fromAmount) return Alert.alert("Enter an amount");
    Alert.alert(
      "Swap",
      `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView style={s.scroll}>
        <Text style={s.title}>Swap Tokens</Text>

        <View style={s.cardContainer}>
          <View style={[s.card, { marginBottom: 10 }]}>
            <View style={s.rowBetween}>
              <View style={s.rowBetween}>
                <TouchableOpacity style={s.tokenSelector}>
                  <View style={[s.tokenIcon, { backgroundColor: "#9945FF" }]}>
                    <Text style={s.tokenIconText}>$</Text>
                  </View>
                  <Text style={s.tokenName}>{fromToken}</Text>
                  <Ionicons name="chevron-down" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={s.amountInput}
                value={fromAmount}
                onChangeText={setFromAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#666"
              />
            </View>
            <View style={s.cardFooter}>
              <Text style={s.balanceText}>Balance: 0.0661 {fromToken}</Text>
              <Text style={s.usdText}>$499.749</Text>
            </View>
          </View>

          <View style={s.arrowContainer}>
            <TouchableOpacity style={s.swapArrow} onPress={swapTokens}>
              <Ionicons name="swap-vertical" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={[s.card, { marginTop: 10 }]}>
            <View style={s.rowBetween}>
              <View style={s.rowBetween}>
                <TouchableOpacity style={s.tokenSelector}>
                  <View style={[s.tokenIcon, { backgroundColor: "#2775CA" }]}>
                    <Text style={s.tokenIconText}>S</Text>
                  </View>
                  <Text style={s.tokenName}>{toToken}</Text>
                  <Ionicons name="chevron-down" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={s.amountInput}
                value={toAmount}
                onChangeText={setToAmount}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#666"
              />
            </View>
            <View style={s.cardFooter}>
              <Text style={s.balanceText}>Balance: 250 {toToken}</Text>
              <Text style={s.usdText}>$499.419</Text>
            </View>
          </View>
          {/* <View style={s.cenSwapBtnCont}>
          <Ionicons name="arrow-down" size={20} color={"#fff"} />
        </View> */}
        </View>

        <TouchableOpacity style={s.swapBtn} onPress={handleSwap}>
          <Text style={s.swapBtnText}>Swap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwapScreen;

const s = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#fff",
    paddingTop: 34,
  },
  cardContainer: {
    position: "relative",
    paddingTop: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: "#1E1E1E",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    // justifyContent: "center",
    // alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tokenSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingLeft: 8,
    paddingRight: 12,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 6,
  },
  tokenIconText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tokenName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  tokenIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  amountInput: {
    fontSize: 40,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "right",
    flex: 1,
    marginLeft: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  balanceText: {
    fontSize: 14,
    color: "#666666",
  },
  usdText: {
    fontSize: 14,
    color: "#666666",
  },
  arrowContainer: {
    alignItems: "center",
    marginVertical: -22,
    zIndex: 10,
  },
  swapArrow: {
    backgroundColor: "#0D0D12",
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#0D0D12",
  },
  swapBtn: {
    backgroundColor: "#14F195",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 24,
  },
  swapBtnText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
  },
  cenSwapBtnCont: {
    height: 32,
    width: 32,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
