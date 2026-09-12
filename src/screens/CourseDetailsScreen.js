import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import courses from "../data/courseData";
import { useAuth } from "../context/AuthContext";
import { useCourses } from "../context/CoursesContext";
import { PrimaryButton } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function CourseDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { isLoggedIn } = useAuth();
  const { enrollFree } = useCourses();

  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showTrialPopup, setShowTrialPopup] = useState(false);

  const course = courses.find((c) => c.id === route.params?.id);

  if (!course) {
    return (
      <View style={styles.center}>
        <Text style={typography.h2}>Course not found</Text>
        <PrimaryButton
          title="Back to Courses"
          onPress={() => navigation.navigate("Tabs", { screen: "Courses" })}
          style={{ marginTop: spacing.md }}
        />
      </View>
    );
  }

  const enrollCourse = () => {
    if (!isLoggedIn) {
      setShowRegisterPopup(true);
      return;
    }
    setShowTrialPopup(true);
  };

  const goToFree = async () => {
    await enrollFree(course.id);
    setShowTrialPopup(false);
    navigation.navigate("CoursePlayer", { courseTitle: course.title });
  };

  const goToPaid = () => {
    setShowTrialPopup(false);
    navigation.navigate("Payment", { id: course.id });
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={typography.label}>{course.category}</Text>
      <Text style={[typography.h1, { marginTop: 4 }]}>{course.title}</Text>
      <Text style={[typography.body, { marginTop: spacing.sm, lineHeight: 20 }]}>
        {course.description}
      </Text>

      <View style={styles.row}>
        <Text style={{ fontWeight: "800" }}>{course.rating}</Text>
        <Text> ⭐ </Text>
        <Text style={typography.muted}>
          {course.students.toLocaleString()} students
        </Text>
      </View>

      <Text style={[typography.body, { marginTop: spacing.xs }]}>
        Created by <Text style={{ fontWeight: "700" }}>{course.instructor}</Text>
      </Text>

      <View style={styles.enrollCard}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={{ padding: spacing.md }}>
          <Text style={styles.price}>${course.price}</Text>
          <Text style={typography.muted}>Lifetime access</Text>

          <PrimaryButton
            title="Enroll Now"
            onPress={enrollCourse}
            style={{ marginTop: spacing.md, marginBottom: spacing.md }}
          />

          <Text style={typography.h3}>This course includes:</Text>
          {[
            `${course.duration} of content`,
            `${course.lessons} lessons`,
            "Beginner-friendly projects",
            "Lifetime access",
            "Learn at your own pace",
          ].map((line) => (
            <Text key={line} style={styles.includeLine}>
              ✓ {line}
            </Text>
          ))}
        </View>
      </View>

      {/* REGISTRATION REQUIRED POPUP */}
      <Modal transparent visible={showRegisterPopup} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={typography.h2}>Registration Required</Text>
            <Text style={[typography.body, { marginTop: spacing.sm }]}>
              Please register before enrolling in this course.
            </Text>
            <PrimaryButton
              title="OK"
              style={{ marginTop: spacing.lg }}
              onPress={() => {
                setShowRegisterPopup(false);
                navigation.navigate("Register");
              }}
            />
            <TouchableOpacity
              style={{ marginTop: spacing.sm, alignItems: "center" }}
              onPress={() => setShowRegisterPopup(false)}
            >
              <Text style={{ color: colors.textMuted }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* FREE / PAID TRIAL POPUP */}
      <Modal transparent visible={showTrialPopup} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <Text style={typography.h2}>Choose Your Trial</Text>
            <Text style={[typography.muted, { marginTop: 4, marginBottom: spacing.md }]}>
              Choose how you want to start learning.
            </Text>

            <View style={styles.trialCard}>
              <Text style={typography.h3}>🆓 Free Trial</Text>
              {["Professional Teachings", "High-Quality Tutorials", "Effective Exercises"].map(
                (l) => (
                  <Text key={l} style={styles.includeLine}>
                    ✓ {l}
                  </Text>
                )
              )}
              <PrimaryButton title="Start Free Trial" onPress={goToFree} style={{ marginTop: spacing.sm }} />
            </View>

            <View style={[styles.trialCard, { marginTop: spacing.sm }]}>
              <Text style={typography.h3}>💳 Paid Trial</Text>
              {[
                "Professional Teachings",
                "High-Quality Tutorials",
                "Effective Exercises",
                "Download Available",
              ].map((l) => (
                <Text key={l} style={styles.includeLine}>
                  ✓ {l}
                </Text>
              ))}
              <PrimaryButton title="Choose Paid Trial" onPress={goToPaid} style={{ marginTop: spacing.sm }} />
            </View>

            <TouchableOpacity
              style={{ marginTop: spacing.md, alignItems: "center" }}
              onPress={() => setShowTrialPopup(false)}
            >
              <Text style={{ color: colors.textMuted }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  row: { flexDirection: "row", alignItems: "center", marginTop: spacing.sm },
  enrollCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: "100%", height: 180 },
  price: { fontSize: 26, fontWeight: "800" },
  includeLine: { marginTop: 6, color: colors.text },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: spacing.lg,
  },
  popup: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  trialCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
  },
});
