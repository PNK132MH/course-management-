import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ onAccountCreated }) {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Stores whether the user chose Student or Instructor
  const [role, setRole] = useState("");


  const handleRegister = (event) => {

    event.preventDefault();


    // Check if all fields are filled

    if (!name || !email || !password) {

      alert("Please fill in all fields.");

      return;
    }


    // Check if Student or Instructor was selected

    if (!role) {

      alert("Please select Student or Instructor.");

      return;
    }


    // Temporary frontend account storage
    // Your friend's backend will replace this later

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name,
        email,
        role
      })
    );


    // Tell App.jsx that the account was created

    onAccountCreated();


    alert("Account created!");


    // Go to the correct dashboard

    if (role === "student") {

      navigate("/student-dashboard");

    } else if (role === "instructor") {

      navigate("/instructor-dashboard");

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
            onChange={(event) =>
              setName(event.target.value)
            }
          />


          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />


          {/* Student and Instructor buttons */}

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


          {/* Create Account */}

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