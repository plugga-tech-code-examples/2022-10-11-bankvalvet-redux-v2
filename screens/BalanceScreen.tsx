import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../store/store";

export default function Balance() {
  const balance = useAppSelector((state) => state.bank.balance);
  const transactions = useAppSelector((state) => state.bank.transactions);
  return (
    <View style={styles.container}>
      <Text>Balance: {balance}</Text>
      <Text>Transactions:</Text>
      {transactions.map((t, i) => (
        <Text key={i}>{t}</Text>
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
