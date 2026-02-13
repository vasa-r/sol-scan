import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={s.container}>
      <ScrollView style={s.scroll}>
        <Text style={s.title}>Settings</Text>

        <View style={s.photoContainer}>
          <Ionicons name="person" size={48} color="#f0" />
        </View>

        <Text style={s.name}>Vasanth</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

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
  },
  photoContainer: {
    borderColor: "#1E1E1E",
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
    alignSelf: "center",
    borderRadius: 60,
    marginTop: 24,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 16,
    textAlign: "center",
  },
});
