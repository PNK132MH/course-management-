import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import courses from "../data/courseData";
import CourseCard from "../components/CourseCard";
import { PrimaryButton, SecondaryButton } from "../components/UI";
import { colors, spacing, typography } from "../theme/theme";

const CATEGORY_ICONS = [
  { label: "💻 Web Development", value: "Web Development" },
  { label: "⚙️ Backend Development", value: "Backend Development" },
  { label: "📱 Mobile Development", value: "Mobile Development" },
  { label: "🛠️ Development Tools", value: "Development Tools" },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const featuredCourses = courses.slice(0, 3);

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroSmall}>LEARN WITHOUT LIMITS</Text>
        <Text style={styles.heroTitle}>
          Learn skills that can{"\n"}
          <Text style={{ color: colors.primary }}>change your future.</Text>
        </Text>
        <Text style={styles.heroText}>
          Learn programming, web development, backend development, mobile
          development and more from practical courses.
        </Text>
        <View style={{ flexDirection: "row", gap: spacing.sm, marginTop: spacing.md }}>
          <PrimaryButton
            title="Explore Courses"
            onPress={() => navigation.navigate("Courses")}
            style={{ flex: 1 }}
          />
          <SecondaryButton
            title="Get Started"
            onPress={() => navigation.navigate("Register")}
            style={{ flex: 1 }}
          />
        </View>
      </View>

      {/* CATEGORIES */}
      <Text style={typography.label}>EXPLORE</Text>
      <Text style={[typography.h2, { marginTop: 4, marginBottom: spacing.sm }]}>
        Learn something new
      </Text>
      <View style={styles.categoryGrid}>
        {CATEGORY_ICONS.map((cat) => (
          <TouchableOpacity
            key={cat.value}
            style={styles.categoryChip}
            onPress={() =>
              navigation.navigate("Courses", { category: cat.value })
            }
          >
            <Text style={styles.categoryChipText}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FEATURED COURSES */}
      <Text style={[typography.label, { marginTop: spacing.lg }]}>
        POPULAR COURSES
      </Text>
      <Text style={[typography.h2, { marginTop: 4, marginBottom: spacing.sm }]}>
        Students are learning
      </Text>
      {featuredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
      <SecondaryButton
        title="View All Courses"
        onPress={() => navigation.navigate("Courses")}
      />

      {/* WHY LEARN */}
      <Text style={[typography.label, { marginTop: spacing.lg }]}>
        WHY LEARN WITH US?
      </Text>
      <Text style={[typography.h2, { marginTop: 4, marginBottom: spacing.md }]}>
        Build real skills
      </Text>
      {[
        ["🎓", "Learn by doing", "Practice what you learn through real projects."],
        ["🚀", "Build your career", "Learn skills you can use to build real applications."],
        ["📚", "Learn at your pace", "Study whenever you want and continue where you stopped."],
      ].map(([emoji, title, text]) => (
        <View key={title} style={styles.featureCard}>
          <Text style={{ fontSize: 24 }}>{emoji}</Text>
          <Text style={typography.h3}>{title}</Text>
          <Text style={typography.muted}>{text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  hero: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  heroSmall: {
    color: "#a5b4fc",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 1,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    marginTop: spacing.sm,
    lineHeight: 32,
  },
  heroText: { color: "#d1d5db", marginTop: spacing.sm, fontSize: 14 },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  categoryChip: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  categoryChipText: { fontWeight: "600", fontSize: 13 },
  featureCard: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
