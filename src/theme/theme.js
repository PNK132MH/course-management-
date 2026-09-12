// Shared design tokens, mirroring the LearnHub website's look:
// indigo primary, clean cards, soft gray backgrounds.

export const colors = {
  primary: "#000000",
  primaryDark: "#1a1a1a",
  secondary: "#111827",
  background: "#f8f9fc",
  card: "#ffffff",
  border: "#e5e7eb",
  text: "#111827",
  textMuted: "#6b7280",
  success: "#16a34a",
  successBg: "#dcfce7",
  warning: "#d97706",
  warningBg: "#fef3c7",
  danger: "#dc2626",
  star: "#f59e0b",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 999,
};

export const typography = {
  h1: { fontSize: 26, fontWeight: "800", color: colors.text },
  h2: { fontSize: 20, fontWeight: "700", color: colors.text },
  h3: { fontSize: 16, fontWeight: "700", color: colors.text },
  body: { fontSize: 14, color: colors.text },
  muted: { fontSize: 13, color: colors.textMuted },
  label: { fontSize: 12, fontWeight: "700", color: colors.primary, letterSpacing: 0.5 },
};
