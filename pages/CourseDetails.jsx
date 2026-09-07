import { useNavigate, useParams } from "react-router-dom";
import courses from "../data/courseData";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === Number(id)
  );


  if (!course) {
    return (
      <main className="page">
        <h1>Course not found</h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </main>
    );
  }


  const enrollCourse = () => {

    const existingCourses =
      JSON.parse(
        localStorage.getItem("enrolledCourses") || "[]"
      );

    const alreadyEnrolled =
      existingCourses.some(
        (courseId) => courseId === course.id
      );

    if (!alreadyEnrolled) {

      existingCourses.push(course.id);

      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(existingCourses)
      );
    }

    navigate("/my-courses");
  };


  const startTrial = () => {

    alert(
      `Your free trial for "${course.title}" has started!`
    );

  };


  return (
    <main className="details-page">

      <div className="details-main">

        <div className="details-info">

          <span className="course-category">
            {course.category}
          </span>

          <h1>
            {course.title}
          </h1>

          <p className="details-description">
            {course.description}
          </p>

          <div className="details-rating">

            <strong>
              {course.rating}
            </strong>

            <span>⭐</span>

            <span>
              {course.students.toLocaleString()} students
            </span>

          </div>

          <p>
            Created by <strong>{course.instructor}</strong>
          </p>

        </div>


        {/* ENROLL CARD */}

        <div className="enroll-card">

          <img
            src={course.image}
            alt={course.title}
          />

          <div className="enroll-content">

            <h2>
              ${course.price}
            </h2>

            <p>
              Lifetime access
            </p>

            <button
              className="primary-btn full-btn"
              onClick={enrollCourse}
            >
              Enroll Now
            </button>

            <button
              className="trial-btn"
              onClick={startTrial}
            >
              Start Free Trial
            </button>

            <h3>
              This course includes:
            </h3>

            <ul className="course-includes">

              <li>✓ {course.duration} of content</li>

              <li>✓ {course.lessons} lessons</li>

              <li>✓ Beginner-friendly projects</li>

              <li>✓ Lifetime access</li>

              <li>✓ Learn at your own pace</li>

            </ul>

          </div>

        </div>

      </div>

    </main>
  );
}

export default CourseDetails;