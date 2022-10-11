import { StyleSheet, Text, View } from "react-native";

export default function Deposit() {
  return (
    <View style={styles.container}>
      <Text>Deposit</Text>
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
