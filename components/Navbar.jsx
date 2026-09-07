import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        LearnHub
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/my-courses">My Courses</Link>
        <Link to="/login">Login</Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;