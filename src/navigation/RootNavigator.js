import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../theme/theme";

import TabNavigator from "./TabNavigator";
import CourseDetailsScreen from "../screens/CourseDetailsScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CoursePlayerScreen from "../screens/CoursePlayerScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CertificatesScreen from "../screens/CertificatesScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: "700" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetailsScreen}
        options={{ title: "Course" }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ title: "Payment" }}
      />
      <Stack.Screen
        name="CoursePlayer"
        component={CoursePlayerScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Certificates"
        component={CertificatesScreen}
        options={{ title: "Certificates" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Welcome back" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Create account" }}
      />
    </Stack.Navigator>
  );
}
