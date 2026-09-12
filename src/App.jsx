import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


/* =========================
   COMPONENTS
========================= */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


/* =========================
   MAIN PAGES
========================= */

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";


/* =========================
   STUDENT
========================= */

import MyCourses from "../pages/Students/MyCourses";
import StudentDashboard from "../pages/Students/StudentDashboard";
import Profile from "../pages/Students/Profile";
import Progress from "../pages/Students/Progress";
import Certificates from "../pages/Students/Certificates";
import Settings from "../pages/Students/Settings";


/* =========================
   INSTRUCTOR
========================= */

import InstructorDashboard from "../pages/Instructor/InstructorDashboard";
import InstructorProfile from "../pages/Instructor/InstructorProfile";
import InstructorWelcome from "../pages/Instructor/InstructorWelcome";
import CreateCourse from "../pages/Instructor/CreateCourse";
import EditCourses from "../pages/Instructor/EditCourses";
import Students from "../pages/Instructor/Students";
import StudentProgress from "../pages/Instructor/StudentProgress";
import Earnings from "../pages/Instructor/Earnings";
import ContactInstructors from "../pages/Instructor/ContactInstructors";
import InstructorNotifications from "../pages/Instructor/InstructorNotifications";


/* =========================
   ADMIN
========================= */

import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageCourses from "../pages/Admin/ManageCourses";
import CourseApprovals from "../pages/Admin/CourseApprovals";
import Analytics from "../pages/Admin/Analytics";
import ReviewCourse from "../pages/Admin/ReviewCourse";


/* =========================
   COURSE PLAYER PAGES
========================= */

import ReactCourse from "../FreexPaid/React";
import JavaScriptCourse from "../FreexPaid/JavaScript";
import HtmlCssCourse from "../FreexPaid/HtmlxCSS";
import NodeCourse from "../FreexPaid/Node";
import ReactNativeCourse from "../FreexPaid/ReactNative";
import GitHubCourse from "../FreexPaid/GitHub";


/* =========================
   ADMIN BACKGROUND
========================= */

import "../pages/Admin/AdminShared.css";


/* =========================
   APP CSS
========================= */

import "./App.css";


function App() {

  /* =========================
     LOGIN STATE
  ========================= */

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("currentUser") !== null
  );


  /* =========================
     ACCOUNT CREATED
  ========================= */

  const handleAccountCreated = () => {

    setIsLoggedIn(true);

  };


  /* =========================
     LOGIN
  ========================= */

  const handleLogin = () => {

    setIsLoggedIn(true);

  };


  return (

    <BrowserRouter>

      <Navbar
        isLoggedIn={isLoggedIn}
      />


      <Routes>


        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            COURSES
        ========================= */}

        <Route
          path="/courses"
          element={<Courses />}
        />


        {/* =========================
            COURSE DETAILS
        ========================= */}

        <Route
          path="/course/:id"
          element={<CourseDetails />}
        />


        {/* =========================
            PAYMENT
        ========================= */}

        <Route
          path="/payment/:id"
          element={<Payment />}
        />


        {/* =========================
            LOGIN
        ========================= */}

        <Route
          path="/login"
          element={
            <Login
              onLogin={handleLogin}
            />
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
            STUDENT
        ========================= */}

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />

        <Route
          path="/progress"
          element={<Progress />}
        />

        <Route
          path="/certificates"
          element={<Certificates />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />


        {/* =========================
            INSTRUCTOR
        ========================= */}

        <Route
          path="/instructor-dashboard"
          element={<InstructorDashboard />}
        />

        <Route
          path="/instructor-welcome"
          element={<InstructorWelcome />}
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

        <Route
          path="/contact-instructors"
          element={<ContactInstructors />}
        />

        <Route
          path="/instructor-notifications"
          element={<InstructorNotifications />}
        />


        {/* =========================
            COURSE PLAYER
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
            ADMIN
        ========================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin/courses"
          element={<ManageCourses />}
        />

        <Route
          path="/admin/approvals"
          element={<CourseApprovals />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

        <Route
          path="/admin/approvals/:id"
          element={<ReviewCourse />}
        />


        {/* =========================
            PAGE NOT FOUND
        ========================= */}

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