import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {

  // Controls whether the burger menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LearnHub logo */}

        <Link to="/" className="logo">
          LearnHub
        </Link>


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


        {/* =========================
            LOGGED IN NAVBAR
        ========================= */}

        {isLoggedIn && (

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

        )}

      </nav>


      {/* =========================
          SIDE MENU
      ========================= */}

      {isLoggedIn && menuOpen && (

        <>

          {/* Dark background behind menu */}

          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>


          {/* Side dashboard menu */}

          <aside className="side-menu">

            {/* Menu header */}

            <div className="side-menu-header">

              <div>
                <h2>LearnHub</h2>
                <p>Student Dashboard</p>
              </div>

              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

            </div>


            {/* Menu options */}

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


              {/* Not functional yet */}

              <button className="menu-option">
                <span>📈</span>
                Progress
              </button>


              {/* Not functional yet */}

              <button className="menu-option">
                <span>🏆</span>
                Certificates
              </button>


              {/* Not functional yet */}

              <button className="menu-option">
                <span>👤</span>
                Profile
              </button>


              {/* Not functional yet */}

              <button className="menu-option">
                <span>⚙️</span>
                Settings
              </button>

            </div>


            {/* Sign out */}

            <div className="side-menu-bottom">

              <button className="sign-out-btn">

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