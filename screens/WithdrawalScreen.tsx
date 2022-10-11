import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch } from "../store/store";

export default function Withdrawal() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Withdrawal</Text>
      <Button
        title="Ta ut pengar"
        onPress={() => dispatch({ type: "bank/withdrawal", payload: 50 })}
      />
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
