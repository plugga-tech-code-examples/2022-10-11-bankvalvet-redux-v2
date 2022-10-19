import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Balance from "../screens/BalanceScreen";
import Deposit from "../screens/DepositScreen";
import Profile from "../screens/ProfileScreen";
import Signin from "../screens/SigninScreen";
import Signup from "../screens/SignupScreen";
import Withdrawal from "../screens/WithdrawalScreen";
import { useAppSelector } from "../store/store";

type RootTabsParamList = {
  Signup: undefined;
  Signin: undefined;
  Balance: undefined;
  Withdrawal: undefined;
  Deposit: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function RootNavigator() {
  const user = useAppSelector((state) => state.user.user);
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        {!user ? (
          <>
            <Tabs.Screen
              name="Signup"
              component={Signup}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="signal" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="Signin"
              component={Signin}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="ab-testing" color={color} size={size} />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Tabs.Screen
              name="Balance"
              component={Balance}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="Withdrawal"
              component={Withdrawal}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bank-transfer-out" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="Deposit"
              component={Deposit}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bank-transfer-in" color={color} size={size} />
                ),
              }}
            />
            <Tabs.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="face-agent" color={color} size={size} />
                ),
              }}
            />
          </>
        )}
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
