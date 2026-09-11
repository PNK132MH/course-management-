
import { useMemo, useState } from "react";
import CourseCard from "../../components/CourseCard";
import courses from "../../data/courseData";

import "./StudentDashboard.css";

function StudentDashboard() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Backend Development",
    "Mobile Development",
    "Development Tools"
  ];

  const filteredCourses = useMemo(() => {

    return courses.filter((course) => {

      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);


  return (

    <main className="student-dashboard">

      {/* WELCOME */}

      <section className="student-welcome">

        <p className="dashboard-label">
          STUDENT DASHBOARD
        </p>

        <h1>
          Welcome back Student!
        </h1>

        <p className="welcome-text">
          Continue learning and discover new skills today.
        </p>

      </section>


      {/* EXPLORE COURSES */}

      <section className="dashboard-courses">

        <div className="courses-title">

          <p className="courses-label">
            OUR COURSES
          </p>

          <h2>
            Explore our courses
          </h2>

          <p>
            Find the right course and start learning today.
          </p>

        </div>


        {/* SEARCH */}

        <div className="dashboard-search">

          <span>
            🔎
          </span>

          <input
            type="text"
            placeholder="Search for a course..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        {/* CATEGORIES */}

        <div className="dashboard-filters">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "dashboard-filter active"
                  : "dashboard-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>


        {/* COURSE CARDS */}

        {filteredCourses.length > 0 ? (

          <div className="course-grid">

            {filteredCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
              />

            ))}

          </div>

        ) : (

          <div className="dashboard-no-results">

            <h2>
              No courses found
            </h2>

            <p>
              Try another search.
            </p>

          </div>

        )}

      </section>

    </main>

  );
}

export default StudentDashboard;
