import { StyleSheet, Text, View } from "react-native";
import { selectBalance, selectTranscations } from "../store/bank";
import { selectProfile } from "../store/profile/profileSelectors";
import { useAppSelector } from "../store/store";

export default function Balance() {
  const balance = useAppSelector(selectBalance);
  const transactions = useAppSelector(selectTranscations);
  const { name, savingsGoal } = useAppSelector(selectProfile);

  return (
    <View style={styles.container}>
      <Text>Welcome {name}</Text>
      <Text>Balance: {balance}</Text>
      <Text>You need to save {savingsGoal - balance} to reach your goal.</Text>
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
