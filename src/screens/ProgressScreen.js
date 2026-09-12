import React, { useMemo } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import courses from "../data/courseData";
import { useCourses } from "../context/CoursesContext";
import AuthGate from "../components/AuthGate";
import { SectionHeading } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

function ProgressContent() {
  const navigation = useNavigation();
  const { enrolledIds, progressData } = useCourses();

  const enrolledCourses = useMemo(
    () => courses.filter((c) => enrolledIds.includes(c.id)),
    [enrolledIds]
  );

  const overallProgress = useMemo(() => {
    if (enrolledCourses.length === 0) return 0;
    const total = enrolledCourses.reduce(
      (sum, c) => sum + (progressData[c.id] || 0),
      0
    );
    return Math.round(total / enrolledCourses.length);
  }, [enrolledCourses, progressData]);

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      <SectionHeading
        label="LEARNING PROGRESS"
        title="Your Progress"
        subtitle="Track your progress across your enrolled courses."
      />

      <View style={styles.overallCard}>
        <View style={{ flex: 1 }}>
          <Text style={typography.h3}>Overall Progress</Text>
          <Text style={typography.muted}>Keep learning and complete your courses.</Text>
        </View>
        <Text style={styles.overallNumber}>{overallProgress}%</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Certificates")} style={styles.certLink}>
        <Text style={{ color: colors.primary, fontWeight: "700" }}>🏆 View Certificates →</Text>
      </TouchableOpacity>

      <Text style={[typography.h2, { marginTop: spacing.lg, marginBottom: spacing.sm }]}>
        Course Progress
      </Text>

      {enrolledCourses.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={typography.h3}>No courses yet</Text>
          <Text style={typography.muted}>
            Enroll in a course to start tracking your progress.
          </Text>
        </View>
      ) : (
        enrolledCourses.map((course) => {
          const progress = progressData[course.id] || 0;
          return (
            <View key={course.id} style={styles.progressCard}>
              <View style={styles.progressTop}>
                <View style={{ flex: 1 }}>
                  <Text style={typography.h3}>{course.title}</Text>
                  <Text style={typography.muted}>{course.category}</Text>
                </View>
                <Text style={{ fontWeight: "800" }}>{progress}%</Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
              </View>
              <Text style={typography.muted}>
                {progress === 100 ? "Course completed" : `${progress}% completed`}
              </Text>
            </View>
          );
        })
      )}
    </ScrollView>
  );
}

export default function ProgressScreen() {
  return (
    <AuthGate icon="📈" message="Log in to track your learning progress.">
      <ProgressContent />
    </AuthGate>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  overallCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  overallNumber: { fontSize: 32, fontWeight: "800", color: colors.primary },
  certLink: { marginTop: spacing.sm },
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  progressCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  progressTop: { flexDirection: "row", alignItems: "center", marginBottom: spacing.sm },
  progressBarTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    overflow: "hidden",
    marginBottom: spacing.xs,
  },
  progressBarFill: { height: 8, backgroundColor: colors.primary },
});
