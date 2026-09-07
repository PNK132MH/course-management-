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
import NotFound from "../pages/NotFound";

import "./App.css";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

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
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />

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