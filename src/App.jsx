import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCourses from "../pages/MyCourses";

import StudentDashboard from "../pages/StudentDashboard";
import InstructorDashboard from "../pages/InstructorDashboard";

import NotFound from "../pages/NotFound";

import "./App.css";

function App() {

  // Temporary frontend authentication.
  // Later your friend's backend will replace this.
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("currentUser") !== null
  );

  // Runs when the user successfully creates an account
  const handleAccountCreated = () => {
    setIsLoggedIn(true);
  };

  // Runs when the user successfully logs in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>

      {/* Navbar changes depending on login status */}
      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/course/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              onAccountCreated={handleAccountCreated}
            />
          }
        />

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />

        {/* Student Dashboard */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        {/* Instructor Dashboard */}

        <Route
          path="/instructor-dashboard"
          element={<InstructorDashboard />}
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;