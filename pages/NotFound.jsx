import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">

      <h1>404</h1>

      <h2>Page not found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="primary-btn"
      >
        Go Home
      </Link>

    </main>
  );
}

export default NotFound;