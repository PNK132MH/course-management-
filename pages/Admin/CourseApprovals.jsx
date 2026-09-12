import { Link } from "react-router-dom";
import { useState } from "react";
import "./CourseApprovals.css";

function CourseApprovals() {
  const [pendingCourses, setPendingCourses] = useState(() => {
    return JSON.parse(
      localStorage.getItem("pendingCourseApprovals") || "[]"
    );
  });

  const handleRemoveDemoCourse = (courseId) => {
    const updatedCourses = pendingCourses.filter(
      (course) => course.id !== courseId
    );

    setPendingCourses(updatedCourses);

    localStorage.setItem(
      "pendingCourseApprovals",
      JSON.stringify(updatedCourses)
    );
  };

  return (
    <main className="approval-page">

      <div className="approval-container">

        {/* HEADER */}

        <div className="approval-header">

          <span>ADMINISTRATION</span>

          <h1>Course Approvals</h1>

          <p>
            Review courses submitted by instructors.
          </p>

        </div>

        {/* PENDING COURSES */}

        {pendingCourses.length === 0 ? (

          <div className="no-pending-courses">

            <div className="no-pending-icon">
              ✓
            </div>

            <h2>No Courses Waiting for Approval</h2>

            <p>
              There are currently no courses waiting
              for admin review.
            </p>

          </div>

        ) : (

          <div className="approval-list">

            {pendingCourses.map((course) => (

              <div
                className="approval-card"
                key={course.id}
              >

                <div className="approval-info">

                  <span className="pending-label">
                    PENDING APPROVAL
                  </span>

                  <h2>
                    {course.title}
                  </h2>

                  <p>
                    Instructor:{" "}
                    {course.instructor || "Unknown Instructor"}
                  </p>

                  {course.category && (
                    <p>
                      Category: {course.category}
                    </p>
                  )}

                </div>

                <Link
                  to={`/admin/approvals/${course.id}`}
                  className="review-btn"
                >
                  Review
                </Link>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}

export default CourseApprovals;