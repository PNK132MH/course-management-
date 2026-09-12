import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import courses, { categories } from "../data/courseData";
import CourseCard from "../components/CourseCard";
import { SectionHeading } from "../components/UI";
import { colors, spacing } from "../theme/theme";

export default function CoursesScreen() {
  const route = useRoute();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(route.params?.category || "All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <FlatList
      style={styles.page}
      contentContainerStyle={{ padding: spacing.md }}
      data={filteredCourses}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={
        <View>
          <SectionHeading
            label="OUR COURSES"
            title="Explore our courses"
            subtitle="Find the right course and start learning today."
          />

          <TextInput
            style={styles.search}
            placeholder="Search for a course..."
            value={search}
            onChangeText={setSearch}
          />

          <View style={styles.filters}>
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                style={[styles.filterChip, category === item && styles.filterChipActive]}
                onPress={() => setCategory(item)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    category === item && styles.filterChipTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      }
      renderItem={({ item }) => <CourseCard course={item} />}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>No courses found</Text>
          <Text style={{ color: colors.textMuted, marginTop: 4 }}>
            Try another search.
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  search: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: spacing.sm,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  filterChip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  filterChipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  filterChipText: { fontSize: 12, fontWeight: "600", color: colors.text },
  filterChipTextActive: { color: "#fff" },
  empty: { alignItems: "center", paddingVertical: spacing.xl },
});
