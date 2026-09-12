import React, { useMemo } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import courses from "../data/courseData";
import { useCourses } from "../context/CoursesContext";
import { PrimaryButton, SectionHeading } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function CertificatesScreen() {
  const { enrolledIds, progressData } = useCourses();

  const completedCourses = useMemo(() => {
    return courses.filter((course) => {
      const isEnrolled = enrolledIds.includes(course.id);
      const progress = progressData[course.id] || 0;
      return isEnrolled && progress >= 100;
    });
  }, [enrolledIds, progressData]);

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      <SectionHeading
        label="ACHIEVEMENTS"
        title="Certificates"
        subtitle="Your certificates will appear here when you complete a course."
      />

      {completedCourses.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ fontSize: 40 }}>🏆</Text>
          <Text style={[typography.h2, { marginTop: spacing.sm }]}>No certificates yet</Text>
          <Text style={typography.muted}>
            Complete a course to earn your first certificate.
          </Text>
        </View>
      ) : (
        completedCourses.map((course) => (
          <View key={course.id} style={styles.card}>
            <Text style={{ fontSize: 28 }}>🏆</Text>
            <Text style={[typography.label, { marginTop: spacing.xs }]}>COURSE COMPLETED</Text>
            <Text style={[typography.h2, { marginTop: 4 }]}>{course.title}</Text>
            <Text style={[typography.muted, { marginVertical: spacing.sm }]}>
              Congratulations! You have successfully completed this course.
            </Text>
            <PrimaryButton
              title="View Certificate"
              onPress={() => Alert.alert(`Certificate for "${course.title}" is ready!`)}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  empty: { alignItems: "center", paddingVertical: spacing.xl },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
});
