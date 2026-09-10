
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="navbar-left">

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

        {!isLoggedIn && (
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/login">Login</Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </div>
        )}

      </nav>

      {isLoggedIn && menuOpen && (
        <>
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>

          <aside className="side-menu">

            <div className="side-menu-header">

              <div>
                <h2>LearnHub</h2>
                <p>Dashboard Menu</p>
              </div>

              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

            </div>

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

              <button className="menu-option">
                <span>📈</span>
                Progress
              </button>

              <button className="menu-option">
                <span>🏆</span>
                Certificates
              </button>

              <Link
  to="/profile"
  className="menu-option"
  onClick={() => setMenuOpen(false)}
>
  <span>👤</span>
  Profile
</Link>

              <button className="menu-option">
                <span>⚙️</span>
                Settings
              </button>

            </div>

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

