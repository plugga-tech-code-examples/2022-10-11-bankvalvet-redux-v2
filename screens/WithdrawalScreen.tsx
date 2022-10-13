import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { withdrawal } from "../store/bankSlice";
import { useAppDispatch } from "../store/store";

export default function Withdrawal() {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Deposit</Text>
      <Button title="Ta ut 100kr" onPress={() => dispatch(withdrawal(100))} />
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
