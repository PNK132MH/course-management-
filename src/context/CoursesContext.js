import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Mirrors the website's localStorage keys: enrolledCourses, paidCourses,
// courseProgress — just persisted with AsyncStorage instead.

const CoursesContext = createContext(null);

export function CoursesProvider({ children }) {
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [paidIds, setPaidIds] = useState([]);
  const [progressData, setProgressData] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const [enrolled, paid, progress] = await Promise.all([
        AsyncStorage.getItem("enrolledCourses"),
        AsyncStorage.getItem("paidCourses"),
        AsyncStorage.getItem("courseProgress"),
      ]);
      setEnrolledIds(enrolled ? JSON.parse(enrolled) : []);
      setPaidIds(paid ? JSON.parse(paid) : []);
      setProgressData(progress ? JSON.parse(progress) : {});
      setReady(true);
    })();
  }, []);

  const enrollFree = useCallback(async (courseId) => {
    setEnrolledIds((prev) => {
      if (prev.includes(courseId)) return prev;
      const next = [...prev, courseId];
      AsyncStorage.setItem("enrolledCourses", JSON.stringify(next));
      return next;
    });
  }, []);

  const removeCourse = useCallback(
    async (courseId) => {
      if (paidIds.includes(courseId)) return false; // paid courses can't be removed
      setEnrolledIds((prev) => {
        const next = prev.filter((id) => id !== courseId);
        AsyncStorage.setItem("enrolledCourses", JSON.stringify(next));
        return next;
      });
      return true;
    },
    [paidIds]
  );

  const payForCourse = useCallback(async (courseId) => {
    setPaidIds((prev) => {
      if (prev.includes(courseId)) return prev;
      const next = [...prev, courseId];
      AsyncStorage.setItem("paidCourses", JSON.stringify(next));
      return next;
    });
    setEnrolledIds((prev) => {
      if (prev.includes(courseId)) return prev;
      const next = [...prev, courseId];
      AsyncStorage.setItem("enrolledCourses", JSON.stringify(next));
      return next;
    });
  }, []);

  return (
    <CoursesContext.Provider
      value={{
        ready,
        enrolledIds,
        paidIds,
        progressData,
        enrollFree,
        removeCourse,
        payForCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  const ctx = useContext(CoursesContext);
  if (!ctx) throw new Error("useCourses must be used within CoursesProvider");
  return ctx;
}
