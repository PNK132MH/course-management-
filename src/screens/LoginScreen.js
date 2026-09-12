import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { PrimaryButton } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please enter your email and password.");
      return;
    }
    await login({ email });
    Alert.alert("Login successful!", "", [
      { text: "OK", onPress: () => navigation.navigate("Tabs") },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={typography.h1}>Welcome back</Text>
      <Text style={[typography.muted, { marginBottom: spacing.lg }]}>
        Login to continue learning.
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton title="Login" onPress={handleLogin} style={{ marginTop: spacing.lg }} />

      <TouchableOpacity
        style={{ marginTop: spacing.md, alignItems: "center" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={typography.muted}>
          Don't have an account? <Text style={{ color: colors.primary, fontWeight: "700" }}>Register</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: "center" },
  label: { fontWeight: "700", marginBottom: 6, marginTop: spacing.sm },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
