import { useMemo } from "react";
import courses from "../../data/courseData";
import "./Progress.css";

function Progress() {

  /*
    TEMPORARY FRONTEND DATA

    Later, your backend teammate can replace
    this localStorage data with real user progress.

    Example:
    course ID 1 = 65% completed
    course ID 2 = 100% completed
  */

  const progressData = JSON.parse(
    localStorage.getItem("courseProgress") || "{}"
  );


  /*
    Get the courses the user has enrolled in.

    For now this comes from localStorage.
  */

  const enrolledIds = JSON.parse(
    localStorage.getItem("enrolledCourses") || "[]"
  );


  /*
    Find the actual course objects.
  */

  const enrolledCourses = useMemo(() => {

    return courses.filter((course) =>
      enrolledIds.includes(course.id)
    );

  }, [enrolledIds]);


  /*
    Calculate overall progress.
  */

  const overallProgress = useMemo(() => {

    if (enrolledCourses.length === 0) {
      return 0;
    }

    const total = enrolledCourses.reduce(
      (sum, course) =>
        sum + (progressData[course.id] || 0),
      0
    );

    return Math.round(
      total / enrolledCourses.length
    );

  }, [enrolledCourses, progressData]);


  return (

    <main className="progress-page">

      {/* HEADER */}

      <section className="progress-header">

        <span>LEARNING PROGRESS</span>

        <h1>Your Progress</h1>

        <p>
          Track your progress across your enrolled courses.
        </p>

      </section>


      {/* OVERALL PROGRESS */}

      <section className="overall-progress">

        <div>

          <h2>Overall Progress</h2>

          <p>
            Keep learning and complete your courses.
          </p>

        </div>


        <div className="overall-number">

          {overallProgress}%

        </div>

      </section>


      {/* COURSE PROGRESS */}

      <section className="progress-courses">

        <h2>Course Progress</h2>


        {enrolledCourses.length === 0 ? (

          <div className="progress-empty">

            <h3>No courses yet</h3>

            <p>
              Enroll in a course to start tracking your progress.
            </p>

          </div>

        ) : (

          <div className="progress-list">

            {enrolledCourses.map((course) => {

              const progress =
                progressData[course.id] || 0;

              return (

                <div
                  className="progress-card"
                  key={course.id}
                >

                  <div className="progress-card-top">

                    <div>

                      <h3>
                        {course.title}
                      </h3>

                      <p>
                        {course.category}
                      </p>

                    </div>


                    <strong>
                      {progress}%
                    </strong>

                  </div>


                  <div className="progress-bar">

                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${progress}%`
                      }}
                    ></div>

                  </div>


                  <div className="progress-status">

                    {progress === 100
                      ? "Course completed"
                      : `${progress}% completed`}

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </section>

    </main>
  );
}

export default Progress;