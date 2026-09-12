import { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import courses from "../../data/courseData";
import "./MyCourses.css";

function MyCourses() {

  const [enrolledIds, setEnrolledIds] = useState(
    JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    )
  );

  // Get paid courses
  const paidIds = JSON.parse(
    localStorage.getItem("paidCourses") || "[]"
  );

  const myCourses = courses.filter(
    (course) => enrolledIds.includes(course.id)
  );

  // Remove a course from My Courses
  const removeCourse = (courseId) => {

    // Paid courses cannot be removed
    if (paidIds.includes(courseId)) {
      alert("You already paid for this course. You cannot remove it.");
      return;
    }

    const updatedIds = enrolledIds.filter(
      (id) => id !== courseId
    );

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedIds)
    );

    setEnrolledIds(updatedIds);
  };

  return (
    <main className="page">

      {/* PAGE HEADER */}
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

      {/* COURSES */}
      {myCourses.length > 0 ? (

        <div className="course-grid">

          {myCourses.map((course) => (

            <div key={course.id}>

             <CourseCard
  course={course}
  onRemove={removeCourse}
  continueCourse={true}
/>

              {/* COURSE STATUS */}
              <div className="course-status">

                {paidIds.includes(course.id) ? (
                  <span className="paid-status">
                    ✅ PAID
                  </span>
                ) : (
                  <span className="free-status">
                    🆓 FREE TRIAL
                  </span>
                )}

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* EMPTY STATE */

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