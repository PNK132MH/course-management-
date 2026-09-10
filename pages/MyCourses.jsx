import { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import courses from "../data/courseData";
import "./MyCourses.css";

function MyCourses() {

  const [enrolledIds, setEnrolledIds] = useState(
    JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    )
  );


  const myCourses = courses.filter(
    (course) => enrolledIds.includes(course.id)
  );


  // Remove a course from My Courses
  const removeCourse = (courseId) => {

    const updatedIds = enrolledIds.filter(
      (id) => id !== courseId
    );


    // Update localStorage
    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedIds)
    );


    // Update the page immediately
    setEnrolledIds(updatedIds);
  };


  return (
    <main className="page">


      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="courses-header">

        <span>
          YOUR LEARNING
        </span>

        <h1>
          My Courses
        </h1>

        <p>
          Continue learning where you left off.
        </p>

      </div>


      {/* =========================
          COURSES
      ========================= */}

      {myCourses.length > 0 ? (

        <div className="course-grid">

          {myCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
              onRemove={removeCourse}
            />

          ))}

        </div>

      ) : (

        /* =========================
           EMPTY STATE
        ========================= */

        <div className="empty-state">

          <div>
            🎓
          </div>

          <h2>
            You haven't enrolled in any courses yet.
          </h2>

          <p>
            Find a course and start learning.
          </p>

          <Link
            to="/courses"
            className="primary-btn"
          >
            Explore Courses
          </Link>

        </div>

      )}

    </main>
  );
}

export default MyCourses;