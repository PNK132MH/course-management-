import "./CreateCoursePricing.css";

function CreateCoursePricing({
  course,
  updateCourse,
  nextStep,
  previousStep,
}) {
  const handleNext = () => {
    if (
      course.pricingType === "paid" &&
      (!course.price || Number(course.price) <= 0)
    ) {
      alert("Please enter a valid course price.");
      return;
    }

    nextStep();
  };

  return (
    <section className="create-pricing">

      <div className="pricing-title">

        <span>STEP 3</span>

        <h2>Pricing & Access</h2>

        <p>
          Choose how students will access your course.
        </p>

      </div>

      {/* =========================
          FREE / PAID
      ========================= */}

      <div className="pricing-options">

        <button
          type="button"
          className={
            course.pricingType === "free"
              ? "pricing-card selected"
              : "pricing-card"
          }
          onClick={() =>
            updateCourse({
              pricingType: "free",
              price: "",
            })
          }
        >

          <div className="pricing-icon">
            🆓
          </div>

          <div>
            <h3>Free Course</h3>

            <p>
              Students can access this course for free.
            </p>
          </div>

        </button>

        <button
          type="button"
          className={
            course.pricingType === "paid"
              ? "pricing-card selected"
              : "pricing-card"
          }
          onClick={() =>
            updateCourse({
              pricingType: "paid",
            })
          }
        >

          <div className="pricing-icon">
            💳
          </div>

          <div>
            <h3>Paid Course</h3>

            <p>
              Students must pay to access this course.
            </p>
          </div>

        </button>

      </div>

      {/* =========================
          PRICE
      ========================= */}

      {course.pricingType === "paid" && (
        <div className="course-price-box">

          <label>
            Course Price
          </label>

          <div className="price-input-wrapper">

            <span>$</span>

            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="29.99"
              value={course.price}
              onChange={(event) =>
                updateCourse({
                  price: event.target.value,
                })
              }
            />

          </div>

        </div>
      )}

      {/* =========================
          EXTRA OPTIONS
      ========================= */}

      <div className="access-options">

        <h3>Additional Options</h3>

        <label className="access-option">

          <input
            type="checkbox"
            checked={course.freeTrial}
            onChange={(event) =>
              updateCourse({
                freeTrial: event.target.checked,
              })
            }
          />

          <div>
            <strong>Allow Free Trial</strong>

            <p>
              Let students try the course before paying.
            </p>
          </div>

        </label>

        <label className="access-option">

          <input
            type="checkbox"
            checked={course.certificate}
            onChange={(event) =>
              updateCourse({
                certificate: event.target.checked,
              })
            }
          />

          <div>
            <strong>Certificate of Completion</strong>

            <p>
              Students receive a certificate after completing the course.
            </p>
          </div>

        </label>

      </div>

      {/* =========================
          PREREQUISITES
      ========================= */}

      <div className="prerequisites">

        <label>
          Prerequisites
        </label>

        <textarea
          placeholder="What should students know before taking this course?"
          value={course.prerequisites}
          onChange={(event) =>
            updateCourse({
              prerequisites: event.target.value,
            })
          }
        />

      </div>

      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="pricing-actions">

        <button
          type="button"
          className="pricing-back-button"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          type="button"
          className="pricing-next-button"
          onClick={handleNext}
        >
          Next →
        </button>

      </div>

    </section>
  );
}

export default CreateCoursePricing;