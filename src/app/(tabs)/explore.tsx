import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const trending = [
  { symbol: "SOL", price: "$102.34", change: "+4.2%" },
  { symbol: "BONK", price: "$0.000012", change: "+12.1%" },
  { symbol: "JUP", price: "$0.82", change: "-2.4%" },
];

const txns = [
  { sig: "5h8...k3a", time: "2s ago" },
  { sig: "9sd...21x", time: "5s ago" },
  { sig: "asd...99p", time: "12s ago" },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView edges={["top"]} style={s.container}>
      <ScrollView style={s.scroll}>
        <Text style={s.title}>Explore</Text>

        <View style={s.searchBox}>
          <Ionicons name="search" size={18} color="#6B7280" />
          <TextInput
            placeholder="Search address, tx, token..."
            placeholderTextColor="#6B7280"
            style={s.searchInput}
          />
        </View>

        {/* Network stats */}
        <Text style={s.section}>Network</Text>

        <View style={s.statsRow}>
          <StatCard label="TPS" value="3,421" />
          <StatCard label="Slot" value="248M" />
          <StatCard label="Supply" value="574M" />
        </View>

        {/* Trending tokens */}
        <Text style={s.section}>Trending Tokens</Text>

        {trending.map((item) => (
          <View key={item.symbol} style={s.row}>
            <Text style={s.symbol}>{item.symbol}</Text>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={s.price}>{item.price}</Text>
              <Text
                style={{
                  color: item.change.includes("+") ? "#14F195" : "#EF4444",
                }}
              >
                {item.change}
              </Text>
            </View>
          </View>
        ))}

        {/* Recent transactions */}
        <Text style={s.section}>Recent Transactions</Text>

        {txns.map((item) => (
          <TouchableOpacity key={item.sig} style={s.row}>
            <Text style={s.sig}>{item.sig}</Text>
            <Text style={s.time}>{item.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={s.statCard}>
      <Text style={s.statValue}>{value}</Text>
      <Text style={s.statLabel}>{label}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
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
    marginBottom: 8,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16161D",
    padding: 14,
    borderRadius: 12,
    marginBottom: 24,
  },

  searchInput: {
    color: "#FFF",
    marginLeft: 10,
    flex: 1,
  },

  section: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    marginTop: 20,
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#16161D",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  statValue: {
    color: "#14F195",
    fontSize: 20,
    fontWeight: "700",
  },

  statLabel: {
    color: "#6B7280",
    marginTop: 4,
  },

  row: {
    backgroundColor: "#16161D",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  symbol: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    color: "#FFF",
  },

  sig: {
    color: "#14F195",
  },

  time: {
    color: "#6B7280",
  },
});
