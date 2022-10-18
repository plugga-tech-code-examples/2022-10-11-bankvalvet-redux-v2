import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { setName } from "../store/profileSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function Profile() {
  const profile = useAppSelector((state) => state.profile);
  const [name, setLocalName] = useState(profile.name);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TextInput value={name} onChangeText={setLocalName} style={{ width: 200 }} />
      <Button title="Spara ditt namn" onPress={() => dispatch(setName(name))} />
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
