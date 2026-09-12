import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import courses from "../data/courseData";
import { useCourses } from "../context/CoursesContext";
import { PrimaryButton, SecondaryButton } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

const PAYMENT_METHODS = [
  { value: "telebirr", label: "Telebirr" },
  { value: "cbe", label: "Commercial Bank of Ethiopia" },
  { value: "awash", label: "Awash Bank" },
  { value: "card", label: "Visa / Mastercard" },
];

export default function PaymentScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { payForCourse } = useCourses();
  const [paymentMethod, setPaymentMethod] = useState("");

  const course = courses.find((c) => c.id === route.params?.id);

  if (!course) {
    return (
      <View style={styles.center}>
        <Text style={typography.h2}>Course not found</Text>
      </View>
    );
  }

  const handlePayment = async () => {
    if (!paymentMethod) {
      Alert.alert("Please choose a payment method.");
      return;
    }
    await payForCourse(course.id);
    Alert.alert("Your payment is successful!", "", [
      {
        text: "OK",
        onPress: () => navigation.navigate("CoursePlayer", { courseTitle: course.title }),
      },
    ]);
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={typography.h1}>Complete Your Payment</Text>

      <View style={styles.courseRow}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={{ flex: 1, marginLeft: spacing.md }}>
          <Text style={typography.h3}>{course.title}</Text>
          <Text style={[typography.muted, { marginTop: 4 }]} numberOfLines={3}>
            {course.description}
          </Text>
          <Text style={[typography.h2, { marginTop: 4 }]}>${course.price}</Text>
        </View>
      </View>

      <Text style={[typography.h2, { marginTop: spacing.lg, marginBottom: spacing.sm }]}>
        Choose Payment Method
      </Text>

      {PAYMENT_METHODS.map((method) => (
        <TouchableOpacity
          key={method.value}
          style={styles.methodRow}
          onPress={() => setPaymentMethod(method.value)}
        >
          <View style={[styles.radio, paymentMethod === method.value && styles.radioActive]} />
          <Text style={typography.body}>{method.label}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.totalRow}>
        <Text style={typography.body}>Total</Text>
        <Text style={typography.h2}>${course.price}</Text>
      </View>

      <PrimaryButton title={`Pay $${course.price}`} onPress={handlePayment} style={{ marginTop: spacing.md }} />
      <SecondaryButton
        title="Back to Course"
        onPress={() => navigation.goBack()}
        style={{ marginTop: spacing.sm }}
      />

      <Text style={[typography.muted, { textAlign: "center", marginTop: spacing.md }]}>
        This is a demonstration payment system.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  courseRow: {
    flexDirection: "row",
    marginTop: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: 90, height: 70, borderRadius: radius.sm },
  methodRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: spacing.sm,
  },
  radioActive: { borderColor: colors.primary, backgroundColor: colors.primary },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
