import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ReviewCourse.css";

function ReviewCourse() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [pendingCourses, setPendingCourses] = useState(() => {
    return JSON.parse(
      localStorage.getItem("pendingCourseApprovals") || "[]"
    );
  });

  const course = pendingCourses.find(
    (item) => String(item.id) === String(id)
  );

  /* =========================
     APPROVE COURSE
  ========================= */

  const handleApprove = () => {
    const approvedCourses = JSON.parse(
      localStorage.getItem("approvedCourses") || "[]"
    );

    const approvedCourse = {
      ...course,

      status: "Approved",

      approvedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "approvedCourses",
      JSON.stringify([
        ...approvedCourses,
        approvedCourse,
      ])
    );

    const updatedPendingCourses =
      pendingCourses.filter(
        (item) =>
          String(item.id) !== String(id)
      );

    setPendingCourses(updatedPendingCourses);

    localStorage.setItem(
      "pendingCourseApprovals",
      JSON.stringify(updatedPendingCourses)
    );

    alert("Course approved successfully!");

    navigate("/admin/approvals");
  };

  /* =========================
     REJECT COURSE
  ========================= */

  const handleReject = () => {
    const rejectedCourses = JSON.parse(
      localStorage.getItem("rejectedCourses") || "[]"
    );

    const rejectedCourse = {
      ...course,

      status: "Rejected",

      rejectedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "rejectedCourses",
      JSON.stringify([
        ...rejectedCourses,
        rejectedCourse,
      ])
    );

    const updatedPendingCourses =
      pendingCourses.filter(
        (item) =>
          String(item.id) !== String(id)
      );

    setPendingCourses(updatedPendingCourses);

    localStorage.setItem(
      "pendingCourseApprovals",
      JSON.stringify(updatedPendingCourses)
    );

    alert("Course rejected.");

    navigate("/admin/approvals");
  };

  /* =========================
     COURSE NOT FOUND
  ========================= */

  if (!course) {
    return (
      <main className="review-course-page">

        <div className="course-not-found">

          <h1>Course Not Found</h1>

          <p>
            This course is no longer waiting
            for approval.
          </p>

          <Link
            to="/admin/approvals"
            className="back-approvals-btn"
          >
            ← Back to Approvals
          </Link>

        </div>

      </main>
    );
  }

  /* =========================
     TOTAL LESSONS
  ========================= */

  const totalLessons =
    course.sections?.reduce(
      (total, section) =>
        total + section.lessons.length,
      0
    ) || 0;

  return (
    <main className="review-course-page">

      <div className="review-course-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="review-course-header">

          <Link
            to="/admin/approvals"
            className="back-link"
          >
            ← Back to Approvals
          </Link>

          <span>
            COURSE REVIEW
          </span>

          <h1>
            {course.title}
          </h1>

          <p>
            Submitted by{" "}
            <strong>
              {course.instructor || "Unknown Instructor"}
            </strong>
          </p>

        </div>

        {/* =========================
            COURSE INFORMATION
        ========================= */}

        <section className="review-admin-card">

          <div className="admin-card-heading">
            <h2>Course Information</h2>
          </div>

          <div className="admin-review-content">

            <div className="admin-review-row">

              <strong>Title</strong>

              <span>
                {course.title}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Subtitle</strong>

              <span>
                {course.subtitle ||
                  "Not provided"}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Description</strong>

              <span>
                {course.description}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Category</strong>

              <span>
                {course.category}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Difficulty</strong>

              <span>
                {course.difficulty}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Language</strong>

              <span>
                {course.language}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>Instructor</strong>

              <span>
                {course.instructor}
              </span>

            </div>

          </div>

        </section>

        {/* =========================
            LEARNING OBJECTIVES
        ========================= */}

        {course.objectives?.length > 0 && (
          <section className="review-admin-card">

            <div className="admin-card-heading">

              <h2>
                Learning Objectives
              </h2>

            </div>

            <div className="objective-list">

              {course.objectives.map(
                (objective, index) => (

                  <div
                    className="objective-item"
                    key={index}
                  >
                    ✓ {objective}
                  </div>

                )
              )}

            </div>

          </section>
        )}

        {/* =========================
            CURRICULUM
        ========================= */}

        <section className="review-admin-card">

          <div className="admin-card-heading">

            <div>

              <h2>
                Curriculum
              </h2>

              <p>
                {course.sections?.length || 0} Sections
                {" • "}
                {totalLessons} Lessons
              </p>

            </div>

          </div>

          <div className="admin-curriculum">

            {course.sections?.length > 0 ? (

              course.sections.map(
                (section, sectionIndex) => (

                  <div
                    className="admin-section"
                    key={section.id}
                  >

                    <div className="admin-section-title">

                      <span>
                        Section {sectionIndex + 1}
                      </span>

                      <h3>
                        {section.title}
                      </h3>

                    </div>

                    {section.lessons.length > 0 ? (

                      <div className="admin-lessons">

                        {section.lessons.map(
                          (lesson, lessonIndex) => (

                            <div
                              className="admin-lesson"
                              key={lesson.id}
                            >

                              <div className="admin-lesson-number">
                                {lessonIndex + 1}
                              </div>

                              <div className="admin-lesson-info">

                                <strong>
                                  {lesson.title}
                                </strong>

                                <p>

                                  {lesson.type}

                                  {lesson.duration
                                    ? ` • ${lesson.duration}`
                                    : ""}

                                  {lesson.preview
                                    ? " • Free Preview"
                                    : ""}

                                </p>

                              </div>

                            </div>

                          )
                        )}

                      </div>

                    ) : (

                      <p className="empty-lessons">
                        No lessons in this section.
                      </p>

                    )}

                  </div>

                )
              )

            ) : (

              <p className="empty-lessons">
                No curriculum was added.
              </p>

            )}

          </div>

        </section>

        {/* =========================
            PRICING
        ========================= */}

        <section className="review-admin-card">

          <div className="admin-card-heading">

            <h2>
              Pricing & Access
            </h2>

          </div>

          <div className="admin-review-content">

            <div className="admin-review-row">

              <strong>
                Course Type
              </strong>

              <span>
                {course.pricingType === "paid"
                  ? "Paid"
                  : "Free"}
              </span>

            </div>

            {course.pricingType === "paid" && (
              <div className="admin-review-row">

                <strong>
                  Price
                </strong>

                <span>
                  ${course.price}
                </span>

              </div>
            )}

            <div className="admin-review-row">

              <strong>
                Free Trial
              </strong>

              <span>
                {course.freeTrial
                  ? "Available"
                  : "Not Available"}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>
                Certificate
              </strong>

              <span>
                {course.certificate
                  ? "Included"
                  : "Not Included"}
              </span>

            </div>

            <div className="admin-review-row">

              <strong>
                Prerequisites
              </strong>

              <span>
                {course.prerequisites ||
                  "None provided"}
              </span>

            </div>

          </div>

        </section>

        {/* =========================
            ADMIN DECISION
        ========================= */}

        <section className="admin-decision">

          <h2>
            Admin Decision
          </h2>

          <p>
            Review the course carefully before
            approving it. Once approved, it can
            become available to students.
          </p>

          <div className="decision-buttons">

            <button
              type="button"
              className="reject-course-btn"
              onClick={handleReject}
            >
              Reject Course
            </button>

            <button
              type="button"
              className="approve-course-btn"
              onClick={handleApprove}
            >
              Approve Course
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}

export default ReviewCourse;