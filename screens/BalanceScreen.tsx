import { StyleSheet, Text, View } from "react-native";

export default function Balance() {
  return (
    <View style={styles.container}>
      <Text>Balance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
