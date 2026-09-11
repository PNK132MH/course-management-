import { useMemo } from "react";
import courses from "../../data/courseData";
import "./Certificates.css";

function Certificates() {

  /*
    TEMPORARY FRONTEND DATA

    A course is considered completed when
    its progress reaches 100%.

    Later the backend can provide this information.
  */

  const progressData = JSON.parse(
    localStorage.getItem("courseProgress") || "{}"
  );


  /*
    Get enrolled courses.
  */

  const enrolledIds = JSON.parse(
    localStorage.getItem("enrolledCourses") || "[]"
  );


  /*
    Find completed courses.
  */

  const completedCourses = useMemo(() => {

    return courses.filter((course) => {

      const isEnrolled =
        enrolledIds.includes(course.id);

      const progress =
        progressData[course.id] || 0;

      return isEnrolled && progress >= 100;

    });

  }, [enrolledIds, progressData]);


  return (

    <main className="certificates-page">

      {/* HEADER */}

      <section className="certificates-header">

        <span>ACHIEVEMENTS</span>

        <h1>Certificates</h1>

        <p>
          Your certificates will appear here when you complete a course.
        </p>

      </section>


      {/* CERTIFICATES */}

      {completedCourses.length === 0 ? (

        <section className="certificates-empty">

          <div className="certificate-icon">
            🏆
          </div>

          <h2>
            No certificates yet
          </h2>

          <p>
            Complete a course to earn your first certificate.
          </p>

        </section>

      ) : (

        <section className="certificates-list">

          {completedCourses.map((course) => (

            <div
              className="certificate-card"
              key={course.id}
            >

              <div className="certificate-top">

                <div className="certificate-icon">
                  🏆
                </div>

                <span>
                  COURSE COMPLETED
                </span>

              </div>


              <h2>
                {course.title}
              </h2>


              <p>
                Congratulations! You have successfully
                completed this course.
              </p>


              <button
                className="certificate-button"
                onClick={() =>
                  alert(
                    `Certificate for "${course.title}" is ready!`
                  )
                }
              >
                View Certificate
              </button>

            </div>

          ))}

        </section>

      )}

    </main>
  );
}

export default Certificates;