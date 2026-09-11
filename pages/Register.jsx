import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register({ onAccountCreated }) {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Student or Instructor
  const [role, setRole] = useState("");

  const handleRegister = (event) => {

    event.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if a role was selected
    if (!role) {
      alert("Please select Student or Instructor.");
      return;
    }

    // Temporary frontend storage
    // The backend will handle this later
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name,
        email,
        role
      })
    );

    // Tell App.jsx that an account was created
    onAccountCreated();

    alert("Account created!");

    // Send the user to the correct dashboard
    if (role === "student") {

      navigate("/student-dashboard");

     } else if (role === "instructor") {

  // The instructor sees the welcome page
  // after their first registration.

  localStorage.setItem(
    "instructorWelcomeCompleted",
    "false"
  );

  navigate("/instructor-welcome");

}

  };

  return (

    <main className="auth-page">

      <div className="auth-card">

        <h1>
          Create your account
        </h1>

        <p>
          Start your learning journey today.
        </p>

        <form onSubmit={handleRegister}>

          <label>
            Name
          </label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* Student / Instructor selection */}

          <div className="role-buttons">

            <button
              type="button"
              className={`role-btn ${
                role === "student" ? "selected" : ""
              }`}
              onClick={() => setRole("student")}
            >
              Student
            </button>

            <button
              type="button"
              className={`role-btn ${
                role === "instructor" ? "selected" : ""
              }`}
              onClick={() => setRole("instructor")}
            >
              Instructor
            </button>

          </div>

          <button
            type="submit"
            className="primary-btn full-btn"
          >
            Create Account
          </button>

        </form>

        <p className="auth-switch">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </main>

  );
}

export default Register;

