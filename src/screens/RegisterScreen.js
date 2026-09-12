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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { PrimaryButton } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Please fill in all fields.");
      return;
    }
    if (!role) {
      Alert.alert("Please select Student or Instructor.");
      return;
    }

    await register({ name, email, role });
    Alert.alert("Account created!", "", [
      { text: "OK", onPress: () => navigation.navigate("Tabs") },
    ]);

    // Note: this build focuses on the Student experience. An instructor
    // role is stored, but the instructor dashboard flow isn't built yet —
    // that's the natural next milestone once this skeleton is approved.
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ padding: spacing.lg }} keyboardShouldPersistTaps="handled">
        <Text style={typography.h1}>Create your account</Text>
        <Text style={[typography.muted, { marginBottom: spacing.lg }]}>
          Start your learning journey today.
        </Text>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Your name" value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={{ flexDirection: "row", gap: spacing.sm, marginTop: spacing.md }}>
          <TouchableOpacity
            style={[styles.roleBtn, role === "student" && styles.roleBtnActive]}
            onPress={() => setRole("student")}
          >
            <Text style={[styles.roleBtnText, role === "student" && styles.roleBtnTextActive]}>
              Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleBtn, role === "instructor" && styles.roleBtnActive]}
            onPress={() => setRole("instructor")}
          >
            <Text style={[styles.roleBtnText, role === "instructor" && styles.roleBtnTextActive]}>
              Instructor
            </Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton title="Create Account" onPress={handleRegister} style={{ marginTop: spacing.lg }} />

        <TouchableOpacity
          style={{ marginTop: spacing.md, alignItems: "center" }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={typography.muted}>
            Already have an account? <Text style={{ color: colors.primary, fontWeight: "700" }}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  label: { fontWeight: "700", marginBottom: 6, marginTop: spacing.sm },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  roleBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    backgroundColor: colors.card,
  },
  roleBtnActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  roleBtnText: { fontWeight: "700", color: colors.text },
  roleBtnTextActive: { color: "#fff" },
});
