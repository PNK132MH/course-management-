import { Link } from "react-router-dom";
import CourseCard from "../components/Coursecard";
import courses from "../data/courseData";

function Home() {

  const featuredCourses = courses.slice(0, 3);

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-small">
            LEARN WITHOUT LIMITS
          </span>

          <h1>
            Learn skills that can
            <span> change your future.</span>
          </h1>

          <p>
            Learn programming, web development, backend development,
            mobile development and more from practical courses.
          </p>

          <div className="hero-buttons">

            <Link to="/courses" className="primary-btn">
              Explore Courses
            </Link>

            <Link to="/register" className="secondary-btn">
              Get Started
            </Link>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section">

        <div className="section-heading">

          <span>EXPLORE</span>

          <h2>
            Learn something new
          </h2>

          <p>
            Choose a category and start building your skills.
          </p>

        </div>

        <div className="categories">

          <Link to="/courses?category=Web Development">
            💻 Web Development
          </Link>

          <Link to="/courses?category=Backend Development">
            ⚙️ Backend Development
          </Link>

          <Link to="/courses?category=Mobile Development">
            📱 Mobile Development
          </Link>

          <Link to="/courses?category=Development Tools">
            🛠️ Development Tools
          </Link>

        </div>

      </section>


      {/* FEATURED COURSES */}

      <section className="section courses-section">

        <div className="section-heading">

          <span>POPULAR COURSES</span>

          <h2>
            Students are learning
          </h2>

          <p>
            Start with one of our most popular courses.
          </p>

        </div>

        <div className="course-grid">

          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

        <div className="center-button">

          <Link to="/courses" className="primary-btn">
            View All Courses
          </Link>

        </div>

      </section>


      {/* WHY LEARN */}

      <section className="why-section">

        <div className="section-heading">

          <span>WHY LEARN WITH US?</span>

          <h2>
            Build real skills
          </h2>

        </div>

        <div className="features">

          <div className="feature">
            <div>🎓</div>
            <h3>Learn by doing</h3>
            <p>
              Practice what you learn through real projects.
            </p>
          </div>

          <div className="feature">
            <div>🚀</div>
            <h3>Build your career</h3>
            <p>
              Learn skills that you can use to build real applications.
            </p>
          </div>

          <div className="feature">
            <div>📚</div>
            <h3>Learn at your pace</h3>
            <p>
              Study whenever you want and continue where you stopped.
            </p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;