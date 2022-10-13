import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../store/store";

export default function Profile() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TextInput value={name} onChangeText={setName} style={{ width: 200 }} />
      <Button
        title="Spara ditt namn"
        onPress={() => dispatch({ type: "profile/setname", payload: name })}
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
