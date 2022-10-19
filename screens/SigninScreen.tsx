import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/store";
import { signin } from "../store/userSlice";

export default function Signin() {
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.margin}>Signin</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.margin}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.margin}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Button
        disabled={isLoading}
        title="Signin"
        onPress={() => dispatch(signin({ username, password }))}
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
  margin: {
    marginBottom: 20,
  },
  error: {
    marginVertical: 8,
    color: "red",
  },
});
