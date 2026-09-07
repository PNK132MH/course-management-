import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {

    event.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name,
        email
      })
    );

    alert("Account created!");

    navigate("/");
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

          <label>Name</label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
          />


          <label>Email</label>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />


          <button className="primary-btn full-btn">
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