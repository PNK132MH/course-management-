import "./CreateCourseReview.css";

function CreateCourseReview({
  course,
  previousStep,
  submitCourse,
}) {
  const totalLessons = course.sections.reduce(
    (total, section) =>
      total + section.lessons.length,
    0
  );

  return (
    <section className="create-review">

      <div className="review-title">

        <span>STEP 4</span>

        <h2>Review & Submit</h2>

        <p>
          Check everything before submitting your course.
        </p>

      </div>

      {/* =========================
          COURSE INFORMATION
      ========================= */}

      <div className="review-card">

        <div className="review-card-header">
          <h3>Course Information</h3>
        </div>

        <div className="review-content">

          <div className="review-row">
            <strong>Title</strong>
            <span>{course.title}</span>
          </div>

          <div className="review-row">
            <strong>Subtitle</strong>
            <span>
              {course.subtitle || "Not provided"}
            </span>
          </div>

          <div className="review-row">
            <strong>Description</strong>
            <span>{course.description}</span>
          </div>

          <div className="review-row">
            <strong>Category</strong>
            <span>{course.category}</span>
          </div>

          <div className="review-row">
            <strong>Difficulty</strong>
            <span>{course.difficulty}</span>
          </div>

          <div className="review-row">
            <strong>Language</strong>
            <span>{course.language}</span>
          </div>

        </div>

      </div>

      {/* =========================
          CURRICULUM
      ========================= */}

      <div className="review-card">

        <div className="review-card-header">
          <h3>Curriculum</h3>

          <span>
            {course.sections.length} Sections •{" "}
            {totalLessons} Lessons
          </span>
        </div>

        <div className="review-content">

          {course.sections.map(
            (section, sectionIndex) => (

              <div
                className="review-section"
                key={section.id}
              >

                <h4>
                  {sectionIndex + 1}. {section.title}
                </h4>

                {section.lessons.map(
                  (lesson, lessonIndex) => (

                    <div
                      className="review-lesson"
                      key={lesson.id}
                    >

                      <span>
                        {lessonIndex + 1}
                      </span>

                      <div>

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

            )
          )}

        </div>

      </div>

      {/* =========================
          PRICING
      ========================= */}

      <div className="review-card">

        <div className="review-card-header">
          <h3>Pricing & Access</h3>
        </div>

        <div className="review-content">

          <div className="review-row">

            <strong>Course Type</strong>

            <span>
              {course.pricingType === "free"
                ? "Free"
                : "Paid"}
            </span>

          </div>

          {course.pricingType === "paid" && (
            <div className="review-row">

              <strong>Price</strong>

              <span>
                ${course.price}
              </span>

            </div>
          )}

          <div className="review-row">

            <strong>Free Trial</strong>

            <span>
              {course.freeTrial
                ? "Available"
                : "Not Available"}
            </span>

          </div>

          <div className="review-row">

            <strong>Certificate</strong>

            <span>
              {course.certificate
                ? "Included"
                : "Not Included"}
            </span>

          </div>

        </div>

      </div>

      {/* =========================
          SUBMISSION MESSAGE
      ========================= */}

      <div className="approval-message">

        <span>📝</span>

        <div>

          <strong>
            Submit for Admin Approval
          </strong>

          <p>
            Your course will be reviewed by an admin
            before it becomes available to students.
          </p>

        </div>

      </div>

      {/* =========================
          BUTTONS
      ========================= */}

      <div className="review-actions">

        <button
          type="button"
          className="review-back-button"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          type="button"
          className="submit-course-button"
          onClick={submitCourse}
        >
          Submit for Approval
        </button>

      </div>

    </section>
  );
}

export default CreateCourseReview;