import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import courses from "../data/courseData";

import "./CourseDetails.css";


function CourseDetails() {

  const { id } = useParams();
  const navigate = useNavigate();


  // Registration popup
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);


  // Free/Paid trial popup
  const [showTrialPopup, setShowTrialPopup] = useState(false);


  // Find the course
  const course = courses.find(
    (course) => course.id === Number(id)
  );


  // If course doesn't exist
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


  // =================================
  // ENROLL NOW
  // =================================

  const enrollCourse = () => {

    const currentUser =
      localStorage.getItem("currentUser");


    // User is not registered/logged in
    if (!currentUser) {

      setShowRegisterPopup(true);

      return;
    }


    // User is registered
    // Show Free/Paid Trial popup
    setShowTrialPopup(true);
  };


  // =================================
  // GO TO REGISTER
  // =================================

  const goToRegister = () => {

    setShowRegisterPopup(false);

    navigate("/register");
  };


  // =================================
  // START FREE TRIAL
  // =================================

  const goToFree = () => {

    // Get courses already saved in My Courses
    const existingCourses = JSON.parse(
      localStorage.getItem("enrolledCourses") || "[]"
    );


    // Add this course if it isn't already there
    if (!existingCourses.includes(course.id)) {

      existingCourses.push(course.id);

      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(existingCourses)
      );
    }


    // Close popup
    setShowTrialPopup(false);


    // Tell the user
    alert("Your free trial has started!");


    // =================================
    // OPEN THE CORRECT COURSE
    // =================================

    if (course.title === "React for Beginners") {

      navigate("/courses/react");

    } else if (course.title === "JavaScript Mastery") {

      navigate("/courses/javascript");

    } else if (
      course.title === "HTML & CSS Complete Course"
    ) {

      navigate("/courses/html-css");

    } else if (
      course.title === "Node.js Backend Development"
    ) {

      navigate("/courses/node");

    } else if (
      course.title === "React Native App Development"
    ) {

      navigate("/courses/react-native");

    } else if (
      course.title === "Git & GitHub for Developers"
    ) {

      navigate("/courses/github");

    }

  };


  // =================================
  // PAID TRIAL
  // =================================

 const goToPaid = () => {

  setShowTrialPopup(false);

  navigate(`/payment/${course.id}`);

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
              ETB {course.price}
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


      {/* =================================
          REGISTRATION POPUP
      ================================= */}

      {showRegisterPopup && (

        <div className="register-popup-overlay">

          <div className="register-popup">

            <button
              className="popup-close"
              onClick={() =>
                setShowRegisterPopup(false)
              }
            >
              ×
            </button>


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


      {/* =================================
          FREE / PAID TRIAL POPUP
      ================================= */}

      {showTrialPopup && (

        <div className="trial-popup-overlay">

          <div className="trial-popup">

            <button
              className="popup-close"
              onClick={() =>
                setShowTrialPopup(false)
              }
            >
              ×
            </button>


            <h2>
              Choose Your Trial
            </h2>


            <p className="trial-subtitle">
              Choose how you want to start learning.
            </p>


            <div className="trial-options">


              {/* =========================
                  FREE TRIAL
              ========================= */}

              <div className="trial-card">

                <h3>
                  Free Trial
                </h3>


                <ul>

                  <li>
                    ✓ Professional Teachings
                  </li>

                  <li>
                    ✓ High-Quality Tutorials
                  </li>

                  <li>
                    ✓ Effective Exercises
                  </li>

                </ul>


                <button
                  className="free-trial-btn"
                  onClick={goToFree}
                >
                  Start Free Trial
                </button>

              </div>


              {/* =========================
                  PAID TRIAL
              ========================= */}

              <div className="trial-card paid-trial-card">

                <h3>
                  Paid Trial
                </h3>


                <ul>

                  <li>
                    ✓ Professional Teachings
                  </li>

                  <li>
                    ✓ High-Quality Tutorials
                  </li>

                  <li>
                    ✓ Effective Exercises
                  </li>

                  <li>
                    ✓ Download Available
                  </li>

                </ul>


                <button
                  className="paid-trial-btn"
                  onClick={goToPaid}
                >
                  Choose Paid Trial
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


export default CourseDetails;