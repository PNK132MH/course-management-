import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors, radius, spacing, typography } from "../theme/theme";

export function PrimaryButton({ title, onPress, style, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.primaryBtn, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.primaryBtnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function SecondaryButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.secondaryBtn, style]} onPress={onPress}>
      <Text style={styles.secondaryBtnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function SectionHeading({ label, title, subtitle }) {
  return (
    <View style={{ marginBottom: spacing.md }}>
      {label ? <Text style={typography.label}>{label}</Text> : null}
      <Text style={[typography.h1, { marginTop: 4 }]}>{title}</Text>
      {subtitle ? (
        <Text style={[typography.muted, { marginTop: 4 }]}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

export function Badge({ text, tone = "success" }) {
  const bg = tone === "success" ? colors.successBg : colors.warningBg;
  const fg = tone === "success" ? colors.success : colors.warning;
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color: fg }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: radius.sm,
    alignItems: "center",
  },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  disabled: { opacity: 0.5 },
  secondaryBtn: {
    backgroundColor: colors.card,
    paddingVertical: 14,
    borderRadius: radius.sm,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  secondaryBtnText: { color: colors.text, fontWeight: "700", fontSize: 15 },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.full,
    marginBottom: spacing.sm,
  },
  badgeText: { fontWeight: "700", fontSize: 11 },
});
