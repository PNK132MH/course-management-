import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {

    event.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({ email })
    );

    alert("Login successful!");

    navigate("/");
  };


  return (
    <main className="auth-page">

      <div className="auth-card">

        <h1>
          Welcome back
        </h1>

        <p>
          Login to continue learning.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />


          <button className="primary-btn full-btn">
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Login;