import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateCourseCurriculum from "./CreateCourseCurriculum";
import CreateCoursePricing from "./CreateCoursePricing";
import CreateCourseReview from "./CreateCourseReview";

import "./CreateCourse.css";

function CreateCourse() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [course, setCourse] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    difficulty: "",
    language: "English",
    image: "",
    objectives: [],

    sections: [],

    pricingType: "free",
    price: "",
    freeTrial: false,
    certificate: false,
    prerequisites: "",
  });

  const updateCourse = (newData) => {
    setCourse((previous) => ({
      ...previous,
      ...newData,
    }));
  };

  /* =========================
     STEP 1
  ========================= */

  const handleInformationNext = (event) => {
    event.preventDefault();

    if (
      !course.title ||
      !course.description ||
      !course.category ||
      !course.difficulty
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setStep(2);
  };

  /* =========================
     FINAL SUBMIT
  ========================= */

  const submitCourse = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );

    const pendingCourses = JSON.parse(
      localStorage.getItem("pendingCourseApprovals") || "[]"
    );

    const newCourse = {
      id: Date.now(),
      ...course,
      status: "Pending Approval",
      instructor: currentUser?.name || "Instructor",
      instructorEmail: currentUser?.email || "",
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "pendingCourseApprovals",
      JSON.stringify([...pendingCourses, newCourse])
    );

    localStorage.removeItem("courseDraft");

    alert("Course submitted for approval!");

    navigate("/instructor-dashboard");
  };

  return (
    <main className="create-course-page">

      <div className="create-course-container">

        {/* HEADER */}

        <div className="create-course-header">
          <span>INSTRUCTOR</span>

          <h1>Create a Course</h1>

          <p>
            Create your course and submit it for admin approval.
          </p>
        </div>

        {/* STEP INDICATOR */}

        <div className="create-course-steps">

          <div
            className={
              step >= 1
                ? "create-step active"
                : "create-step"
            }
          >
            <span>1</span>
            <p>Information</p>
          </div>

          <div
            className={
              step >= 2
                ? "create-step active"
                : "create-step"
            }
          >
            <span>2</span>
            <p>Curriculum</p>
          </div>

          <div
            className={
              step >= 3
                ? "create-step active"
                : "create-step"
            }
          >
            <span>3</span>
            <p>Pricing</p>
          </div>

          <div
            className={
              step >= 4
                ? "create-step active"
                : "create-step"
            }
          >
            <span>4</span>
            <p>Review</p>
          </div>

        </div>

        {/* =========================
            STEP 1 - INFORMATION
        ========================= */}

        {step === 1 && (
          <section className="create-course-information">

            <div className="create-section-title">
              <span>STEP 1</span>

              <h2>Course Information</h2>

              <p>
                Add the basic information about your course.
              </p>
            </div>

            <form onSubmit={handleInformationNext}>

              <label>
                Course Title *
              </label>

              <input
                type="text"
                placeholder="Example: React for Beginners"
                value={course.title}
                onChange={(event) =>
                  updateCourse({
                    title: event.target.value,
                  })
                }
              />

              <label>
                Course Subtitle
              </label>

              <input
                type="text"
                placeholder="A short description of your course"
                value={course.subtitle}
                onChange={(event) =>
                  updateCourse({
                    subtitle: event.target.value,
                  })
                }
              />

              <label>
                Description *
              </label>

              <textarea
                placeholder="Describe what students will learn..."
                value={course.description}
                onChange={(event) =>
                  updateCourse({
                    description: event.target.value,
                  })
                }
              />

              <div className="create-form-row">

                <div>
                  <label>
                    Category *
                  </label>

                  <select
                    value={course.category}
                    onChange={(event) =>
                      updateCourse({
                        category: event.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select category
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="Backend Development">
                      Backend Development
                    </option>

                    <option value="Mobile Development">
                      Mobile Development
                    </option>

                    <option value="Development Tools">
                      Development Tools
                    </option>
                  </select>
                </div>

                <div>
                  <label>
                    Difficulty *
                  </label>

                  <select
                    value={course.difficulty}
                    onChange={(event) =>
                      updateCourse({
                        difficulty: event.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select difficulty
                    </option>

                    <option value="Beginner">
                      Beginner
                    </option>

                    <option value="Intermediate">
                      Intermediate
                    </option>

                    <option value="Advanced">
                      Advanced
                    </option>
                  </select>
                </div>

              </div>

              <label>
                Language
              </label>

              <select
                value={course.language}
                onChange={(event) =>
                  updateCourse({
                    language: event.target.value,
                  })
                }
              >
                <option value="English">
                  English
                </option>

                <option value="Amharic">
                  Amharic
                </option>
              </select>

              <label>
                Course Thumbnail URL
              </label>

              <input
                type="text"
                placeholder="Paste an image URL"
                value={course.image}
                onChange={(event) =>
                  updateCourse({
                    image: event.target.value,
                  })
                }
              />

              <label>
                What will students learn?
              </label>

              <textarea
                placeholder="Example: Build React applications&#10;Understand components&#10;Use React hooks"
                value={course.objectives.join("\n")}
                onChange={(event) =>
                  updateCourse({
                    objectives: event.target.value
                      .split("\n")
                      .filter((item) => item.trim() !== ""),
                  })
                }
              />

              <div className="create-course-actions">

                <button
                  type="submit"
                  className="create-next-button"
                >
                  Next →
                </button>

              </div>

            </form>

          </section>
        )}

        {/* =========================
            STEP 2
        ========================= */}

        {step === 2 && (
          <CreateCourseCurriculum
            course={course}
            updateCourse={updateCourse}
            nextStep={() => setStep(3)}
            previousStep={() => setStep(1)}
          />
        )}

        {/* =========================
            STEP 3
        ========================= */}

        {step === 3 && (
          <CreateCoursePricing
            course={course}
            updateCourse={updateCourse}
            nextStep={() => setStep(4)}
            previousStep={() => setStep(2)}
          />
        )}

        {/* =========================
            STEP 4
        ========================= */}

        {step === 4 && (
          <CreateCourseReview
            course={course}
            previousStep={() => setStep(3)}
            submitCourse={submitCourse}
          />
        )}

      </div>

    </main>
  );
}

export default CreateCourse;