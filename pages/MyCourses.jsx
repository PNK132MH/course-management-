import { Link } from "react-router-dom";
import CourseCard from "../components/Coursecard";
import courses from "../data/courseData";

function MyCourses() {

  const enrolledIds =
    JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );

  const myCourses = courses.filter(
    (course) => enrolledIds.includes(course.id)
  );


  return (
    <main className="page">

      <div className="courses-header">

        <span>YOUR LEARNING</span>

        <h1>
          My Courses
        </h1>

        <p>
          Continue learning where you left off.
        </p>

      </div>


      {myCourses.length > 0 ? (

        <div className="course-grid">

          {myCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>

      ) : (

        <div className="empty-state">

          <div>🎓</div>

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