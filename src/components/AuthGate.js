import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { PrimaryButton, SecondaryButton } from "./UI";
import { colors, spacing, typography } from "../theme/theme";

// Wraps a protected tab (My Courses / Progress / Profile content) and shows
// a login/register prompt instead, when there's no current user — mirroring
// how the website hides those side-menu links until you're logged in.
export default function AuthGate({ icon = "🔒", message, children }) {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  if (isLoggedIn) return children;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>Sign in to continue</Text>
      <Text style={styles.subtitle}>
        {message || "Log in or create an account to access this."}
      </Text>
      <PrimaryButton
        title="Login"
        onPress={() => navigation.navigate("Login")}
        style={{ width: "100%", marginTop: spacing.lg }}
      />
      <SecondaryButton
        title="Create an account"
        onPress={() => navigation.navigate("Register")}
        style={{ width: "100%", marginTop: spacing.sm }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  icon: { fontSize: 48, marginBottom: spacing.md },
  title: { ...typography.h2, marginBottom: spacing.xs },
  subtitle: { ...typography.muted, textAlign: "center" },
});
