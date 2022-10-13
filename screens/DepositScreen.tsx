import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { deposit } from "../store/bankSlice";
import { useAppDispatch } from "../store/store";

export default function Deposit() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Deposit</Text>
      <Button title="Sätt in 500kr" onPress={() => dispatch(deposit(500))} />
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
