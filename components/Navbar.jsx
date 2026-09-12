import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Get the current logged-in user
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  const role = currentUser?.role;

  // Sign out
  const handleSignOut = () => {

    localStorage.removeItem("currentUser");

    setMenuOpen(false);

    navigate("/");

    // Refresh the page so the navbar changes immediately
    window.location.reload();
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="navbar-left">

          {/* HAMBURGER */}

          {isLoggedIn && (
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}

          {/* LOGO */}

          <Link to="/" className="logo">
            LearnHub
          </Link>

        </div>


        {/* =========================
            NORMAL NAVIGATION
        ========================= */}

        {!isLoggedIn && (

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/courses">
              Courses
            </Link>

            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>

          </div>

        )}

      </nav>


      {/* =========================
          SIDE MENU
      ========================= */}

      {isLoggedIn && menuOpen && (

        <>

          {/* Dark background */}

          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>


          {/* SIDE MENU */}

          <aside className="side-menu">

            {/* HEADER */}

            <div className="side-menu-header">

              <div>

                <h2>LearnHub</h2>

                <p>
                  {role === "admin"
                    ? "Admin Menu"
                    : role === "instructor"
                    ? "Instructor Menu"
                    : "Student Menu"}
                </p>

              </div>

              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

            </div>


            {/* =========================
                STUDENT MENU
            ========================= */}

            {role === "student" && (

              <div className="side-menu-links">

                <Link
                  to="/student-dashboard"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🏠</span>
                  Dashboard
                </Link>

                <Link
                  to="/my-courses"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📚</span>
                  My Courses
                </Link>

                <Link
                  to="/progress"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📈</span>
                  Progress
                </Link>

                <Link
                  to="/certificates"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🏆</span>
                  Certificates
                </Link>

                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>👤</span>
                  Profile
                </Link>

                <Link
                  to="/settings"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>⚙️</span>
                  Settings
                </Link>

              </div>

            )}


            {/* =========================
                INSTRUCTOR MENU
            ========================= */}

            {role === "instructor" && (

              <div className="side-menu-links">

                <Link
                  to="/instructor-dashboard"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🏠</span>
                  Dashboard
                </Link>

                <Link
                  to="/create-course"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>➕</span>
                  Create Course
                </Link>

                <Link
                  to="/edit-courses"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📚</span>
                  Edit Courses
                </Link>

                <Link
                  to="/students"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>👥</span>
                  Students
                </Link>

                <Link
                  to="/student-progress"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📈</span>
                  Student Progress
                </Link>
                <Link
               to="/instructor-notifications"
               onClick={() => setMenuOpen(false)}
                >
              <span>🔔</span>
              Notifications
                  </Link>

                <Link
                  to="/earnings"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>💰</span>
                  Earnings
                </Link>
                 <Link
                  to="/contact-instructors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📧</span>
                  Contact
                </Link>

                <Link
                  to="/instructor-profile"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>👤</span>
                  Profile
                </Link>

                <Link
                  to="/settings"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>⚙️</span>
                  Settings
                </Link>

              </div>

            )}


            {/* =========================
                ADMIN MENU
            ========================= */}

            {role === "admin" && (

              <div className="side-menu-links">

                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>🏠</span>
                  Dashboard
                </Link>

                <Link
                  to="/admin/users"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>👥</span>
                  Manage Users
                </Link>

                <Link
                  to="/admin/courses"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📚</span>
                  Manage Courses
                </Link>

                <Link
                  to="/admin/approvals"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📝</span>
                  Course Approvals
                </Link>

                <Link
                  to="/admin/analytics"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>📊</span>
                  Analytics
                </Link>

              </div>

            )}


            {/* =========================
                SIGN OUT
            ========================= */}

            {isLoggedIn && (

              <div className="side-menu-bottom">

                <button
                  className="sign-out-btn"
                  onClick={handleSignOut}
                >
                  <span>🚪</span>
                  Sign Out
                </button>

              </div>

            )}

          </aside>

        </>

      )}

    </>
  );
}

export default Navbar;