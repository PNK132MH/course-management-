import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function CourseCard({ course, onRemove, statusBadge }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{course.category}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {course.title}
        </Text>
        <Text style={styles.instructor}>{course.instructor}</Text>

        <View style={styles.row}>
          <Text style={styles.rating}>{course.rating}</Text>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.students}>
            ({course.students.toLocaleString()})
          </Text>
        </View>

        {statusBadge}

        <View style={styles.bottomRow}>
          <Text style={styles.price}>${course.price}</Text>
          <TouchableOpacity
            style={styles.detailsBtn}
            onPress={() => navigation.navigate("CourseDetails", { id: course.id })}
          >
            <Text style={styles.detailsBtnText}>View Details</Text>
          </TouchableOpacity>
        </View>

        {onRemove && (
          <TouchableOpacity
            style={styles.removeBtn}
            onPress={() => onRemove(course.id)}
          >
            <Text style={styles.removeBtnText}>Remove Course</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: { width: "100%", height: 150 },
  content: { padding: spacing.md },
  category: { ...typography.label, marginBottom: 4 },
  title: { ...typography.h3, marginBottom: 2 },
  instructor: { ...typography.muted, marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: spacing.sm },
  rating: { fontWeight: "700", color: colors.text, marginRight: 2 },
  star: { marginRight: 4 },
  students: { color: colors.textMuted, fontSize: 12 },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.xs,
  },
  price: { fontSize: 16, fontWeight: "800", color: colors.text },
  detailsBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: radius.sm,
  },
  detailsBtnText: { color: "#fff", fontWeight: "700", fontSize: 13 },
  removeBtn: { marginTop: spacing.sm, alignSelf: "flex-start" },
  removeBtnText: { color: colors.danger, fontWeight: "600", fontSize: 12 },
});
