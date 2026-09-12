import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import courses from "../data/courseData";
import { useCourses } from "../context/CoursesContext";
import CourseCard from "../components/CourseCard";
import AuthGate from "../components/AuthGate";
import { Badge, PrimaryButton, SectionHeading } from "../components/UI";
import { colors, spacing } from "../theme/theme";

function MyCoursesContent() {
  const navigation = useNavigation();
  const { enrolledIds, paidIds, removeCourse } = useCourses();
  const myCourses = courses.filter((c) => enrolledIds.includes(c.id));

  const handleRemove = async (courseId) => {
    const removed = await removeCourse(courseId);
    if (!removed) {
      Alert.alert("You already paid for this course. You cannot remove it.");
    }
  };

  return (
    <FlatList
      style={styles.page}
      contentContainerStyle={{ padding: spacing.md }}
      data={myCourses}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={
        <SectionHeading
          label="YOUR LEARNING"
          title="My Courses"
          subtitle="Continue learning where you left off."
        />
      }
      renderItem={({ item }) => (
        <CourseCard
          course={item}
          onRemove={handleRemove}
          statusBadge={
            <Badge
              text={paidIds.includes(item.id) ? "✅ PAID" : "🆓 FREE TRIAL"}
              tone={paidIds.includes(item.id) ? "success" : "warning"}
            />
          }
        />
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={{ fontSize: 40 }}>🎓</Text>
          <Text style={{ fontSize: 17, fontWeight: "700", marginTop: spacing.sm, textAlign: "center" }}>
            You haven't enrolled in any courses yet.
          </Text>
          <Text style={{ color: colors.textMuted, marginTop: 4, marginBottom: spacing.md }}>
            Find a course and start learning.
          </Text>
          <PrimaryButton
            title="Explore Courses"
            onPress={() => navigation.navigate("Courses")}
          />
        </View>
      }
    />
  );
}

export default function MyCoursesScreen() {
  return (
    <AuthGate message="Log in to see the courses you've enrolled in.">
      <MyCoursesContent />
    </AuthGate>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  empty: { alignItems: "center", paddingVertical: spacing.xl, paddingHorizontal: spacing.lg },
});
