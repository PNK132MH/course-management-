import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";
import AuthGate from "../components/AuthGate";
import { PrimaryButton, SectionHeading } from "../components/UI";
import { colors, radius, spacing, typography } from "../theme/theme";

function ProfileContent() {
  const { currentUser, updateProfile, signOut } = useAuth();
  const nameParts = (currentUser?.name || "").split(" ");

  const [firstName, setFirstName] = useState(nameParts[0] || "");
  const [lastName, setLastName] = useState(nameParts.slice(1).join(" ") || "");
  const [headline, setHeadline] = useState("");
  const [biography, setBiography] = useState("");
  const [photo, setPhoto] = useState(currentUser?.photo || null);
  const [saved, setSaved] = useState(false);

  const pickImage = async (fromCamera) => {
    const permission = fromCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission needed", "Please allow access to continue.");
      return;
    }

    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 0.7 })
      : await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, quality: 0.7 });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setPhoto(uri);
      await AsyncStorage.setItem("profilePhoto", uri);
      await updateProfile({ photo: uri });
    }
  };

  const handleSave = async () => {
    await updateProfile({ name: `${firstName} ${lastName}`.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ padding: spacing.md }}>
      <SectionHeading label="ACCOUNT" title="Public profile" subtitle="Add information about yourself" />

      <View style={styles.avatarSection}>
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={() =>
            Alert.alert("Profile Photo", "Choose how you want to add your photo.", [
              { text: "Take a photo", onPress: () => pickImage(true) },
              { text: "Choose from device", onPress: () => pickImage(false) },
              { text: "Cancel", style: "cancel" },
            ])
          }
        >
          {photo ? (
            <Image source={{ uri: photo }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarInitial}>
                {firstName ? firstName.charAt(0).toUpperCase() : "U"}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={typography.h3}>{firstName || "Your Name"}</Text>
        <Text style={typography.muted}>{currentUser?.email}</Text>
      </View>

      <Text style={styles.label}>First name</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First name" />

      <Text style={styles.label}>Last name</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last name" />

      <Text style={styles.label}>Headline</Text>
      <TextInput
        style={styles.input}
        value={headline}
        onChangeText={(t) => setHeadline(t.slice(0, 60))}
        placeholder="Headline"
        maxLength={60}
      />
      <Text style={styles.helper}>{60 - headline.length} characters remaining</Text>

      <Text style={styles.label}>Biography</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: "top" }]}
        value={biography}
        onChangeText={setBiography}
        placeholder="Tell people a little about yourself."
        multiline
      />

      {saved && <Text style={styles.savedMsg}>Profile saved successfully!</Text>}

      <PrimaryButton title="Save" onPress={handleSave} style={{ marginTop: spacing.md }} />

      <TouchableOpacity
        style={styles.signOutBtn}
        onPress={() =>
          Alert.alert("Sign out", "Are you sure you want to sign out?", [
            { text: "Cancel", style: "cancel" },
            { text: "Sign Out", style: "destructive", onPress: signOut },
          ])
        }
      >
        <Text style={{ color: colors.danger, fontWeight: "700" }}>🚪 Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function ProfileScreen() {
  return (
    <AuthGate icon="👤" message="Log in to view and edit your profile.">
      <ProfileContent />
    </AuthGate>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  avatarSection: { alignItems: "center", marginBottom: spacing.lg },
  avatarButton: { marginBottom: spacing.sm },
  avatarImage: { width: 90, height: 90, borderRadius: 45 },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitial: { color: "#fff", fontSize: 32, fontWeight: "800" },
  label: { fontWeight: "700", marginBottom: 6, marginTop: spacing.sm },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  helper: { color: colors.textMuted, fontSize: 12, marginTop: 4 },
  savedMsg: { color: colors.success, fontWeight: "600", marginTop: spacing.md },
  signOutBtn: { alignItems: "center", marginTop: spacing.lg, paddingVertical: spacing.sm },
});
