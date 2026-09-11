import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Get the currently logged-in user's information
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  // Check the user's role
  const isInstructor = currentUser?.role === "instructor";

  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    setMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="navbar-left">

          {/* Hamburger only appears when logged in */}
          {isLoggedIn && (
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}

          <Link to="/" className="logo">
            LearnHub
          </Link>

        </div>


        {/* =========================
            LOGGED OUT NAVBAR
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


          {/* =========================
              SIDE MENU
          ========================= */}

          <aside className="side-menu">


            {/* =========================
                HEADER
            ========================= */}

            <div className="side-menu-header">

              <div>

                <h2>
                  LearnHub
                </h2>

                <p>
                  Dashboard Menu
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
                MENU LINKS
            ========================= */}

            <div className="side-menu-links">


              {/* =================================
                  INSTRUCTOR MENU
              ================================= */}

              {isInstructor ? (
                <>

                  {/* Dashboard */}
                  <Link
                    to="/instructor-dashboard"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>🏠</span>
                    Dashboard
                  </Link>


                  {/* Create Course */}
                  <Link
                    to="/create-course"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>➕</span>
                    Create Course
                  </Link>


                  {/* My Courses / Edit Courses */}
                  <Link
                    to="/edit-courses"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>📚</span>
                    My Courses
                  </Link>


                  {/* Students */}
                  <Link
                    to="/students"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>👨‍🎓</span>
                    Students
                  </Link>


                  {/* Student Progress */}
                  <Link
                    to="/student-progress"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>📈</span>
                    Student Progress
                  </Link>


                  {/* Earnings */}
                  <Link
                    to="/earnings"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>💰</span>
                    Earnings
                  </Link>

                  {/* Contact */}
                  <Link
                  to="/contact-instructors"
                  >
                   <button className="menu-option">
                    <span>📞</span>
                    Contact
                  </button>
                  </Link>
                 

                  {/* Instructor Profile */}
                  <Link
                    to="/instructor-profile"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>👤</span>
                    Profile
                  </Link>


                  {/* Settings */}
                  <button className="menu-option">
                    <span>⚙️</span>
                    Settings
                  </button>

                </>
              ) : (

                /* =================================
                   STUDENT MENU
                ================================= */

                <>

                  {/* Dashboard */}
                  <Link
                    to="/student-dashboard"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>🏠</span>
                    Dashboard
                  </Link>


                  {/* My Courses */}
                  <Link
                    to="/my-courses"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>📚</span>
                    My Courses
                  </Link>


                  {/* Progress */}
                  <Link to="/progress" className="dashboard-menu-item">
  📈
  <span>Progress</span>
</Link>


                  {/* Certificates */}
                  <Link to="/certificates" className="dashboard-menu-item">
  🏆
  <span>Certificates</span>
</Link>


                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="menu-option"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>👤</span>
                    Profile
                  </Link>


                  {/* Settings */}
                  <button className="menu-option">
                    <span>⚙️</span>
                    Settings
                  </button>

                </>

              )}

            </div>


            {/* =========================
                SIGN OUT
            ========================= */}

            <div className="side-menu-bottom">

              <button
                className="sign-out-btn"
                onClick={handleSignOut}
              >
                <span>🚪</span>
                Sign Out
              </button>

            </div>

          </aside>

        </>
      )}

    </>
  );
}

export default Navbar;