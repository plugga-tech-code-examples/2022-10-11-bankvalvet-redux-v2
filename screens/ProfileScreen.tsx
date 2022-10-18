import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { setProfileName } from "../store/profile/profileActions";
import { selectProfile } from "../store/profile/profileSelectors";
import { useAppDispatch } from "../store/store";

export default function Profile() {
  const profile = useSelector(selectProfile);
  const [name, setName] = useState(profile.name);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TextInput value={name} onChangeText={setName} style={{ width: 200 }} />
      <Button title="Spara ditt namn" onPress={() => dispatch(setProfileName(name))} />
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
