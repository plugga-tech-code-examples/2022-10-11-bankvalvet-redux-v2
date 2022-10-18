import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Balance from "../screens/BalanceScreen";
import Deposit from "../screens/DepositScreen";
import Profile from "../screens/ProfileScreen";
import Withdrawal from "../screens/WithdrawalScreen";

type RootTabsParamList = {
  Balance: undefined;
  Withdrawal: undefined;
  Deposit: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<RootTabsParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
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
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
