import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// This mirrors the website's "temporary frontend auth" (localStorage.currentUser),
// just backed by AsyncStorage instead. When a real backend exists, only the
// functions in this file need to change to call the API — screens don't.

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("currentUser");
        if (stored) setCurrentUser(JSON.parse(stored));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = useCallback(async ({ email }) => {
    const user = { email };
    await AsyncStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    return user;
  }, []);

  const register = useCallback(async ({ name, email, role }) => {
    const user = { name, email, role };
    await AsyncStorage.setItem("currentUser", JSON.stringify(user));
    if (role === "instructor") {
      await AsyncStorage.setItem("instructorWelcomeCompleted", "false");
    }
    setCurrentUser(user);
    return user;
  }, []);

  const updateProfile = useCallback(async (updates) => {
    setCurrentUser((prev) => {
      const updated = { ...(prev || {}), ...updates };
      AsyncStorage.setItem("currentUser", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem("currentUser");
    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn: !!currentUser,
        loading,
        login,
        register,
        updateProfile,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
