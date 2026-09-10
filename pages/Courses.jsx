import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CourseCard from "../components/CourseCard";
import courses from "../data/courseData";

import "./Courses.css";


function Courses() {

  const [searchParams] = useSearchParams();


  const startingCategory =
    searchParams.get("category") || "All";


  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState(startingCategory);


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

    <main className="courses-page">


      {/* =========================
          HEADER
      ========================= */}

      <section className="courses-hero">

        <p className="courses-label">
          OUR COURSES
        </p>


        <h1>
          Explore our courses
        </h1>


        <p className="courses-subtitle">
          Find the right course and start learning today.
        </p>

      </section>


      {/* =========================
          SEARCH
      ========================= */}

      <section className="courses-content">

        <div className="courses-search">

          <input
            type="text"
            placeholder="Search for a course..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <span>
            🔎
          </span>

        </div>


        {/* =========================
            CATEGORIES
        ========================= */}

        <div className="course-filters">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "course-filter active"
                  : "course-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>


        {/* =========================
            COURSES
        ========================= */}

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

          <div className="courses-no-results">

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


export default Courses;