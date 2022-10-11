import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch } from "../store/store";

export default function Deposit() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Deposit</Text>
      <Button
        title="Sätt in pengar"
        onPress={() => dispatch({ type: "bank/deposit", payload: 500 })}
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
