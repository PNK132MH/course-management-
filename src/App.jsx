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
import InstructorDashboard from "../pages/Instructor/InstructorDashboard";

import Profile from "../pages/Profile";

import NotFound from "../pages/NotFound";
import CreateCourse from "../pages/Instructor/CreateCourse";
import EditCourses from "../pages/Instructor/EditCourses";
import Students from "../pages/Instructor/Students";
import StudentProgress from  "../pages/Instructor/StudentProgress";
import Earnings from  "../pages/Instructor/Earnings";
import InstructorProfile from  "../pages/Instructor/InstructorProfile";


// =========================
// FREE / PAID COURSES
// =========================

import ReactCourse from "../FreexPaid/React";
import JavaScriptCourse from "../FreexPaid/JavaScript";
import HtmlCssCourse from "../FreexPaid/HtmlxCSS";
import NodeCourse from "../FreexPaid/Node";
import ReactNativeCourse from "../FreexPaid/ReactNative";
import GitHubCourse from "../FreexPaid/GitHub";


import "./App.css";


function App() {

  // Temporary frontend login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("currentUser") !== null
  );


  // Runs after creating an account
  const handleAccountCreated = () => {
    setIsLoggedIn(true);
  };


  // Runs after logging in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <BrowserRouter>

      <Navbar isLoggedIn={isLoggedIn} />


      <Routes>

        {/* =========================
            MAIN PAGES
        ========================= */}

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


        {/* =========================
            LOGIN
        ========================= */}

        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} />
          }
        />


        {/* =========================
            REGISTER
        ========================= */}

        <Route
          path="/register"
          element={
            <Register
              onAccountCreated={handleAccountCreated}
            />
          }
        />


        {/* =========================
            MY COURSES
        ========================= */}

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />


        {/* =========================
            DASHBOARDS
        ========================= */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/instructor-dashboard"
          element={<InstructorDashboard />}
        />


        {/* =========================
            PROFILE
        ========================= */}

        <Route
          path="/profile"
          element={<Profile />}
        />


        {/* =========================
            COURSE PLAYER PAGES
        ========================= */}

        <Route
          path="/courses/react"
          element={<ReactCourse />}
        />

        <Route
          path="/courses/javascript"
          element={<JavaScriptCourse />}
        />

        <Route
          path="/courses/html-css"
          element={<HtmlCssCourse />}
        />

        <Route
          path="/courses/node"
          element={<NodeCourse />}
        />

        <Route
          path="/courses/react-native"
          element={<ReactNativeCourse />}
        />

        <Route
          path="/courses/github"
          element={<GitHubCourse />}
        />


        {/* =========================
            PAGE NOT FOUND
        ========================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

<Route
  path="/create-course"
  element={<CreateCourse />}
/>

<Route
  path="/edit-courses"
  element={<EditCourses />}
/>

<Route
  path="/students"
  element={<Students />}
/>

<Route
  path="/student-progress"
  element={<StudentProgress />}
/>

<Route
  path="/earnings"
  element={<Earnings />}
/>

<Route
  path="/instructor-profile"
  element={<InstructorProfile />}
/>
      </Routes>


      <Footer />

    </BrowserRouter>
  );
}


export default App;