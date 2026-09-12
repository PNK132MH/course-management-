import { useState } from "react";
import "./CreateCourseCurriculum.css";

function CreateCourseCurriculum({
  course,
  updateCourse,
  nextStep,
  previousStep,
}) {
  const [sectionTitle, setSectionTitle] = useState("");

  const [lessonData, setLessonData] = useState({
    sectionId: "",
    title: "",
    type: "Video",
    duration: "",
    content: "",
    preview: false,
  });

  /* =========================
     ADD SECTION
  ========================= */

  const addSection = () => {
    if (!sectionTitle.trim()) {
      alert("Please enter a section title.");
      return;
    }

    const newSection = {
      id: Date.now(),
      title: sectionTitle,
      lessons: [],
    };

    updateCourse({
      sections: [...course.sections, newSection],
    });

    setSectionTitle("");
  };

  /* =========================
     REMOVE SECTION
  ========================= */

  const removeSection = (sectionId) => {
    const updatedSections = course.sections.filter(
      (section) => section.id !== sectionId
    );

    updateCourse({
      sections: updatedSections,
    });

    if (lessonData.sectionId === sectionId) {
      setLessonData({
        ...lessonData,
        sectionId: "",
      });
    }
  };

  /* =========================
     ADD LESSON
  ========================= */

  const addLesson = () => {
    if (!lessonData.sectionId) {
      alert("Please select a section.");
      return;
    }

    if (!lessonData.title.trim()) {
      alert("Please enter a lesson title.");
      return;
    }

    const updatedSections = course.sections.map((section) => {
      if (section.id !== Number(lessonData.sectionId)) {
        return section;
      }

      return {
        ...section,

        lessons: [
          ...section.lessons,

          {
            id: Date.now(),
            title: lessonData.title,
            type: lessonData.type,
            duration: lessonData.duration,
            content: lessonData.content,
            preview: lessonData.preview,
          },
        ],
      };
    });

    updateCourse({
      sections: updatedSections,
    });

    setLessonData({
      sectionId: "",
      title: "",
      type: "Video",
      duration: "",
      content: "",
      preview: false,
    });
  };

  /* =========================
     REMOVE LESSON
  ========================= */

  const removeLesson = (sectionId, lessonId) => {
    const updatedSections = course.sections.map((section) => {
      if (section.id !== sectionId) {
        return section;
      }

      return {
        ...section,

        lessons: section.lessons.filter(
          (lesson) => lesson.id !== lessonId
        ),
      };
    });

    updateCourse({
      sections: updatedSections,
    });
  };

  /* =========================
     NEXT
  ========================= */

  const handleNext = () => {
    const totalLessons = course.sections.reduce(
      (total, section) =>
        total + section.lessons.length,
      0
    );

    if (course.sections.length === 0) {
      alert("Please add at least one section.");
      return;
    }

    if (totalLessons === 0) {
      alert("Please add at least one lesson.");
      return;
    }

    nextStep();
  };

  return (
    <section className="create-curriculum">

      <div className="curriculum-title">

        <span>STEP 2</span>

        <h2>Course Curriculum</h2>

        <p>
          Organize your course into sections and lessons.
        </p>

      </div>

      {/* =========================
          ADD SECTION
      ========================= */}

      <div className="curriculum-box">

        <h3>Add a Section</h3>

        <div className="curriculum-input-row">

          <input
            type="text"
            placeholder="Example: Introduction to React"
            value={sectionTitle}
            onChange={(event) =>
              setSectionTitle(event.target.value)
            }
          />

          <button
            type="button"
            onClick={addSection}
          >
            + Add Section
          </button>

        </div>

      </div>

      {/* =========================
          ADD LESSON
      ========================= */}

      {course.sections.length > 0 && (
        <div className="curriculum-box">

          <h3>Add a Lesson</h3>

          <label>
            Section
          </label>

          <select
            value={lessonData.sectionId}
            onChange={(event) =>
              setLessonData({
                ...lessonData,
                sectionId: event.target.value,
              })
            }
          >
            <option value="">
              Select a section
            </option>

            {course.sections.map((section) => (
              <option
                key={section.id}
                value={section.id}
              >
                {section.title}
              </option>
            ))}

          </select>

          <label>
            Lesson Title
          </label>

          <input
            type="text"
            placeholder="Example: What is React?"
            value={lessonData.title}
            onChange={(event) =>
              setLessonData({
                ...lessonData,
                title: event.target.value,
              })
            }
          />

          <div className="curriculum-form-row">

            <div>

              <label>
                Lesson Type
              </label>

              <select
                value={lessonData.type}
                onChange={(event) =>
                  setLessonData({
                    ...lessonData,
                    type: event.target.value,
                  })
                }
              >
                <option value="Video">
                  Video
                </option>

                <option value="Article">
                  Article
                </option>

                <option value="Quiz">
                  Quiz
                </option>
              </select>

            </div>

            <div>

              <label>
                Duration
              </label>

              <input
                type="text"
                placeholder="Example: 15 min"
                value={lessonData.duration}
                onChange={(event) =>
                  setLessonData({
                    ...lessonData,
                    duration: event.target.value,
                  })
                }
              />

            </div>

          </div>

          <label>
            Content / Video URL
          </label>

          <input
            type="text"
            placeholder="Paste video URL or content"
            value={lessonData.content}
            onChange={(event) =>
              setLessonData({
                ...lessonData,
                content: event.target.value,
              })
            }
          />

          <label className="preview-checkbox">

            <input
              type="checkbox"
              checked={lessonData.preview}
              onChange={(event) =>
                setLessonData({
                  ...lessonData,
                  preview: event.target.checked,
                })
              }
            />

            Free preview lesson

          </label>

          <button
            type="button"
            className="add-lesson-button"
            onClick={addLesson}
          >
            + Add Lesson
          </button>

        </div>
      )}

      {/* =========================
          COURSE CURRICULUM
      ========================= */}

      <div className="curriculum-list">

        <h3>Your Curriculum</h3>

        {course.sections.length === 0 ? (
          <p className="empty-curriculum">
            No sections added yet.
          </p>
        ) : (
          course.sections.map((section, sectionIndex) => (

            <div
              className="curriculum-section"
              key={section.id}
            >

              <div className="section-header">

                <div>
                  <span>
                    Section {sectionIndex + 1}
                  </span>

                  <h4>
                    {section.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    removeSection(section.id)
                  }
                >
                  Remove
                </button>

              </div>

              {section.lessons.length === 0 ? (
                <p className="no-lessons">
                  No lessons in this section.
                </p>
              ) : (

                section.lessons.map(
                  (lesson, lessonIndex) => (

                    <div
                      className="curriculum-lesson"
                      key={lesson.id}
                    >

                      <div className="lesson-number">
                        {lessonIndex + 1}
                      </div>

                      <div className="lesson-info">

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

                      <button
                        type="button"
                        onClick={() =>
                          removeLesson(
                            section.id,
                            lesson.id
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  )
                )

              )}

            </div>

          ))
        )}

      </div>

      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="curriculum-actions">

        <button
          type="button"
          className="curriculum-back-button"
          onClick={previousStep}
        >
          ← Back
        </button>

        <button
          type="button"
          className="curriculum-next-button"
          onClick={handleNext}
        >
          Next →
        </button>

      </div>

    </section>
  );
}

export default CreateCourseCurriculum;