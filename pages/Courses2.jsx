import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CourseCard2 from "../components/CourseCard2";
import courses from "../data/courseData";

function Courses2() {

  const [searchParams] = useSearchParams();

  const startingCategory =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(startingCategory);

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
    <main className="page">

      <div className="courses-header">

        <h1>
          Available Courses
        </h1>

        <p>
          START LEARNING
        </p>

      </div>


      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search for a course..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <span>🔎</span>

      </div>


      {/* CATEGORIES */}

      <div className="filter-buttons">

        {categories.map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "filter active"
                : "filter"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>

        ))}

      </div>


      {/* COURSES */}

      <div className="course-grid">

        {filteredCourses.length > 0 ? (

          filteredCourses.map((course) => (
            <CourseCard2
              key={course.id}
              course={course}
            />
          ))

        ) : (

          <div className="no-results">
            <h2>No courses found 😭</h2>
            <p>Try another search.</p>
          </div>

        )}

      </div>

    </main>
  );
}

export default Courses2;