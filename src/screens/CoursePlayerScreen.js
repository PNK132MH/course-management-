import React, { useLayoutEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import coursePlayers from "../data/coursePlayers";
import { colors, radius, spacing, typography } from "../theme/theme";

export default function CoursePlayerScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { courseTitle } = route.params || {};
  const player = coursePlayers[courseTitle];

  const [selectedTopic, setSelectedTopic] = useState(player?.topics?.[0]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: courseTitle || "Course" });
  }, [courseTitle]);

  if (!player) {
    return (
      <View style={styles.center}>
        <Text style={typography.h2}>Lessons coming soon</Text>
      </View>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${player.videoId}?start=${selectedTopic.time}&playsinline=1&autoplay=1&modestbranding=1&rel=0`;

  return (
    <View style={styles.page}>
      <View style={styles.videoWrap}>
        <WebView
          // Re-mounting on topic change forces the iframe to actually
          // reload at the new start time instead of silently staying
          // on the old video (the root cause of "videos don't work").
          key={`${player.videoId}-${selectedTopic.time}`}
          source={{ uri: embedUrl }}
          style={{ flex: 1 }}
          allowsFullscreenVideo
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled
          domStorageEnabled
          originWhitelist={["*"]}
          startInLoadingState
          renderLoading={() => (
            <View style={[styles.center, StyleSheet.absoluteFill]}>
              <ActivityIndicator color="#fff" />
            </View>
          )}
          onError={(e) => console.warn("Video failed to load:", e.nativeEvent)}
        />
      </View>

      <View style={{ padding: spacing.md }}>
        <Text style={typography.h3}>{selectedTopic.title}</Text>
        <Text style={typography.muted}>
          Continue learning by following the course topics below.
        </Text>
      </View>

      <FlatList
        data={player.topics}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingHorizontal: spacing.md, paddingBottom: spacing.lg }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.topicRow,
              item.title === selectedTopic.title && styles.topicRowActive,
            ]}
            onPress={() => setSelectedTopic(item)}
          >
            <Text
              style={[
                styles.topicText,
                item.title === selectedTopic.title && styles.topicTextActive,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  videoWrap: { width: "100%", aspectRatio: 16 / 9, backgroundColor: "#000" },
  topicRow: {
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xs,
  },
  topicRowActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  topicText: { fontWeight: "600", color: colors.text },
  topicTextActive: { color: "#fff" },
});
