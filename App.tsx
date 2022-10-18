import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";
import RootNavigator from "./navigation/RootNavigator";
import { listenToBankChanges } from "./store/bankSlice";
import { store, useAppDispatch } from "./store/store";

function App() {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(listenToBankChanges());
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default function AppWrapper() {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
}
