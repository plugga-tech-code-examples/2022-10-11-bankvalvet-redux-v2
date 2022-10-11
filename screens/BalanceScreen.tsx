import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../store/store";

export default function Balance() {
  const balance = useAppSelector((state) => state.balance);
  const transactions = useAppSelector((state) => state.transactions);

  return (
    <View style={styles.container}>
      <Text>Balance: {balance}</Text>
      <Text>Transactions: </Text>
      {transactions.map((t) => (
        <Text>{t}</Text>
      ))}
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
