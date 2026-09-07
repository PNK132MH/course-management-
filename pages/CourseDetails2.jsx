import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "../data/courseData";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  // Controls whether the registration popup is visible
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);


  const course = courses.find(
    (course) => course.id === Number(id)
  );


  if (!course) {
    return (
      <main className="page">

        <h1>
          Course not found
        </h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>

      </main>
    );
  }


  // =========================
  // ENROLL COURSE
  // =========================

  const enrollCourse = () => {

    // Check if a user has registered/logged in
    const currentUser =
      localStorage.getItem("currentUser");


    // If there is no user, show the popup
    if (!currentUser) {

      setShowRegisterPopup(true);

      return;
    }


    // If the user is registered,
    // continue with the normal enrollment

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


  // =========================
  // GO TO REGISTER
  // =========================

  const goToRegister = () => {

    setShowRegisterPopup(false);

    navigate("/register");

  };


  return (
    <main className="details-page">

      <div className="details-main">


        {/* =========================
            COURSE INFORMATION
        ========================= */}

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

            <span>
              ⭐
            </span>

            <span>
              {course.students.toLocaleString()} students
            </span>

          </div>


          <p>
            Created by{" "}
            <strong>
              {course.instructor}
            </strong>
          </p>

        </div>


        {/* =========================
            ENROLL CARD
        ========================= */}

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
              START LEARNING
            </button>


            <h3>
              This course includes:
            </h3>


            <ul className="course-includes">

              <li>
                ✓ {course.duration} of content
              </li>

              <li>
                ✓ {course.lessons} lessons
              </li>

              <li>
                ✓ Beginner-friendly projects
              </li>

              <li>
                ✓ Lifetime access
              </li>

              <li>
                ✓ Learn at your own pace
              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* =========================
          REGISTRATION POPUP
      ========================= */}

      {showRegisterPopup && (

        <div className="register-popup-overlay">

          <div className="register-popup">

            <h2>
              Registration Required
            </h2>


            <p>
              Please register before enrolling
              in this course.
            </p>


            <div className="register-popup-actions">

              <button
                className="popup-ok-btn"
                onClick={goToRegister}
              >
                OK
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default CourseDetails;